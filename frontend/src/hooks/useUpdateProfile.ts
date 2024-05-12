import { useAuthProvider } from "@/context/AuthContext"
import axios from "axios"
import { useState, useEffect } from "react"

export type UpdateProfileReturnsProps = {
    loading: boolean;
    user: {name: string; email: string};
    updateUserProfile: (email: string, password: string, name: string) => Promise<void>;
    getUser: () => Promise<void>
}

export const useUpdateProfile = () : UpdateProfileReturnsProps => {
    const { userId } = useAuthProvider()
    const [user, setUser] = useState<{name: string; email: string}>({
        name: '',
        email: ''
    })

    const [loading, setLoading] = useState<boolean>(true);

        // useEffect(() => {
        //     let isCancelled = false;
        //     if(isCancelled == false){
        //         setLoading(true)
        //         axios.get(`http://localhost:8080/api/v1/user/:${userId}`, {
        //             headers: {
        //                 Authorization: 'Bearer ' + localStorage.getItem('token')
        //             }
        //         })
        //         .then(res => {
        //             // console.log(res.data.isTask)
        //             if(res) {
        //                 setUser({name: res.data.isUserExist.name, email: res.data.isUserExist.email})
        //             }
        //             console.log(user)
        //             // console.log('Data', res.data.isTask)
        //         })
        //         .catch(err => console.log(err))
        //         .finally(() => setLoading(false))
        //     }
    
        //     return () => { isCancelled = true }
        // }, [])



    
    const getUser = async() => {
        const res = await axios.get(`http://localhost:8080/api/v1/user/:${userId}`, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token')
            }
        })
        setUser({name: res.data.isUserExist.name, email: res.data.isUserExist.email})
        console.log('User have been found')
    }

    const updateUserProfile = async(email: string, password: string, name: string): Promise<void> => {
        try{
            const res = await axios.post(`http://localhost:8080/api/v1/user/:${userId}`, {
                email,
                password,
                name
            }, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('token'),
                    'Content-Length': 2000
                }
            })
            console.log('Updated credentials has been updated')
        }
        catch (err) {
            console.log(err)
        }
    }

    return {
        user,
        getUser,
        updateUserProfile,
        loading
    }
}
