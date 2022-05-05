import axios from "axios";
import {CreateTask, UpdateTaskTitle} from "../stories/todolists-api.stories";

const instanse = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.1/",
    withCredentials: true, headers: {
        'API-KEY': '13291219-4788-4555-a4f4-aaeffe0abc09'
    }
})

export const TodolistAPI = {
    getTodos: () => {
        return instanse.get<TodoType[]>("todo-lists")

    },
    createTodo: (title: string) => {
        return instanse.post<BaseType<{ item: TodoType }>>("todo-lists", {title})

    },
    deleteTodo: (todolistId: string) => {
        return instanse.delete<BaseType<{}>>(`todo-lists/${todolistId}`,)
    },
    updateTitle: (todolistId: string, newTitle: string) => {
        return instanse.put<BaseType>(`todo-lists/${todolistId}`, {title: newTitle})
    },
    getTasks: (todolistId: string) => {
        return instanse.get<TaskType>(`todo-lists/${todolistId}/tasks`)
    },
    CreateTask: (todolistId: string, title: string) => {
        return instanse.post(`todo-lists/${todolistId}/tasks`, {title})
    },
    deleteTask: (todolistId: string, taskId: string) => {
        return instanse.delete(`todo-lists/${todolistId}/tasks/${taskId}`)
    },
    UpdateTaskTitle: (todolistId: string, taskId: string, newTitle: string) => {
        return instanse.put(`todo-lists/${todolistId}/tasks/${taskId}`, {title: newTitle})
    },


}
//types
type BaseType<T = {}> = {
    messages: string[]
    fieldsErrors: string[]
    resultCode: number
    data: T
}
type TodoType = {
    id: string
    title: string
    addedDate: string
    order: number
}

type TasksType = {
    items: TaskType[]
    totalCount: number
    error: null | string
}

type TaskType = {
    id: string
    title: string
    description:	null
    todoListId: string
    order:number
    status:number
    priority:number
    startDate: null | string
    deadline: null | string
    addedDate: string
}





