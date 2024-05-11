import express, { Router } from "express";
import  { signup, signin, updateProfile } from "../controllers/user";
import authMiddleware from "../middleware/authMiddleware";

const userRouter: Router = express.Router();

userRouter.post('/user/signup', signup);
userRouter.post('/user/signin', signin);
userRouter.put('/user/:userId', authMiddleware, updateProfile);

export default userRouter;