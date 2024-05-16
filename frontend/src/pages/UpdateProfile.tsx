// Imports
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { CardContent, Card, CardHeader } from "@/components/ui/card"
import { ChangeEvent, useState, MouseEvent, useCallback } from "react"

// App imports
import { useUpdateProfile } from "@/hooks/useUpdateProfile"
import AlertBox from "./Alertbox"

const  UpdateProfile = () =>  {
    const [email, setEmail] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const { user, getUser ,updateUserProfile } = useUpdateProfile()

    const userInfoClick = useCallback(() => {
        getUser()
   }, [user.name])
    
    const handleUpdate = async(e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        await updateUserProfile(email, password, name)
        alert('User credentials have been updated.')
        setName('');
        setEmail('');
        setPassword('')
    }
  
    return (
        <div>
            <div className="px-4 space-y-6 sm:px-6 mt-6">
                <div className="space-y-6">
                    <div>
                        <Card>
                            <CardContent className="space-y-6">
                            <div className="space-y-2 pt-4">
                                <Label htmlFor="name">Name</Label>
                                <Input 
                                    id="name" 
                                    placeholder="E.g. Jane Doe" 
                                    value={name} 
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input 
                                    id="email" 
                                    placeholder="E.g. jane@example.com"
                                    value={email}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                                />
                            </div>
                            </CardContent>
                        </Card>
                    </div>
                    <div>
                        <Card>
                            <CardHeader>
                                <div>Change Password</div>
                                <div>For your security, please do not share your password with others.</div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="confirm-password">New Password</Label>
                                    <Input 
                                        id="confirm-password" 
                                        type="password"
                                        value={password}
                                        onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="flex flex-row space-x-4">
                        <div className="">
                            <Button onClick={handleUpdate}>Save</Button>
                        </div>
                        <div>
                            {/* <Profile /> */}
                            <AlertBox
                                buttonProps="Show profile"
                                titleProps="Profile"
                                lable1="Name"
                                label2="Email"
                                val1={user.name}
                                val2={user.email}
                                handleClick={userInfoClick}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateProfile;