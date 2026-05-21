const sqlite3 = require('sqlite3').verbose()
const path = require('path')

const dbPath = path.join(__dirname, 'hotelBooking.db')

const db = new sqlite3.Database(dbPath, error => {
  if (error) {
    console.log(error.message)
  } else {
    console.log('SQLite Connected')
  }
})

module.exports = db