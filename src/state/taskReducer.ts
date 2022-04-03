import { v1 } from 'uuid';
import { TasksStateType } from "../App";

export type RemoveTasktACType = {
    type: 'REMOVE-TASK',
    id:string, 
    todolistId: string

}
export type addTaskACType = {
    type: 'ADD-TASK',
    title:string,
    todolistId: string


}

export type changeTaskStatusType = {
    type: 'CHANGE-TASK-STATUS',
    id:string
    newIsDone: boolean 
    todolistId: string


}


type ActionsType = RemoveTasktACType | addTaskACType | changeTaskStatusType ;

export const tasksReducer = (state: TasksStateType, action: ActionsType): TasksStateType  => {
    switch (action.type) {
        case 'REMOVE-TASK': {
            let newState = {...state, [action.todolistId]:state[action.todolistId].filter(f=>f.id !== action.id)}
            return newState
        }
            
        case 'ADD-TASK': {
            let newTask = { id: v1(), title: action.title, isDone: false };
            let newState = {...state,[action.todolistId]:[newTask, ...state[action.todolistId]] }
            return newState}

            case 'CHANGE-TASK-STATUS': {
              
                let newState = {...state,[action.todolistId]:state[action.todolistId].map(m=>m.id===action.id ? {...m, isDone:action.newIsDone}:m ) }
                return newState}

        default:
            throw new Error("I don't understand this type")
    }
}

export const removeTaskAC = (id:string, todolistId: string ): RemoveTasktACType => {
    return { type: 'REMOVE-TASK', id:id, 
    todolistId: todolistId }
};

export const addTaskAC = (title:string, todolistId: string ): addTaskACType => {
    return { type: 'ADD-TASK', title:title, 
    todolistId: todolistId }
};

export const changeTaskStatusAC = (id:string, newIsDone: boolean, todolistId: string ): changeTaskStatusType => {
    return { type: 'CHANGE-TASK-STATUS', id: id, newIsDone:newIsDone, 
    todolistId: todolistId }
};
