import axios from 'axios'

const API_URL =
  'https://hotel-event-booking-system.onrender.com/api/reservations'


export const createReservation = async reservationData => {
  const token = localStorage.getItem('token')

  const response = await axios.post(
    API_URL,
    reservationData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )

  return response.data
}
export const getReservations = async () => {
  const token = localStorage.getItem('token')

  const response = await axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return response.data
}

export const updateReservationStatus = async (
  id,
  status
) => {
  const token = localStorage.getItem('token')

  const response = await axios.put(
    `${API_URL}/${id}/status`,
    { status },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )

  return response.data
}