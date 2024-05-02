import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { Jwt, JwtPayload, Secret} from "jsonwebtoken";
import { signupSchema, signinSchema } from "../zod/user";

// const jwt = require('jsonwebtoken')

const app = express();
const prisma = new PrismaClient();


app.post('/signup', async(req: Request, res: Response) => {
    const header = req.body;
    const {success} = signupSchema.safeParse(header)

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

    // const token = 
})