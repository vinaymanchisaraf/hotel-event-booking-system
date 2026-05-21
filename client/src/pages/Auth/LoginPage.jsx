import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function LoginPage() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      const response = await axios.post(
        'http://localhost:5000/api/auth/login',
        {
          email,
          password,
        }
      )

      localStorage.setItem('token', response.data.token)

      localStorage.setItem(
        'user',
        JSON.stringify(response.data.user)
      )

      alert('Login Success')

      if (response.data.user.role === 'admin') {
        navigate('/admin/dashboard')
      } else if (response.data.user.role === 'coordinator') {
        navigate('/coordinator/dashboard')
      } else {
        navigate('/')
      }
    } catch (error) {
      alert(error.response.data.message)
    }
  }

  return (
    <div className='min-h-screen flex justify-center items-center'>
      <form
        onSubmit={handleSubmit}
        className='bg-slate-800 p-8 rounded-xl w-96'
      >
        <h1 className='text-3xl mb-6'>Login</h1>

        <input
          type='email'
          placeholder='Email'
          className='w-full p-3 mb-4 rounded bg-slate-700'
          onChange={e => setEmail(e.target.value)}
        />

        <input
          type='password'
          placeholder='Password'
          className='w-full p-3 mb-4 rounded bg-slate-700'
          onChange={e => setPassword(e.target.value)}
        />

        <button className='bg-violet-500 w-full py-3 rounded'>
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginPage