import express from 'express'
import { completedTask, deleteTask, fetchAlltask, marktask, pendingTask, saveTask } from '../Controller/TaskController.js';
 
const TaskRouter = express.Router();
TaskRouter.post('/tasks',saveTask)
TaskRouter.get('/tasks/All',fetchAlltask);
TaskRouter.get('/tasks/completed',completedTask)
TaskRouter.get('/tasks/pending',pendingTask)
TaskRouter.delete('/tasks/:id',deleteTask)
TaskRouter.put('/tasks/:id/mark-updated',marktask)
export default TaskRouter;