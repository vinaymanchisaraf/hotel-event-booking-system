const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.json({ message: 'All Halls' })
})

router.post('/', (req, res) => {
  res.json({ message: 'Create Hall' })
})

module.exports = router