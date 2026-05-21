import MainLayout from '../../layouts/MainLayout'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  FaCalendarCheck,
  FaUsers,
  FaChartLine,
} from 'react-icons/fa'

function HomePage() {
  return (
    <MainLayout>
      <div className='relative overflow-hidden min-h-screen bg-[#020617] text-white'>
        
        {/* Background Blur Effects */}
        <div className='absolute top-0 left-0 w-96 h-96 bg-violet-600 opacity-20 blur-[120px]' />
        <div className='absolute bottom-0 right-0 w-96 h-96 bg-blue-600 opacity-20 blur-[120px]' />

        {/* Hero Section */}
        <section className='relative z-10 flex flex-col items-center justify-center text-center px-6 py-28'>
          
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className='text-6xl md:text-8xl font-extrabold leading-tight bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent'
          >
            Conference Hall
            <br />
            Booking Platform
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className='mt-8 text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed'
          >
            Reserve premium conference halls for meetings,
            seminars, weddings, and corporate events with
            real-time availability and smart scheduling.
          </motion.p>

            <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1 }}
    className='flex gap-6 mt-12 flex-wrap justify-center'
  >
    
    <Link to='/halls'>
      <button className='px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-blue-500 hover:scale-105 hover:shadow-violet-500/40 hover:shadow-2xl transition-all duration-300 text-lg font-semibold'>
        Explore Halls
      </button>
    </Link>
<Link to='/booking/1'>
  <button className='px-8 py-4 rounded-2xl border border-violet-400 hover:bg-violet-500/10 hover:scale-105 transition-all duration-300 text-lg font-semibold'>
    Book Event
  </button>
</Link>
  </motion.div>
        </section>

        {/* Statistics Section */}
        <section className='relative z-10 px-6 pb-24'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className='bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl'
            >
              <FaCalendarCheck className='text-5xl text-violet-400 mb-6' />
              <h2 className='text-4xl font-bold'>500+</h2>
              <p className='text-gray-300 mt-3 text-lg'>
                Successful Events
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className='bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl'
            >
              <FaUsers className='text-5xl text-blue-400 mb-6' />
              <h2 className='text-4xl font-bold'>50K+</h2>
              <p className='text-gray-300 mt-3 text-lg'>
                Happy Customers
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className='bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl'
            >
              <FaChartLine className='text-5xl text-pink-400 mb-6' />
              <h2 className='text-4xl font-bold'>99%</h2>
              <p className='text-gray-300 mt-3 text-lg'>
                Booking Success Rate
              </p>
            </motion.div>
          </div>
        </section>

        {/* Feature Section */}
        <section className='relative z-10 px-6 pb-32'>
          <div className='max-w-7xl mx-auto text-center'>
            
            <h2 className='text-5xl font-bold mb-16'>
              Why Choose Us?
            </h2>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
              
              <div className='bg-slate-900/60 border border-white/10 rounded-3xl p-10 hover:translate-y-[-10px] transition-all duration-300'>
                <h3 className='text-2xl font-bold mb-5 text-violet-400'>
                  Smart Scheduling
                </h3>

                <p className='text-gray-300 leading-relaxed'>
                  Prevent overlapping reservations with our
                  intelligent scheduling and real-time hall
                  availability system.
                </p>
              </div>

              <div className='bg-slate-900/60 border border-white/10 rounded-3xl p-10 hover:translate-y-[-10px] transition-all duration-300'>
                <h3 className='text-2xl font-bold mb-5 text-blue-400'>
                  Premium Facilities
                </h3>

                <p className='text-gray-300 leading-relaxed'>
                  Access luxury halls equipped with catering,
                  projectors, audio systems, and modern event
                  infrastructure.
                </p>
              </div>

              <div className='bg-slate-900/60 border border-white/10 rounded-3xl p-10 hover:translate-y-[-10px] transition-all duration-300'>
                <h3 className='text-2xl font-bold mb-5 text-pink-400'>
                  Live Analytics
                </h3>

                <p className='text-gray-300 leading-relaxed'>
                  Track hall occupancy, upcoming events,
                  reservations, and revenue analytics through
                  interactive dashboards.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  )
}

export default HomePage