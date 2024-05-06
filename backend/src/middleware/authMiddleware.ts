import { Request, Response, NextFunction } from "express";
import { User } from "@prisma/client";
import * as jwt from 'jsonwebtoken'

interface MyUserRequest extends Request {
    user?: User
}

const authMiddleware = async(req: MyUserRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer ')){
        return res.status(403).json({
            message: 'Middleware error'
        })
    }

    const token = authHeader.split(' ')[1];
    
    try{
        const secret = process.env.JWT_SECRET as string;
        const decode = jwt.verify(token, secret) as any;

        req.user = decode.userId
       
        next()
    }
    catch (err){
        return res.status(403).json({
            message: `Middleware error 2 ${err}`
        })
    }
}

export default authMiddleware;