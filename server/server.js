const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const fs = require('fs')
const path = require('path')

const db = require('./database/db')

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

const authRoutes = require('./routes/authRoutes')

app.use('/api/auth', authRoutes)

const schemaPath = path.join(__dirname, 'database', 'schema.sql')

const schema = fs.readFileSync(schemaPath, 'utf-8')

db.exec(schema, error => {
  if (error) {
    console.log(error.message)
  } else {
    console.log('Database Tables Created')
  }
})

app.get('/', (req, res) => {
  res.json({ message: 'Hotel Booking API Running' })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})