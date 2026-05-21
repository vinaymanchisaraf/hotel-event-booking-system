import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/Home/HomePage'
import LoginPage from '../pages/Auth/LoginPage'
import RegisterPage from '../pages/Auth/RegisterPage'
import HallListingPage from '../pages/Customer/HallListingPage'
import BookingPage from '../pages/Customer/BookingPage'
import AdminDashboard from '../pages/Admin/AdminDashboard'
import CoordinatorDashboard from '../pages/Coordinator/CoordinatorDashboard'

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/halls' element={<HallListingPage />} />
      <Route path='/booking/:id' element={<BookingPage />} />
      <Route path='/admin/dashboard' element={<AdminDashboard />} />
      <Route path='/coordinator/dashboard' element={<CoordinatorDashboard />} />
    </Routes>
  )
}

export default AppRoutes