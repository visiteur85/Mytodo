import axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        // Не забываем заменить API-KEY на собственный
        'API-KEY': '13291219-4788-4555-a4f4-aaeffe0abc09'
    }
});

export const todolistApi = {
    getTodos: () => {
        let promise = instance.get<OneTodolistType[]>("https://social-network.samuraijs.com/api/1.1//todo-lists");
        return promise
    },
    createTodos: (title: string) => {
        let promise = instance.post<BaseType<{item: OneTodolistType}>>("https://social-network.samuraijs.com/api/1.1//todo-lists", {title})
        return promise
    },
    deleteTodos: (todolistId: string) => {
        let promise = instance.delete<BaseType>(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`
        )
        return promise
    },
    UpdateTodolistTitle: (todolistId: string, title: string) => {
        let promise = instance.put<BaseType>(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, {title})
        return promise
    },

}
export type OneTodolistType = {
    id: string
    addedDate: string
    order: number
    title: string
};
type BaseType<T = {}> = {
    resultCode: number
    fieldsErrors: string[]
    messages: string[]
    data: T
}
// export type CreateListType = {
//     resultCode: number
//     fieldsErrors: string[]
//     messages: string[]
//     data: {
//         item: OneTodolistType
//     }
// };
// export type DeleteAndUPdateType = {
//     resultCode: number
//     fieldsErrors: string[]
//     messages: string[]
//     data: {
//     }
// };


