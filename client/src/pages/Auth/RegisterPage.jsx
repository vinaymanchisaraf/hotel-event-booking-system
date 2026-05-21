import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function RegisterPage() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'customer',
  })

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      await axios.post(
        'http://localhost:5000/api/auth/register',
        formData
      )

      alert('Registration Success')

      navigate('/login')
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
        <h1 className='text-3xl mb-6'>Register</h1>

        <input
          type='text'
          name='name'
          placeholder='Name'
          className='w-full p-3 mb-4 rounded bg-slate-700'
          onChange={handleChange}
        />

        <input
          type='email'
          name='email'
          placeholder='Email'
          className='w-full p-3 mb-4 rounded bg-slate-700'
          onChange={handleChange}
        />

        <input
          type='password'
          name='password'
          placeholder='Password'
          className='w-full p-3 mb-4 rounded bg-slate-700'
          onChange={handleChange}
        />

        <select
          name='role'
          className='w-full p-3 mb-4 rounded bg-slate-700'
          onChange={handleChange}
        >
          <option value='customer'>Customer</option>
          <option value='admin'>Admin</option>
          <option value='coordinator'>Coordinator</option>
        </select>

        <button className='bg-violet-500 w-full py-3 rounded'>
          Register
        </button>
      </form>
    </div>
  )
}

export default RegisterPage