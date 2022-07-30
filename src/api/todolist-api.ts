import axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        // Не забываем заменить API-KEY на собственный
        'API-KEY': '13291219-4788-4555-a4f4-aaeffe0abc09'
    }
})


export const todolistApi = {
    getTodos: () => {
        return instance.get<Array<TodoType>>('todo-lists')
    },
    createTodo: (title: string) => {
        return instance.post<BaseType<{ item: TodoType }>>('todo-lists', {title})
    },
    deleteTodo: (todolistId: string) => {
        return instance.delete<BaseType>(`todo-lists/${todolistId}`)
    },
    updateTodo: (todolistId: string) => {
        return instance.put<BaseType>(`todo-lists/${todolistId}`, {title: 'Books'})

    },
    getTasks:(todolistId:string) => {
        return instance.get<TasksType>(`todo-lists/${todolistId}/tasks`)
    },
    createTask: (title: string, todolistId:string) => {
        return instance.post<BaseTaskType<{ item:TasksType }>>(`todo-lists/${todolistId}/tasks`, {title})
    },
    deleteTask: (todolistId: string, taskId:string) => {
        return instance.delete<BaseTaskType>(`todo-lists/${todolistId}/tasks/${taskId}`)
    },
    updateTask: (todolistId: string, taskId:string) => {
        return instance.put<BaseTaskType>(`todo-lists/${todolistId}/tasks/${taskId}`, {title: 'remove me, please'})

    },


}

//type
export type TodoType = {
    id: string
    addedDate: string
    order: string
    title: string
}


export type BaseType<T = {}> = {
    resultCode: number
    messages: string[]
    fieldsErrors:string[]
    data:T
}

export type TasksType = {
    items: TaskType[]
    totalCount: number
    error:string
};

export type TaskType  = {
    description: string
    title: string
    completed: boolean
    status: number
    priority: number
    startDate: string
    deadline: string
    id: string
    todoListId: string
    order: number
    addedDate: string
}



export type BaseTaskType<T = {}> = {
    fieldsErrors: string[]
    messages: string[]
    resultCode: 0
    data:T
}


