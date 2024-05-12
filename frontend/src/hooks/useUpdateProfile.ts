import { useAuthProvider } from "@/context/AuthContext"
import axios from "axios"
import { useEffect, useState } from "react"

export type UpdateProfileReturnsProps = {
    user: {name: string; email: string};
    updateUserProfile: (email: string, password: string, name: string) => Promise<void>
}

export const useUpdateProfile = () : UpdateProfileReturnsProps => {
    const { userId } = useAuthProvider()
    const [user, setUser] = useState<{name: string; email: string}>({
        name: '',
        email: ''
    })

    useEffect(() => {
        const getUser = async() => {
                const res = await axios.get(`http://localhost:8080/api/v1/user/:${userId}`, {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem('token')
                    }
                })
                setUser({name: res.data.isUserExist.name, email: res.data.isUserExist.email})
                console.log(res)
            }
            getUser()
    }, [userId])

    const updateUserProfile = async(email: string, password: string, name: string): Promise<void> => {
        try{
            const res = await axios.post(`http://localhost:8080/api/v1/user/:${userId}`, {
                name,
                email,
                password
            }, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('token'),
                    'Content-Length': 2000
                }
            })
            console.log('Updated User', res)
        }
        catch (err) {
            console.log(err)
        }
    }


    return {
        user,
        updateUserProfile
    }
}
