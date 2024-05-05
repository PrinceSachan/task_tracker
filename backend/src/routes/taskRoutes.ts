import express, { Router } from "express";
import { createTask } from "../controllers/todos";
import authMiddleware from "../middleware/authMiddleware";

const taskRouter: Router = express.Router();

// taskRouter.post('/task/createTask', authMiddleware, createTask);
// userRouter.post('/user/signin', signin);

export default taskRouter;