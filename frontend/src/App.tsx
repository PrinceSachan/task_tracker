import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Navbar from './pages/Navbar'
import AddtaskCard from './pages/AddtaskCard'
import { Dashboard } from './pages/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-gray-200'>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/signup' element={<Signup />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/card' element={<AddtaskCard />} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
