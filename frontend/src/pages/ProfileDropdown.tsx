import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import { Dispatch, FunctionComponent, SetStateAction, useEffect } from "react"

interface Iprops {
    setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}

const ProfileDropdown: FunctionComponent<Iprops> = (props: Iprops) => {
    const navigate = useNavigate()

    // useEffect(() => {

    // })
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
                        <DropdownMenuItem>Settings</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => {
                            window.localStorage.removeItem("token")
                            navigate('/signin')
                            props.setIsLoggedIn(false)
                        }}>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )
}

export default ProfileDropdown;