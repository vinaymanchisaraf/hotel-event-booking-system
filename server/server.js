const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const fs = require('fs')
const path = require('path')

dotenv.config()

const app = express()

app.use(
  cors({
    origin: '*',
  })
)

app.use(express.json())

const db = require('./database/db')

const authRoutes = require('./routes/authRoutes')
const reservationRoutes = require('./routes/reservationRoutes')
const dashboardRoutes = require('./routes/dashboardRoutes')

app.use('/api/auth', authRoutes)
app.use('/api/reservations', reservationRoutes)
app.use('/api/dashboard', dashboardRoutes)

try {
  const schemaPath = path.join(
    __dirname,
    'database',
    'schema.sql'
  )

  const schema = fs.readFileSync(schemaPath, 'utf-8')

  db.exec(schema, error => {
    if (error) {
      console.log('Schema Error:', error.message)
    } else {
      console.log('Database Tables Created')
    }
  })
} catch (error) {
  console.log('Schema File Error:', error.message)
}

app.get('/', (req, res) => {
  res.json({
    message: 'Hotel Booking API Running',
  })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})