const express = require('express')

const router = express.Router()

const {
  getDashboardMetrics,
} = require('../controllers/dashboardController')

router.get('/events', getDashboardMetrics)

module.exports = router