import {TasksStateType, TodolistType} from "../App";
import {v1} from "uuid";
import {TaskType} from "../Todolist";
import {AddTaskType} from "./taskReducer";

let initialState:Array<TodolistType> = [];

export const todolistReducer = (state=initialState, action:mainType) => {
    switch (action.type) {
        case "ADD-TODOLIST": {
            let newTodolist: TodolistType = {id:action.todolistId, title:action.title, filter:"all" };
            let newState = [newTodolist,...state]
            return newState
        }
        default:return state
    }
}

export type mainType = AddTodolistType

export type AddTodolistType = ReturnType<typeof addTodolistAC>;
export const addTodolistAC = (title:string) => {
  return {
      type: "ADD-TODOLIST",
      title:title,
      todolistId:v1()
  }
}