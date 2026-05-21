import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='sticky top-0 z-50 backdrop-blur-xl bg-black/20 border-b border-white/10 px-8 py-5 flex justify-between items-center'>
      
      {/* Logo */}
      <h1 className='text-3xl font-extrabold bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent'>
        Hotel Events
      </h1>

      {/* Navigation Links */}
      <div className='flex gap-8 text-lg font-medium text-white'>
        
        <Link
          to='/'
          className='hover:text-violet-400 transition-all duration-300'
        >
          Home
        </Link>

        <Link
          to='/halls'
          className='hover:text-violet-400 transition-all duration-300'
        >
          Halls
        </Link>

        <Link
          to='/login'
          className='hover:text-violet-400 transition-all duration-300'
        >
          Login
        </Link>
      </div>
    </nav>
  )
}

export default Navbar