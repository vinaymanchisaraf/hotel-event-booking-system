const express = require('express')

const router = express.Router()

const verifyToken = require('../middleware/authMiddleware')

const allowRoles = require('../middleware/roleMiddleware')

const {
  createReservation,
  getReservations,
  updateReservationStatus,
} = require('../controllers/reservationController')

router.post(
  '/',
  verifyToken,
  allowRoles('customer'),
  createReservation
)

router.get('/', verifyToken, getReservations)

router.put(
  '/:id/status',
  verifyToken,
  allowRoles('admin', 'coordinator'),
  updateReservationStatus
)

module.exports = router