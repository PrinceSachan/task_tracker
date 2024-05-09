// import React, { useEffect, useState } from 'react'
import ProfileDropdown from './ProfileDropdown'
import { useAuth } from '@/hooks/useAuth'

const Navbar = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(true)
  // console.log(isLoggedIn)
  const {isLoggedIn} = useAuth()
  console.log('loged out', isLoggedIn)

  return (
    <div>
        <div className='h-14 bg-white shadow-lg'>
            <nav className='flex justify-between items-center'>
              <div className='text-xl font-bold mt-2.5 ml-8'>
                Task_tracker
              </div>
              <div className='mt-2 mr-8'>
                {!(window.localStorage.hasOwnProperty("token")) ? null : <ProfileDropdown />}
                {/* {isLoggedIn ? <ProfileDropdown setIsLoggedIn={setIsLoggedIn} /> : null} */}
                {/* {isLoggedIn? <ProfileDropdown /> : ''} */}
                {/* <ProfileDropdown /> */}
              </div>
            </nav>
        </div>
    </div>
  )
}

export default Navbar