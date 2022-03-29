import {TasksStateType} from "../App";
import {v1} from "uuid";
import {AddTodolistActionType} from "./todolists-reducer";

export type RemoveTaskType = {
    type: 'REMOVE-TASK',
    idTask:string,
    todolistId:string

}
export type SecondTasksActionType = {
    type: 'ADD-TASK',
    title:string
    todolistId:string

}

export type changeTaskStatusType = {
    type: 'CHANGE-STATUS',
    idTask:string,
    newIsDone:boolean,
    todolistId:string

}
export type changeTaskTitleACType = {
    type: 'CHANGE-TITLE',
    idTask:string,
    title:string,
    todolistId:string

}


type ActionsType = RemoveTaskType | SecondTasksActionType | changeTaskStatusType | changeTaskTitleACType | AddTodolistActionType ;

export const taskReducer = (state: TasksStateType, action: ActionsType): TasksStateType  => {
    switch (action.type) {
        case 'REMOVE-TASK':{
            let newState = {...state, [action.todolistId]:state[action.todolistId].filter(f=>f.id !== action.idTask)}
            return newState}
        case "ADD-TASK": {
            let newTask = {id:v1(), title:action.title, isDone:false}
            let newState = {...state, [action.todolistId]:[newTask,...state[action.todolistId]]}
            return newState}
        case "CHANGE-STATUS": {

            let newState = {...state, [action.todolistId]:state[action.todolistId].map(m=>m.id === action.idTask ? {...m, isDone:action.newIsDone}: m)}
            return newState}
        case "CHANGE-TITLE": {

            let newState = {...state, [action.todolistId]:state[action.todolistId].map(m=>m.id === action.idTask ? {...m, title:action.title}: m)}
            return newState}
        case "ADD-TODOLIST": {
            return {...state, [action.todolistId]:[]}
        }

        default:
            throw new Error("I don't understand this type")
    }
}

export const removeTaskAC = (idTask:string,todolistId:string): RemoveTaskType => {
    return { type: 'REMOVE-TASK', idTask, todolistId  }
}
export const AddtasklistAC = (title:string, todolistId:string ): SecondTasksActionType => {
    return { type: 'ADD-TASK', title, todolistId }
}

export const changeTaskStatusAC = ( idTask:string, newIsDone:boolean, todolistId:string ): changeTaskStatusType => {
    return { type: 'CHANGE-STATUS', idTask, newIsDone, todolistId }
}

export const changeTaskTitleAC = ( idTask:string, title:string, todolistId:string ): changeTaskTitleACType => {
    return { type: 'CHANGE-TITLE', idTask, title, todolistId }
}