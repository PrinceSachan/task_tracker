import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChangeEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios'

const Signup = () => {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [name, setName] = useState<string>("")
  const navigate = useNavigate()

  function handleChangeEmail(e: ChangeEvent<HTMLInputElement>){
    setEmail(e.target.value)
  }
  function handleChangePassword(e: ChangeEvent<HTMLInputElement>){
    setPassword(e.target.value)
  }
  function handleChangeName(e: ChangeEvent<HTMLInputElement>){
    setName(e.target.value)
  }

  const signup = async() => {
    try {
      const res = await axios.post(`http://localhost:8080/api/v1/user/signup`, {
        name,
        email,
        password
      })
      window.localStorage.setItem("token", res.data.token)
      navigate('/dashboard')
    }
    catch (err) {
      console.log(err)
    }
  }

  function clickHanlder2() {
    navigate('/signin')
  }
  return (
    <div className='flex h-screen justify-center items-center'>
      <div>
          <Card className="w-[350px]">
            <div className='flex justify-center'>
              <CardHeader>
                <CardTitle>Sign Up</CardTitle>
              </CardHeader>
            </div>
            <div>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Name</Label>
                      <Input 
                        id="name" 
                        placeholder="Enter your name" 
                        value={name} 
                        onChange={handleChangeName} 
                      />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Email</Label>
                      <Input 
                        id="email" 
                        placeholder="Enter your email" 
                        value={email} 
                        onChange={handleChangeEmail}
                      />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Password</Label>
                      <Input 
                        id="password" 
                        placeholder="Enter your password" 
                        value={password} 
                        onChange={handleChangePassword} 
                      />
                    </div>
                  </div>
                </form>
              </CardContent>
            </div>
            <div>
              <CardFooter className="flex justify-center">
                <Button className='w-full' onClick={signup}>Sign up</Button>
              </CardFooter>
              <CardFooter className="flex justify-center">
                <CardDescription>
                  Already have an account? 
                  <Button 
                    style={{padding: 0}} 
                    variant='link'
                    onClick={clickHanlder2}
                  >Sign in</Button>
                </CardDescription>
              </CardFooter>
            </div>
        </Card>
      </div>
    </div>
  )
}

export default Signup