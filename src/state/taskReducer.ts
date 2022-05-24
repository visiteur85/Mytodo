import {TasksStateType, TodolistType} from "../App";
import {v4} from "uuid";
import {TaskType} from "../Todolist";
import {AddTodolistType, removeTodolistType} from "./todolistReducer";

let initialState:TasksStateType = {};

export const taskReducer = (state=initialState, action:mainType): TasksStateType => {
    switch (action.type) {
        case "ADD-TASK": {
            let newTask: TaskType = {id: v4(), title: action.title, isDone: false};
            let newState = {...state, [action.todolistId]: [...state[action.todolistId], newTask ]}
            return newState
        }
        case "ADD-TODOLIST": {

            const stateCopy = {...state}
            stateCopy[action.todolistId] = []
            return stateCopy
      }
        case "REMOVE-TASK": {

            return {...state, [action.payload.todoListId]: state[action.payload.todoListId].filter(f => f.id !== action.payload.taskId)}
        }
        case "CHANGE-TASK-STATUS": {
            return  {...state, [action.payload.todolistId]: state[action.payload.todolistId].map
                     (m => m.id === action.payload.taskId ? {...m, isDone: action.payload.newIsDone} : m)}

        }
        case "REMOVE-TODOLIST": {
            const newState = {...state}
            delete newState[action.todolistId]
            return newState

        }
        default:
            return state
    }
}

export type mainType = AddTaskType | AddTodolistType
    | removeTodolistType| RemoveTaskType | changeTaskStatusType;

export type AddTaskType = ReturnType<typeof addTaskAC>;
export const addTaskAC = (title:string, todolistId:string) => {
  return {
      type: "ADD-TASK",
      title,
      todolistId,

  } as const
};

export type RemoveTaskType = ReturnType<typeof removeTaskAC>
export const removeTaskAC = (taskId: string, todoListId: string) => {
    return {
        type: "REMOVE-TASK",
        payload: {
        taskId: taskId,
        todoListId:todoListId}
    } as const
};

export type changeTaskStatusType = ReturnType<typeof changeTaskStatusAC>
export const changeTaskStatusAC = (todolistId: string, taskId: string, newIsDone: boolean) => {
    return {
        type: "CHANGE-TASK-STATUS",
        payload: {
            todolistId:todolistId,
            taskId: taskId,
            newIsDone:newIsDone
        }
    } as const
};
