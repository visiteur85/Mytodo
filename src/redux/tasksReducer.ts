import {TasksStateType} from "../App";
import {v1} from "uuid";

let todolistId1 = v1();
let todolistId2 = v1();

let initialState:TasksStateType = {
    [todolistId1]: [
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true}
    ],
    [todolistId2]: [
        {id: v1(), title: "Milk", isDone: true},
        {id: v1(), title: "React Book", isDone: true}
    ]
}

export const tasksReducer = (state = initialState, action: mainType) => {
    switch (action.type) {
        case "Remove-Task": {
            let newState = {...state, [action.payload.todoListId]:state[action.payload.todoListId].filter(f=>f.id === action.payload.taskId)}
            return newState
        }


        default:return state
    }
}

export type mainType = RemoveTaskType;

export type RemoveTaskType = ReturnType<typeof RemoveTAskAC>;
export const RemoveTAskAC = (todoListId: string, taskId: string) => {
    return {
        type: "Remove-Task",
        payload: {
            todoListId: todoListId,
            taskId: taskId,
        } as const
    }


}