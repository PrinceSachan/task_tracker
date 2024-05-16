import { Request, Response, RequestHandler } from "express";
import { PrismaClient, User } from "@prisma/client";
import { taskSchema } from "../zod/task";

const prisma = new PrismaClient();

interface MyUserRequest extends Request {
    user?: User
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

        const isTask = await prisma.tasks.findMany({
            where: {
                userId: isUserExit.id
            },
            select: {
                id: true,
                title: true,
                description: true,
                done: true,
                createdAt: true
            }
        })

        res.json({
            message: "All tasks from selected user",
            isTask
        })
    }
    catch (err) {
        return res.status(411).json({
            message: `Error while fetching tasks ${err}`
        })
    }
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

        const taskCreation = await prisma.tasks.create({
            data: {
                userId: isUserExit.id,
                title: body.title,
                description: body.description,
            }
        })

        res.json({
            message: 'task created',
            taskCreation
        });
    }
    catch (err) {
        return res.status(411).json({
            message: `Error while creating task ${err}`
        })
    }
}


export const updateTask: RequestHandler = async(req: MyUserRequest, res: Response) => {
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

        const taskUpdate = await prisma.user.update({
            where: {
                id: isUserExit.id
            },
            data: {
                tasks: {
                    update: {
                        where: {
                            id: req.body.id
                        },
                        data: {
                            done: true
                        }
                    }
                }
            },
            select: {
                tasks: true
            }
        })

        res.json({
            taskUpdate
        })
    }
    catch (err) {
        return res.status(411).json({
            message: `Error while updating task ${err}`
        })
    }
}

export const updateAllTask: RequestHandler = async(req: MyUserRequest, res: Response) => {
    try {
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

        const allTaskUpdate = await prisma.user.update({
            where: {
                id: isUserExit.id
            },
            data: {
                tasks: {
                    updateMany: {
                        where: {
                            done: false
                        },
                        data: {
                            done: true
                        }
                    }
                }
            },
            select: {
                tasks: true
            }
        })

        res.json({
            allTaskUpdate
        })
    }
    catch (err) {
        return res.status(411).json({
            message: `Error while updating task ${err}`
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
                tasks: {
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