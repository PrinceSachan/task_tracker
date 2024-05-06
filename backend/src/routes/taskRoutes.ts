import express, { Router } from "express";
import { createTask, getTask, getTasksAndUser } from "../controllers/todos";
import authMiddleware from "../middleware/authMiddleware";

const taskRouter: Router = express.Router();

taskRouter.post('/task/createTask', authMiddleware, createTask);
taskRouter.get('/task/getTask', authMiddleware, getTask);
taskRouter.get('/task/getDetails', authMiddleware, getTasksAndUser);

export default taskRouter;