import React from 'react'
import ProfileDropdown from './ProfileDropdown'

const Navbar = () => {
  return (
    <div>
        <div className='h-14 bg-white shadow-lg'>
            <nav className='flex justify-between items-center'>
              <div className='text-xl font-bold mt-2.5 ml-8'>
                Task_tracker
              </div>
              <div className='mt-2 mr-8'>
                <ProfileDropdown />
              </div>
            </nav>
        </div>
    </div>
  )
}

export default Navbar