// Imports

import { useState, Dispatch, SetStateAction } from "react";
import axios from "axios";

export type AuthReturn = {
    loggingout: () => void
    signUp: (email: string, password: string, name: string) => Promise<void>;
    signIn: (email: string, password: string) => Promise<void>;
    userId: number | undefined;
    isAuthenticated: boolean;
    setIsAuthenticated: Dispatch<SetStateAction<boolean>>
}

export function useAuth() : AuthReturn {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    () => localStorage.getItem('token') !== null
  )
  const [userId, setUserId] = useState<number>()
    
    const signUp = async(email: string, password: string, name: string): Promise<void> => {
        try {
            const res = await axios.post(`http://localhost:8080/api/v1/user/signup`, {
              email,
              password,
              name
            })
            console.log(res)
            setUserId(res.data.createUser.id)
            window.localStorage.setItem("token", res.data.token);
        }
        catch (err) {
            console.log(err)
        }
    }

    const signIn = async(email: string, password: string): Promise<void> => {
        try{
          const res = await axios.post(`http://localhost:8080/api/v1/user/signin`, {
            email,
            password
          })
          console.log(res)
          setUserId(res.data.isUserExist.id)
          window.localStorage.setItem("token", res.data.token);
        }
        catch(err) {
          console.log(err)
        }
    }

    const loggingout = ():void => {
      window.localStorage.removeItem("token");
    }

    return {
      userId,
      isAuthenticated,
      setIsAuthenticated,
      signUp,
      signIn,
      loggingout
    }
}