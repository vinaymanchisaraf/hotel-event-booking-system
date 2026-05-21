const db = require('../database/db')

const getDashboardMetrics = (req, res) => {
  try {
    db.get(
      `
      SELECT
        COUNT(*) AS totalBookings,
        SUM(guest_count) AS totalGuests
      FROM reservations
      `,
      [],
      (error, row) => {
        if (error) {
          return res.status(500).json({
            message: error.message,
          })
        }

        res.status(200).json({
          totalBookings: row.totalBookings || 0,
          totalGuests: row.totalGuests || 0,
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
  getDashboardMetrics,
}