import {ButtonsType, TasksStateType, TodolistType} from "../App";
import {v1} from "uuid";
import {TaskType} from "../Todolist";
import {AddTaskType} from "./taskReducer";
const ADD_TODOLIST = "ADD-TODOLIST"
let initialState:Array<TodolistType> = [];

export const todolistReducer = (state=initialState, action:mainTypeTodolist): Array<TodolistType> => {

    switch (action.type) {
        case "ADD-TODOLIST": {

            let newTodolist: TodolistType = {id:action.todolistId, title:action.title, filter:"all" };
            let newState = [newTodolist,...state]
            return newState

        }
        case "REMOVE-TODOLIST": {
            let newState = state.filter(f => f.id !== action.todolistId)
            return newState
        }
        case "CHANGE-FILTER": {
            let newState = state.map(m => m.id === action.todoListId ? {...m, filter: action.value} : m)

            return newState
        }
        default:return state
    }
}

export type mainTypeTodolist = AddTodolistType | removeTodolistType | changeFilterType;

export type AddTodolistType = ReturnType<typeof addTodolistAC>;
export const addTodolistAC = (title:string) => {
  return {
      type: "ADD-TODOLIST",
      title:title,
      todolistId:v1()
  }as const
};

export type removeTodolistType = ReturnType<typeof removeTodolistAC>;
export const removeTodolistAC = (todolistId: string) => {
    return {
        type: "REMOVE-TODOLIST",
                todolistId:todolistId
    }as const
};

export type changeFilterType = ReturnType<typeof changeFilterAC>;
export const changeFilterAC = (value: ButtonsType, todoListId: string) => {
    return {
        type: "CHANGE-FILTER",
        value:value,
        todoListId:todoListId
    }as const
};