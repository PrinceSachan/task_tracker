import React from 'react';
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

const Signup = () => {
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
                      <Input id="name" placeholder="Enter your name" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Email</Label>
                      <Input id="name" placeholder="Enter your email"/>
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Password</Label>
                      <Input id="name" placeholder="Enter your password" />
                    </div>
                  </div>
                </form>
              </CardContent>
            </div>
            <div>
              <CardFooter className="flex justify-center">
                <Button className='w-full'>Sign up</Button>
              </CardFooter>
              <CardFooter className="flex justify-center">
                <CardDescription>Already have an account? Signin</CardDescription>
              </CardFooter>
            </div>
        </Card>
      </div>
    </div>
  )
}

export default Signup