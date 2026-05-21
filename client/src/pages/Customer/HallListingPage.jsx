import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import {
  FaUsers,
  FaWifi,
  FaVideo,
  FaUtensils,
} from 'react-icons/fa'

const halls = [
  {
    id: 1,
    name: 'Royal Conference Hall',
    capacity: 500,
    price: 20000,
    image:
      'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1600&auto=format&fit=crop',
  },

  {
    id: 2,
    name: 'Grand Luxury Hall',
    capacity: 300,
    price: 15000,
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1600&auto=format&fit=crop',
  },

  {
    id: 3,
    name: 'Elite Business Hall',
    capacity: 200,
    price: 12000,
    image:
      'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1600&auto=format&fit=crop',
  },
]

function HallListingPage() {
  return (
    <div className='min-h-screen bg-[#020617] text-white px-6 py-16'>
      
      {/* Background Glow */}
      <div className='absolute top-0 left-0 w-96 h-96 bg-violet-600 opacity-20 blur-[120px]' />
      <div className='absolute bottom-0 right-0 w-96 h-96 bg-blue-600 opacity-20 blur-[120px]' />

      {/* Heading */}
      <div className='relative text-center mb-20 z-10'>
        <h1 className='text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent'>
          Available Halls
        </h1>

        <p className='text-gray-400 mt-6 text-xl max-w-3xl mx-auto'>
          Explore luxury conference halls for meetings,
          seminars, corporate events, and celebrations.
        </p>
      </div>

      {/* Hall Cards */}
      <div className='relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto z-10'>
        
        {halls.map(hall => (
          <motion.div
            key={hall.id}
            whileHover={{
              scale: 1.03,
              y: -10,
            }}
            transition={{
              duration: 0.3,
            }}
            className='bg-slate-900/70 border border-white/10 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl'
          >
            
            {/* Image */}
            <div className='overflow-hidden'>
              <img
                src={hall.image}
                alt={hall.name}
                className='h-64 w-full object-cover hover:scale-110 transition-all duration-700'
              />
            </div>

            {/* Content */}
            <div className='p-6'>
              
              <h2 className='text-3xl font-bold mb-5'>
                {hall.name}
              </h2>

              {/* Capacity */}
              <div className='flex items-center gap-3 text-gray-300 mb-4'>
                <FaUsers className='text-violet-400 text-xl' />

                <span className='text-lg'>
                  Capacity: {hall.capacity} Guests
                </span>
              </div>

              {/* Price */}
              <div className='text-4xl font-bold text-violet-400 mb-8'>
                ₹{hall.price}
              </div>

              {/* Facilities */}
              <div className='flex flex-wrap gap-3 mb-8'>
                
                <div className='bg-slate-800 px-4 py-2 rounded-full flex items-center gap-2 text-sm'>
                  <FaWifi />
                  WiFi
                </div>

                <div className='bg-slate-800 px-4 py-2 rounded-full flex items-center gap-2 text-sm'>
                  <FaVideo />
                  Projector
                </div>

                <div className='bg-slate-800 px-4 py-2 rounded-full flex items-center gap-2 text-sm'>
                  <FaUtensils />
                  Catering
                </div>
              </div>

              {/* Button */}
              <Link to={`/booking/${hall.id}`}>
                <button className='w-full py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-blue-500 hover:scale-105 hover:shadow-violet-500/40 hover:shadow-2xl transition-all duration-300 text-lg font-semibold'>
                  Book Now
                </button>
              </Link>

            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default HallListingPage