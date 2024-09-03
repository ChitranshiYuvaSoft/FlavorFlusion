import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/Home/HomePage'
import LoginPage from '../Pages/Auth/LoginPage'
import RegisterPage from '../Pages/Auth/RegisterPage'
import ResetPasswordPage from '../Pages/Auth/ResetPasswordPage'
import EmailVerification from '../Pages/Auth/EmailVerification'
import Dashboard from '../Pages/Dashboard/Dashboard'
const AppRoute = () => {
  return (
    <>
     <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/email-verification" element={<EmailVerification/>} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default AppRoute
