import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Navbar from './pages/Navbar'
import AddtaskCard from './pages/AddtaskCard'
import { Dashboard } from './pages/Dashboard'
// import { UserContext } from './context/AuthContext'
import { useAuth } from './hooks/useAuth'
import AuthContextProvider, { useAuthProvider } from './context/AuthContext'

function App() {

  return (
    <>
      <div className='bg-gray-200'>
        <AuthContextProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/signup' element={<Signup />} />
              <Route path='/signin' element={<Signin />} />
              <Route path='/card' element={<AddtaskCard />} />
              <Route path='/dashboard' element={<Dashboard />} />
            </Routes>
          </BrowserRouter>
        </AuthContextProvider>
      </div>
    </>
  )
}

export default App
