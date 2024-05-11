// App imports
import { useAuthProvider } from '@/context/AuthContext'
import ProfileDropdown from './ProfileDropdown'

const Navbar = () => {
  const {isLoggedIn} = useAuthProvider()

  return (
    <div>
        <div className='h-14 bg-white shadow-lg'>
            <nav className='flex justify-between items-center'>
              <div className='text-xl font-bold mt-2.5 ml-8'>
                Task_tracker
              </div>
              <div className='mt-2 mr-8'>
                {isLoggedIn ? <ProfileDropdown /> : null}
              </div>
            </nav>
        </div>
    </div>
  )
}

export default Navbar