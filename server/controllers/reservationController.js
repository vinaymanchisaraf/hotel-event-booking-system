const db = require('../database/db')
const createReservation = (req, res) => {
  try {
    const {
      hall_id,
      event_type,
      guest_count,
      event_date,
      start_time,
      end_time,
    } = req.body

    if (
      !hall_id ||
      !event_type ||
      !guest_count ||
      !event_date ||
      !start_time ||
      !end_time
    ) {
      return res.status(400).json({
        message: 'All fields are required',
      })
    }


    db.get(
      `
      SELECT * FROM reservations
      WHERE hall_id = ?
      AND event_date = ?
      AND (
        start_time < ?
        AND end_time > ?
      )
      `,
      [hall_id, event_date, end_time, start_time],

      (error, existingReservation) => {
        if (error) {
          return res.status(500).json({
            message: error.message,
          })
        }

        // If already booked
        if (existingReservation) {
          return res.status(400).json({
            message:
              'Hall already booked for selected time',
          })
        }

        db.run(
          `
          INSERT INTO reservations(
            customer_id,
            hall_id,
            event_type,
            guest_count,
            event_date,
            start_time,
            end_time,
            reservation_status
          )
          VALUES(?,?,?,?,?,?,?,?)
          `,
          [
            req.user.id,
            hall_id,
            event_type,
            guest_count,
            event_date,
            start_time,
            end_time,
            'Pending',
          ],

          function (error) {
            if (error) {
              return res.status(500).json({
                message: error.message,
              })
            }

            res.status(201).json({
              message:
                'Reservation Created Successfully',
              reservationId: this.lastID,
            })
          }
        )
      }
    )
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}


const getReservations = (req, res) => {
  try {
    db.all(
      `
      SELECT * FROM reservations
      ORDER BY id DESC
      `,
      [],
      (error, rows) => {
        if (error) {
          return res.status(500).json({
            message: error.message,
          })
        }

        res.status(200).json(rows)
      }
    )
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}


const updateReservationStatus = (req, res) => {
  try {
    const { id } = req.params

    const { status } = req.body

    // Allowed statuses
    const allowedStatuses = [
      'Pending',
      'Confirmed',
      'Ongoing',
      'Completed',
      'Cancelled',
    ]

    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({
        message: 'Invalid Status',
      })
    }

    db.run(
      `
      UPDATE reservations
      SET reservation_status = ?
      WHERE id = ?
      `,
      [status, id],

      function (error) {
        if (error) {
          return res.status(500).json({
            message: error.message,
          })
        }

        if (this.changes === 0) {
          return res.status(404).json({
            message: 'Reservation Not Found',
          })
        }

        res.status(200).json({
          message:
            'Reservation Status Updated Successfully',
        })
      }
    )
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}


module.exports = {
  createReservation,
  getReservations,
  updateReservationStatus,
}