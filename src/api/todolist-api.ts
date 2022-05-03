import axios from "axios";

const instanse = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.1/",
    withCredentials: true, headers: {
        'API-KEY': '13291219-4788-4555-a4f4-aaeffe0abc09'
    }
})

export const TodolistAPI = {
    getTodos: ()=> {
        return instanse.get("todo-lists")

    },
    createTodo:(title:string)=>{
        return instanse.post("todo-lists", {title})

    },
    deleteTodo:(todolistId:string)=>{
        return instanse.delete(`todo-lists/${todolistId}`, )
    },
    updateTitle:(todolistId:string, newTitle:string )=>{
        return instanse.put(`todo-lists/${todolistId}`, {title:newTitle})
    }

}