import express, { Request, Response, Application, RequestHandler } from "express";
import { PrismaClient } from "@prisma/client";
// import jwt
import * as jose from 'jose'
import * as jwt from "jsonwebtoken";
// import { Jwt } from 'jsonwebtoken'
import { signupSchema, signinSchema } from "../zod/user";

const { sign } = jwt
const prisma = new PrismaClient();

export const signup: RequestHandler =  async(req: Request, res: Response) => {
    const header = req.body;
    const {success} = signupSchema.safeParse(header)
    console.log(success)

    if(!success) {
        return res.status(411).json({
            message: 'Invalid credentials'
        })
    }

    const isUserExist = await prisma.user.findUnique({
        where: {
            email: header.email
        }
    })

    if(isUserExist){
        return res.status(411).json({
            message: 'Email is already taken'
        })
    }

    const createUser = await prisma.user.create({
        data: {
            email: header.email,
            password: header.password,
            name: header.name
        }
    })

    const userId = createUser.id

    const payload = `${userId}`

    // const secret = process.env.JWT_SECRET;
    const token = sign(payload, "my-secret")

    console.log(token)
     
}