import { v1 } from "uuid";
import { TaskType } from "../../Todolist";

let initialState: Array<TaskType> = [
    { id: v1(), title: "HTML&CSS", isDone: true },
    { id: v1(), title: "JS", isDone: true },
    { id: v1(), title: "ReactJS", isDone: false },
    { id: v1(), title: "Rest API", isDone: false },
    { id: v1(), title: "GraphQL", isDone: false },
]

export const tasksReducer = (state = initialState, action: mainType) => {
switch(action.type) {
    case "REMOVE-TASK": {
        let newState = state.filter(f=>f.id !== action.payload.id)
return newState
    }
    case "ADD-TASK": {
        let task = { id: v1(), title: action.payload.title, isDone: false }  ;
        let newState = [task,...state] 
        
        return newState
    }
    case "CHANGE-STATUS": {
        let newState = state.map(m=>m.id === action.payload.Id ? {...m, isDone: action.payload.isDone} : m)
        return newState
    }
    default: return state
}
};

export type mainType = removeTaskType | addTaskType | changeStatusType;

type removeTaskType = ReturnType<typeof removeTaskAC>;
export const removeTaskAC = (id: string) => {
    return {
        type: "REMOVE-TASK",
        payload: {
            id: id

        }
    } as const
}

type addTaskType = ReturnType<typeof addTaskAC>;
export const addTaskAC = (title: string) => {
    return {
        type: "ADD-TASK",
        payload: {
            title:title

        }
    } as const
}

type changeStatusType = ReturnType<typeof changeStatusAC>;
export const changeStatusAC = (taskId: string, isDone: boolean) => {
    return {
        type: "CHANGE-STATUS",
        payload: {
            Id: taskId,
            isDone:isDone

        }
    } as const
}