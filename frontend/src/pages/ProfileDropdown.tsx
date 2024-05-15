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
// import { useUpdateProfile } from "@/hooks/useUpdateProfile";
// import { useEffect } from "react";
import { User } from "lucide-react";

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
                            className="overflow-hidden rounded-full text-xl font-semibold"
                        >
                            <User />
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