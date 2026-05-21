const bcrypt = require('bcryptjs')

const db = require('../database/db')

const generateToken = require('../utils/generateToken')

const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body

    if (!name || !email || !password || !role) {
      return res.status(400).json({
        message: 'All fields are required',
      })
    }

    db.get(
      'SELECT * FROM users WHERE email = ?',
      [email],
      async (error, user) => {
        if (user) {
          return res.status(400).json({
            message: 'User already exists',
          })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        db.run(
          'INSERT INTO users(name,email,password,role) VALUES(?,?,?,?)',
          [name, email, hashedPassword, role],
          function (error) {
            if (error) {
              return res.status(500).json({
                message: error.message,
              })
            }

            const newUser = {
              id: this.lastID,
              name,
              email,
              role,
            }

            const token = generateToken(newUser)

            res.status(201).json({
              message: 'User Registered',
              token,
              user: newUser,
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

const login = (req, res) => {
  try {
    const { email, password } = req.body

    db.get(
      'SELECT * FROM users WHERE email = ?',
      [email],
      async (error, user) => {
        if (!user) {
          return res.status(400).json({
            message: 'Invalid Credentials',
          })
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
          return res.status(400).json({
            message: 'Invalid Credentials',
          })
        }

        const token = generateToken(user)

        res.status(200).json({
          message: 'Login Success',
          token,
          user: {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
          },
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
  register,
  login,
}