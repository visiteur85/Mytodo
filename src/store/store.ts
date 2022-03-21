import { combineReducers, createStore } from "redux";
import { filterReducer } from "./filterReducer";
import { tasksReducer } from "./tasksReducer";

let rootReducer = combineReducers({
    tasks:tasksReducer,
    filter: filterReducer
})

export type rootReducerType = ReturnType<typeof rootReducer>;

export let store = createStore(rootReducer)