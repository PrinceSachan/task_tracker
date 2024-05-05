import { Request, RequestHandler, Response } from "express";
import { PrismaClient } from "@prisma/client";
import * as jwt from 'jsonwebtoken'
import { signupSchema, signinSchema } from "../zod/user";

const prisma = new PrismaClient();

export const signup: RequestHandler =  async(req: Request, res: Response) => {
    try {
        const body = req.body;
        const {success} = signupSchema.safeParse(body)

        if(!success) {
            return res.status(411).json({
                message: 'Invalid credentials'
            })
        }

        const isUserExist = await prisma.user.findUnique({
            where: {
                email: body.email
            }
        })

        if(isUserExist){
            return res.status(411).json({
                message: 'Email is already taken'
            })
        }

        const createUser = await prisma.user.create({
            data: {
                email: body.email,
                password: body.password,
                name: body.name
            }
        })

        const secret = process.env.JWT_SECRET as string
        const token = jwt.sign({
            userId: createUser.id
        }, secret)

        res.json({
            message: 'User created successfully',
            token,
            createUser
        });
    }
    catch (err) {
        return res.status(411).json({
            message: `Error while Signing up ${err}`
        })
    }  
}

export const signin: RequestHandler = async(req:Request, res: Response) => {
    try {
        const body = req.body;
        const { success } = signinSchema.safeParse(body)

        if(!success) {
            return res.status(411).json({
                message: 'Invalied credentials'
            })
        }

        const isUserExist = await prisma.user.findUnique({
            where: {
                email: body.email
            }
        })

        if(!isUserExist){
            return res.status(411).json({
                message: 'User not found'
            })
        }

        const secret = process.env.JWT_SECRET as string;
        const token = jwt.sign({
            userId: isUserExist.id
        }, secret)

        res.json({
            message: 'User logged in',
            token,
            isUserExist
        })

    }
    catch(err) {
        return res.status(411).json({
            message: `Error while logging in ${err}`
        })
    }
}