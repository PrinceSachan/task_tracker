import { Request, Response, NextFunction } from "express";
import { verify, JwtPayload, decode } from "jsonwebtoken";

// export interface CustomRequest extends Request {
//     token: string | JwtPayload;
// }


const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer ')){
        return res.status(403).json({
            message: 'Middleware error'
        })
    }

    const token = authHeader.split(' ')[1];
    // const payload: string = decode(token) as string
    const signature: string = process.env.JWT_SECRET as string;

    try{
        const verification = verify(token, signature);

        // const decoded = decode(verification) as string | JwtPayload
        // const userId = decoded.userId
        
    }
    catch (err){
        return res.status(403).json({
            message: `Middleware error 2 ${err}`
        })
    }
}

export default authMiddleware;