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
        return instance.get('todo-lists')
    },
    createTodo: (title: string) => {
        return instance.post('todo-lists', {title})
    },
    deleteTodo: (todolistId: string) => {
        return instance.delete(`todo-lists/${todolistId}`)
    },
    updateTodo: (todolistId: string) => {
        return instance.put(`todo-lists/${todolistId}`, {title: 'Books'})

    }

}