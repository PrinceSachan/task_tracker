// Imports
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom";

// App imports
import { useAuthProvider } from "@/context/AuthContext";

const ProfileDropdown = () => {
    const { loggingout, setIsAuthenticated } = useAuthProvider()
    const navigate = useNavigate()
    
    const handleLogout = async() => {
        await loggingout();
        if(!localStorage.getItem('token')){
            setIsAuthenticated(false);
            navigate('/signin')
        }
    }

    const handleSetting = () => {
        navigate('/setting/user');
    }

    return (
        <div>
            <div>
                    <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="outline"
                            size="icon"
                            className="overflow-hidden rounded-full"
                        >
                            <img
                            src="/placeholder-user.jpg"
                            width={36}
                            height={36}
                            alt="Avatar"
                            className="overflow-hidden rounded-full"
                            />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={handleSetting}>Settings</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )
}

export default ProfileDropdown;