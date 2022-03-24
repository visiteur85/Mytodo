import { v1 } from "uuid";
import {TaskType} from "../../Todolist";


let initialState: Array<TaskType> = [
    { id: v1(), title: "HTML&CSS", isDone: true },
    { id: v1(), title: "JS", isDone: true },
    { id: v1(), title: "ReactJS", isDone: false }
]
export const taskReducer = (state = initialState, action: mainType) => {
switch (action.type) {
    case "REMOVE-TASK": {
        let newState = state.filter(f=>f.id === action.payload.id);
        return newState
    }
    case "ADD-TASK": {
        let newTask = { id: v1(), title: action.payload.title, isDone: true };
        let newState = [newTask, ...state]
        return newState
    }
    case "CHANGE-STATUS": {
        let newState = state.map(m=>m.id === action.payload.id ? {...m, isDone: action.payload.isDone}:m)
        return newState
    }
    default: return state
}
}

export type mainType = removeTaskType | addTaskType | changeStatusACType;

type removeTaskType = ReturnType<typeof removeTaskAC>;
export const removeTaskAC = (id: string) => {
    return {
        type: "REMOVE-TASK",
        payload: {
            id:id
        }
    } as const

}

type addTaskType = ReturnType<typeof addTaskAC>;
export const addTaskAC = (title:string) => {
    return {
        type: "ADD-TASK",
        payload: {
            title:title
        }
    } as const

}

type changeStatusACType = ReturnType<typeof changeStatusAC>;
export const changeStatusAC = (id: string, newIsdone: boolean) => {
    return {
        type: "CHANGE-STATUS",
        payload: {
            id: id,
            isDone: newIsdone
        }
    } as const

}
