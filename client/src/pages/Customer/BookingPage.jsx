import { useParams } from 'react-router-dom'

function BookingPage() {
  const { id } = useParams()

  return (
    <div className='min-h-screen bg-[#020617] text-white flex flex-col justify-center items-center'>
      
      <h1 className='text-6xl font-bold mb-6'>
        Booking Page
      </h1>

      <p className='text-3xl text-violet-400'>
        Hall ID: {id}
      </p>

    </div>
  )
}

export default BookingPage