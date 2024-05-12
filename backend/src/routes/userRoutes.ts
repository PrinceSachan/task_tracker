import express, { Router } from "express";
import  { signup, signin, getUser, updateProfile } from "../controllers/user";
import authMiddleware from "../middleware/authMiddleware";

const userRouter: Router = express.Router();

userRouter.post('/user/signup', signup);
userRouter.post('/user/signin', signin);
userRouter.get('/user/:userId', authMiddleware, getUser);
userRouter.post('/user/:userId', authMiddleware, updateProfile);

export default userRouter;