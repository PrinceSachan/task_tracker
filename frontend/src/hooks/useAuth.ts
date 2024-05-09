import { useState, Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

type AuthReturn = {
    name: string | undefined;
    email: string | undefined;
    password: string | undefined;
    isLoggedIn: boolean | undefined;
    setName: Dispatch<SetStateAction<string | undefined>>;
    setEmail: Dispatch<SetStateAction<string | undefined>>;
    setPassword: Dispatch<SetStateAction<string | undefined>>;
    // setIsLoggedIn: Dispatch<SetStateAction<boolean | undefined>>;
    createUser: () => void
    login: () => void
    loggingout: () => void
}

export function useAuth() : AuthReturn {
    const [name, setName] = useState<string>()
    const [email, setEmail] = useState<string>()
    const [password, setPassword] = useState<string>()
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
    const navigate = useNavigate()

    const createUser = async(): Promise<void> => {
        try {
            const res = await axios.post(`http://localhost:8080/api/v1/user/signup`, {
              name,
              email,
              password
            })
            console.log(res)
            setIsLoggedIn(true)
            window.localStorage.setItem("token", res.data.token)
            navigate('/dashboard')
        }
        catch (err) {
            console.log(err)
        }
    }

    const login = async(): Promise<void> => {
        try{
          const res = await axios.post(`http://localhost:8080/api/v1/user/signin`, {
            email,
            password
          })
          console.log(res)
          setIsLoggedIn(true)
          window.localStorage.setItem("token", res.data.token);
          navigate('/dashboard')
          // return res.data.token
        }
        catch(err) {
          console.log(err)
        }
    }

    const loggingout = ():void => {
        console.log('logged out')
        setIsLoggedIn(false)
        window.localStorage.removeItem("token")
        // if()
        navigate('/signin')
    }

    return {
        name,
        email,
        password,
        isLoggedIn,
        setEmail,
        setName,
        setPassword,
        createUser,
        login,
        loggingout
    }
}