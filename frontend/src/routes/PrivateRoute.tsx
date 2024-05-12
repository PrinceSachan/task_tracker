import { useAuthProvider } from "@/context/AuthContext"
import { Navigate, Outlet } from "react-router-dom"


const PrivateRoute = () => {
    const { isAuthenticated } = useAuthProvider()
    return (
        <div>
            {isAuthenticated ? <Outlet /> : <Navigate to='/signin' />}
        </div>
    )
}

export default PrivateRoute;