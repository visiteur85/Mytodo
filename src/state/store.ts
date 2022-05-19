import {combineReducers, createStore} from "redux";
import {taskReducer} from "./taskReducer";
import {todolistReducer} from "./todolistReducer";

let rootReducer = combineReducers({
    tasks:taskReducer,
    todolists:todolistReducer
    // todoList: todolistReducer
})

export type rootReducerType = ReturnType<typeof rootReducer>;
export let store = createStore(rootReducer)

//@ts-ignore
window.store=store
