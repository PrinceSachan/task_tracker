import { Request, Response, RequestHandler } from "express";
import { PrismaClient } from "@prisma/client";
import { taskSchema } from "../zod/task";

const prisma = new PrismaClient();

export const createTask = async(req: Request, res: Response) => {
    try {
        const body = req.body;

        const { success } = taskSchema.safeParse(body);
        if(!success){
            return res.status(411).json({
                message: `Invalid credentials`
            })
        }

        const isUserExit = await prisma.user.findUnique({ where: {id: req.user}})
        if(!isUserExit){
            return res.status(411).json({
                message: `User not found`
            })
        }

        // const taskCreation = await prisma.todos.create({
        //     data: {
        //         title: body.email,
        //         description: body.description
        //     }
        // })
    }
    catch (err) {
        return res.status(411).json({
            message: `Error while creating task ${err}`
        })
    }
}