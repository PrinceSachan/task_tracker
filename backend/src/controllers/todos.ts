import { Request, Response, RequestHandler } from "express";
import { PrismaClient, User } from "@prisma/client";
import { taskSchema } from "../zod/task";

const prisma = new PrismaClient();

interface MyUserRequest extends Request {
    user?: User
}

export const createTask: RequestHandler = async(req: MyUserRequest, res: Response) => {
    try {
        const body = req.body;
        const { success } = taskSchema.safeParse(body);
        if(!success){
            return res.status(411).json({
                message: `Invalid credentials`
            })
        }

        const isUserExit = await prisma.user.findUnique({
            where: {
                id: req.user as any
            }
        })
        if(!isUserExit){
            return res.status(411).json({
                message: `User not found`
            })
        }

        const taskCreation = await prisma.todos.create({
            data: {
                userId: isUserExit.id,
                title: body.title,
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

export const getTask: RequestHandler = async(req: MyUserRequest, res: Response) => {
    try {
        const isUserExit = await prisma.user.findUnique({
            where: {
                id: req.user as any
            }
        })
        if(!isUserExit){
            return res.status(411).json({
                message: "User does not exist"
            })
        }

        const isTask = await prisma.todos.findMany({
            where: {
                userId: isUserExit.id
            },
            select: {
                id: true,
                title: true,
                description: true,
                done: true
            }
        })

        res.json({
            message: "All todos from selected user",
            isTask
        })
    }
    catch (err) {
        return res.status(411).json({
            message: `Error while fetching tasks ${err}`
        })
    }
}

export const getTasksAndUser: RequestHandler = async(req: MyUserRequest, res: Response) => {
    try{
        const isUserExit = await prisma.user.findUnique({
            where: {
                id: req.user as any
            }
        })
        if(!isUserExit) {
            return res.status(411).json({
                message: 'User not found'
            })
        }

        const isUser = await prisma.user.findUnique({
            where: {
                id: isUserExit?.id
            },
            include: {
                todos: {
                    select: {
                        id: true,
                        title: true,
                        description: true,
                        done: true
                    }
                }
            }
        })

        res.json({
            isUser
        })
    }
    catch (err) {
        return res.status(411).json({
            message: `Error while getting details ${err}`
        })
    }
}