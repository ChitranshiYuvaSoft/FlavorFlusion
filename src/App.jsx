import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './Pages/Auth/LoginPage'
import RegisterPage from './Pages/Auth/RegisterPage'
import UserDashboard from './Pages/Dashboard/UserDashboard'
import ResetPasswordPage from './Pages/Auth/ResetPasswordPage'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/reset-password' element={<ResetPasswordPage/>}/>
      <Route path='/userdashboard' element={<UserDashboard/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
