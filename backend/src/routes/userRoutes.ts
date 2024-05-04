import express, { Router } from "express";
import { signup, signin } from "../controllers/user";

const userRouter: Router = express.Router();

userRouter.post('/user/signup', signup);
userRouter.post('/user/signin', signin);

export default userRouter;