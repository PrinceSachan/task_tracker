// Imports
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { CardContent, Card, CardHeader } from "@/components/ui/card"
import { ChangeEvent, useEffect, useState } from "react"
import axios from "axios"
import { useAuthProvider } from "@/context/AuthContext"
import Profile from "./Profile"
import { useUpdateProfile } from "@/hooks/useUpdateProfile"

const  UpdateProfile = () =>  {
    const [email, setEmail] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const { user, updateUserProfile } = useUpdateProfile()

    const handleUpdate = async() => {
        await updateUserProfile(email, name, password)
    }
    
    // useEffect(() => {
    //     const getUser = async() => {
    //         const res = await axios.get(`http://localhost:8080/api/v1/user/:${userId}`, {
    //             headers: {
    //                 Authorization: "Bearer " + localStorage.getItem('token')
    //             }
    //         })
    //         setUser({name: res.data.isUserExist.name, email: res.data.isUserExist.email})
    //         }
    //         getUser()

    // }, [userId])


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
                                // defaultValue={user.name}
                                value={name} 
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input 
                                id="email" 
                                placeholder="E.g. jane@example.com"
                                // defaultValue={user.email}
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
                            {/* <div className="space-y-2">
                                <Label htmlFor="current-password">Current Password</Label>
                                <Input id="current-password" type="password" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="new-password">New Password</Label>
                                <Input id="new-password" type="password" />
                            </div> */}
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
                        <Profile user={user} />
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default UpdateProfile;