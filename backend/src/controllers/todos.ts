import { Request, Response, RequestHandler } from "express";
import { PrismaClient, User } from "@prisma/client";
import { taskSchema } from "../zod/task";

const prisma = new PrismaClient();

export const createTask: RequestHandler = async(req: Request, res: Response) => {
    try {
        const body = req.body;
        const { success } = taskSchema.safeParse(body);
        if(!success){
            return res.status(411).json({
                message: `Invalid credentials`
            })
        }

        // const userId = req.user.id as unknown as number
        const isUserExit = await prisma.user.findUnique({ where: {id: req.user.id}})
        if(!isUserExit){
            return res.status(411).json({
                message: `User not found`
            })
        }

        const taskCreation = await prisma.todos.create({
            data: {
                userId: req.user.id,
                title: body.email,
                description: body.description
            }
        })

        res.json({
            message: `Todos has been created successfully`,
            taskCreation
        })
    }
    catch (err) {
        return res.status(411).json({
            message: `Error while creating task ${err}`
        })
    }
}