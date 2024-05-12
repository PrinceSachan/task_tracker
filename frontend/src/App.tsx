// Imports
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// App imports
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Navbar from './pages/Navbar'
import AddtaskCard from './pages/AddtaskCard'
import { Dashboard } from './pages/Dashboard'
import AuthContextProvider from './context/AuthContext'
import UpdateProfile from './pages/UpdateProfile'
import PrivateRoute from './routes/PrivateRoute'

function App() {

  return (
    <>
      <div className='bg-gray-200 h-screen'>
        <AuthContextProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              {/* Public Route */}
              <Route path='/signup' element={<Signup />} />
              <Route path='/signin' element={<Signin />} />
              <Route path='/card' element={<AddtaskCard />} />

              {/* Private Routes */}
              <Route path='/' element={<PrivateRoute />}>
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/setting/user' element={<UpdateProfile />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </AuthContextProvider>
      </div>
    </>
  )
}

export default App
