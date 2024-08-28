import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './Pages/Auth/LoginPage'
import RegisterPage from './Pages/Auth/RegisterPage'
import UserDashboard from './Pages/Dashboard/UserDashboard'
import ResetPasswordPage from './Pages/Auth/ResetPasswordPage'
import UserDetails from './Pages/Dashboard/userDetails'
import HomePage from './Pages/Home/HomePage'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/reset-password' element={<ResetPasswordPage/>}/>
      <Route path='/userdashboard' element={<UserDashboard/>}/>
      <Route path='/userdetails/:id' element={<UserDetails/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
