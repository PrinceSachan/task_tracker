import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import Signin from './pages/Signin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-gray-200'>
        <BrowserRouter>
          <Routes>
            <Route path='/signup' element={<Signup />} />
            <Route path='/signin' element={<Signin />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
