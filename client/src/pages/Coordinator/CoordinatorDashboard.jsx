import { motion } from 'framer-motion'

const events = [
  {
    id: 1,
    hall: 'Royal Conference Hall',
    event: 'Corporate Meeting',
    date: '21 May 2026',
    status: 'Confirmed',
  },

  {
    id: 2,
    hall: 'Grand Luxury Hall',
    event: 'Wedding Ceremony',
    date: '22 May 2026',
    status: 'Pending',
  },

  {
    id: 3,
    hall: 'Elite Business Hall',
    event: 'Startup Seminar',
    date: '23 May 2026',
    status: 'Ongoing',
  },
]

function CoordinatorDashboard() {
  return (
    <div className='min-h-screen bg-[#020617] text-white p-8'>
      
      {/* Header */}
      <div className='mb-12'>
        <h1 className='text-6xl font-extrabold bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent'>
          Coordinator Dashboard
        </h1>

        <p className='text-gray-400 mt-4 text-xl'>
          Manage today's bookings and event schedules.
        </p>
      </div>

      {/* Statistics */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-14'>
        
        <motion.div
          whileHover={{ scale: 1.03 }}
          className='bg-slate-900/70 border border-white/10 p-8 rounded-3xl shadow-2xl'
        >
          <h2 className='text-2xl text-gray-300'>
            Total Events
          </h2>

          <p className='text-5xl font-bold text-violet-400 mt-4'>
            {events.length}
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className='bg-slate-900/70 border border-white/10 p-8 rounded-3xl shadow-2xl'
        >
          <h2 className='text-2xl text-gray-300'>
            Confirmed Events
          </h2>

          <p className='text-5xl font-bold text-green-400 mt-4'>
            {
              events.filter(
                item => item.status === 'Confirmed'
              ).length
            }
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className='bg-slate-900/70 border border-white/10 p-8 rounded-3xl shadow-2xl'
        >
          <h2 className='text-2xl text-gray-300'>
            Ongoing Events
          </h2>

          <p className='text-5xl font-bold text-blue-400 mt-4'>
            {
              events.filter(
                item => item.status === 'Ongoing'
              ).length
            }
          </p>
        </motion.div>
      </div>

      {/* Event List */}
      <div>
        <h2 className='text-4xl font-bold mb-10'>
          Today's Events
        </h2>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          
          {events.map(event => (
            <motion.div
              key={event.id}
              whileHover={{ scale: 1.02 }}
              className='bg-slate-900/70 border border-white/10 p-8 rounded-3xl shadow-2xl'
            >
              
              <div className='flex justify-between items-center mb-6'>
                
                <h3 className='text-3xl font-bold'>
                  {event.event}
                </h3>

                <span
                  className={`px-4 py-2 rounded-full text-sm font-semibold
                  
                  ${
                    event.status === 'Confirmed'
                      ? 'bg-green-500/20 text-green-400'
                      : event.status === 'Pending'
                      ? 'bg-yellow-500/20 text-yellow-400'
                      : 'bg-blue-500/20 text-blue-400'
                  }
                  `}
                >
                  {event.status}
                </span>
              </div>

              <p className='text-gray-300 text-lg mb-3'>
                Hall: {event.hall}
              </p>

              <p className='text-gray-400'>
                Date: {event.date}
              </p>

              {/* Action Buttons */}
              <div className='flex gap-4 mt-8'>
                
                <button className='px-6 py-3 rounded-2xl bg-gradient-to-r from-violet-600 to-blue-500 hover:scale-105 transition-all duration-300'>
                  Update Status
                </button>

                <button className='px-6 py-3 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300'>
                  View Details
                </button>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CoordinatorDashboard