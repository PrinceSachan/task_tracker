import express, { Router } from "express";
import { createTask, deleteTask, getTask, getTasksAndUser, updateAllTask, updateTask } from "../controllers/tasks";
import authMiddleware from "../middleware/authMiddleware";

const taskRouter: Router = express.Router();

taskRouter.post('/task/createTask', authMiddleware, createTask);
taskRouter.get('/task/getTask', authMiddleware, getTask);
taskRouter.get('/task/getDetails', authMiddleware, getTasksAndUser);
taskRouter.put('/task/updateTask', authMiddleware, updateTask);
taskRouter.put('/task/updateAlltask',authMiddleware, updateAllTask);
taskRouter.delete('/task/deleteTask', authMiddleware, deleteTask);

export default taskRouter;