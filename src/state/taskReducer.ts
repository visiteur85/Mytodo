import {TasksStateType, TodolistType} from "../App";
import {v1} from "uuid";
import {TaskType} from "../Todolist";
import {AddTodolistType} from "./todolistReducer";

let initialState:TasksStateType = {};

export const taskReducer = (state=initialState, action:mainType) => {
    switch (action.type) {
        case "ADD-TASK": {
            let newTask: TaskType = {id: v1(), title: action.title, isDone: false};
            let newState = {...state, [action.todolistId]: [newTask, ...state[action.todolistId]]}
            return newState
        }
        case "ADD-TODOLIST": {
            const stateCopy = {...state}
            stateCopy[action.todolistId] = []
            return stateCopy
      }
        default:return state
    }
}

export type mainType = AddTaskType | AddTodolistType;

export type AddTaskType = ReturnType<typeof addTaskAC>;
export const addTaskAC = (title:string, todolistId:string) => {
  return {
      type: "ADD-TASK",
      todolistId,
      title
  }
}