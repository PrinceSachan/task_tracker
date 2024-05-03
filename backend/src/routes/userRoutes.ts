import express, { Router } from "express";
import { signup } from "../controllers/user";

const userRouter: Router = express.Router();

userRouter.post('/user/signup', signup);

export default userRouter;