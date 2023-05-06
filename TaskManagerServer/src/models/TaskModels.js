import mongoose from "mongoose";
const TaskSchema = new mongoose.Schema({
           name:{type:String,required:true},
           description:{type:String,required:true},
           createdOn:{type:Date,required:true},
           deadline:{type:Date,required:true},
           completed:{type:Date},
           isCompleted:{type:Boolean, required:true, default:false}


})
export const Task = mongoose.model('Task',TaskSchema); 