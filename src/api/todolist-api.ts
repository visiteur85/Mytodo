import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.1/",
    withCredentials: true,
    headers: {
        "API-KEY": "13291219-4788-4555-a4f4-aaeffe0abc09"
    },

})



export const TodolistApi = {
    getTodos: () => {
        return instance.get("todo-lists"
        )
    },
    createTodo: (title: string) => {
        return instance.post("todo-lists", {title},
        )
    },
    deleteTodo: () => {
        const todoId = "81ae7ef7-c75c-49e3-8d1c-f1e3b4f70c58"

        return instance.delete(`todo-lists/${todoId}`, )

    },
    updateTitele: () => {
        const todoId = "c9b1dc7e-f2cc-4932-b575-e4e0e7775fa5";
        const title = "sadf"
        return  instance.put(`todo-lists/${todoId}`, {title: title}
        )

    },

}