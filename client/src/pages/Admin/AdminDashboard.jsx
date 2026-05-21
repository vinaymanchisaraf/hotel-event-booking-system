import { motion } from 'framer-motion'

import {
  FaMoneyBillWave,
  FaCalendarCheck,
  FaUsers,
  FaChartLine,
} from 'react-icons/fa'

const recentBookings = [
  {
    id: 1,
    customer: 'Rahul Sharma',
    hall: 'Royal Conference Hall',
    amount: '₹20,000',
    status: 'Confirmed',
  },

  {
    id: 2,
    customer: 'Priya Events',
    hall: 'Grand Luxury Hall',
    amount: '₹15,000',
    status: 'Pending',
  },

  {
    id: 3,
    customer: 'Tech Summit',
    hall: 'Elite Business Hall',
    amount: '₹12,000',
    status: 'Completed',
  },
]

function AdminDashboard() {
  return (
    <div className='min-h-screen bg-[#020617] text-white p-8'>
      
      {/* Background Glow */}
      <div className='absolute top-0 left-0 w-96 h-96 bg-violet-600 opacity-20 blur-[120px]' />
      <div className='absolute bottom-0 right-0 w-96 h-96 bg-blue-600 opacity-20 blur-[120px]' />

      {/* Header */}
      <div className='relative z-10 mb-14'>
        <h1 className='text-6xl font-extrabold bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent'>
          Admin Dashboard
        </h1>

        <p className='text-gray-400 mt-4 text-xl'>
          Monitor hall bookings, revenue, customers,
          and upcoming events.
        </p>
      </div>

      {/* Statistics Cards */}
      <div className='relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16'>
        
        {/* Revenue */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className='bg-slate-900/70 border border-white/10 rounded-3xl p-8 shadow-2xl'
        >
          <FaMoneyBillWave className='text-5xl text-green-400 mb-6' />

          <h2 className='text-2xl text-gray-300'>
            Total Revenue
          </h2>

          <p className='text-5xl font-bold text-green-400 mt-4'>
            ₹5L
          </p>
        </motion.div>

        {/* Bookings */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className='bg-slate-900/70 border border-white/10 rounded-3xl p-8 shadow-2xl'
        >
          <FaCalendarCheck className='text-5xl text-violet-400 mb-6' />

          <h2 className='text-2xl text-gray-300'>
            Total Bookings
          </h2>

          <p className='text-5xl font-bold text-violet-400 mt-4'>
            120
          </p>
        </motion.div>

        {/* Customers */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className='bg-slate-900/70 border border-white/10 rounded-3xl p-8 shadow-2xl'
        >
          <FaUsers className='text-5xl text-blue-400 mb-6' />

          <h2 className='text-2xl text-gray-300'>
            Customers
          </h2>

          <p className='text-5xl font-bold text-blue-400 mt-4'>
            450
          </p>
        </motion.div>

        {/* Events */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className='bg-slate-900/70 border border-white/10 rounded-3xl p-8 shadow-2xl'
        >
          <FaChartLine className='text-5xl text-pink-400 mb-6' />

          <h2 className='text-2xl text-gray-300'>
            Upcoming Events
          </h2>

          <p className='text-5xl font-bold text-pink-400 mt-4'>
            35
          </p>
        </motion.div>
      </div>

      {/* Recent Bookings */}
      <div className='relative z-10'>
        
        <h2 className='text-4xl font-bold mb-10'>
          Recent Bookings
        </h2>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          
          {recentBookings.map(item => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.02 }}
              className='bg-slate-900/70 border border-white/10 rounded-3xl p-8 shadow-2xl'
            >
              
              <div className='flex justify-between items-center mb-6'>
                
                <h3 className='text-3xl font-bold'>
                  {item.customer}
                </h3>

                <span
                  className={`px-4 py-2 rounded-full text-sm font-semibold
                  
                  ${
                    item.status === 'Confirmed'
                      ? 'bg-green-500/20 text-green-400'
                      : item.status === 'Pending'
                      ? 'bg-yellow-500/20 text-yellow-400'
                      : 'bg-blue-500/20 text-blue-400'
                  }
                  `}
                >
                  {item.status}
                </span>
              </div>

              <p className='text-gray-300 text-lg mb-3'>
                Hall: {item.hall}
              </p>

              <p className='text-violet-400 text-3xl font-bold mb-6'>
                {item.amount}
              </p>

              {/* Buttons */}
              <div className='flex gap-4'>
                
                <button className='px-6 py-3 rounded-2xl bg-gradient-to-r from-violet-600 to-blue-500 hover:scale-105 transition-all duration-300'>
                  View Details
                </button>

                <button className='px-6 py-3 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300'>
                  Manage
                </button>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard