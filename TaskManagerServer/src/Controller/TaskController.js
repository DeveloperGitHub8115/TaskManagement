import { StatusCodes } from "http-status-codes"
import { Task } from "../models/TaskModels.js"
export async function saveTask(request, response) {
        try {
                request.body['createdOn']=new Date();
                request.body['deadline']=new Date(request.body.deadline);
                const task=new Task(request.body);
                const savedTask=await task.save();
                response.status(StatusCodes.CREATED).json(savedTask);


        } catch (error) {
                 console.log(error)
                response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Error in Task" })

        }
}

export async function fetchAlltask(request, response) {
        try {
                const data = await Task.find();
                response.status(StatusCodes.OK).json(data);

        } catch (error) {
                response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Error in fetching" })


        }

}

export async function completedTask(request,response){
         try {
              const tasks = await Task.find({isCompleted:true});
                response.status(StatusCodes.OK).json(tasks);
                
         } catch(error){
                response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:"error in complting task"});
                
         }

}

export async function pendingTask(request,response){
           try {
               const tasks= await Task.find({isCompleted:false});
               response.status(StatusCodes.OK).json(tasks);
                
           } catch (error) {
                response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:"error in fetching task"});
                
                
           }
}
export async function deleteTask(request,response){
        try {
            await Task.findByIdAndDelete(request.params.id);
            response.status(StatusCodes.NO_CONTENT).json();
        } catch (error) {
            response.status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({message:'Error in deleting task'});
        }
    }

   export async function marktask(request,response){
            try {
                const completedate= new Date();
                await Task.findByIdAndUpdate(request.params.id,{completed:completedate,isCompleted:true});
                response.status(StatusCodes.NO_CONTENT).json();

            } catch(error){
                   console.log(error);
                response.status(StatusCodes.INTERNAL_SERVER_ERROR)
                .json({message:'Error in editing task'});
                    
                       
            }
   } 