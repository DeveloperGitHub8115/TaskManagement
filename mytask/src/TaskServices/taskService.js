import axios from "axios";
import { Task_URL_PREFIX } from "../Constants/taskconstant";
export function savedata(emp){
       return axios.post(Task_URL_PREFIX,emp);
}
export function getAlldata(url){
    return axios.get(`${Task_URL_PREFIX}/${url}`)
}
export function deleteTask(id){
          return axios.delete(`${Task_URL_PREFIX}/${id}`)
}
export function MarkTask(id){
      return axios.put(`${Task_URL_PREFIX}/${id}/mark-updated`);
}