import { Request, Response, RequestHandler } from "express";
import { PrismaClient } from "@prisma/client";
import { JwtPayload, sign } from "jsonwebtoken";
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

        const payload: JwtPayload = { userId: createUser.id }
        const signature: string = process.env.JWT_SECRET as string
        const token = sign(payload, signature)

        res.json({
            message: 'User created successfully',
            token,
            createUser
        });
    }
    catch (e) {
        console.log(e)
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

        const payload: JwtPayload = { userId: isUserExist.id }
        const signature: string = process.env.JWT_SECRET as string;

        const token = sign(payload, signature)

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