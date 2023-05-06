import express from 'express';
import cors from 'cors';
import { configuredb } from "./src/config/Dbconfig.js";
import TaskRouter from './src/Router/TaskRouter.js';
const app=express();
app.use(cors());
app.use(express.json());
app.use(TaskRouter)

app.listen(4500,()=>{
     console.log("Server is listening..");
     configuredb();
})
