import mongoose from "mongoose";
 export async function configuredb(){
    try {

        await mongoose.connect('mongodb://127.0.0.1:27017/Task_Store');
        console.log("DB Connected.");
        
    } catch (error) {
        console.log(error);
    }
 }