import {combineReducers, createStore} from "redux";
import {tasksReducer} from "./tasksReducer";

let rootReducer = combineReducers({
    tasks:tasksReducer
});
export type rootReducerType = ReturnType<typeof rootReducer>
export let store = createStore(rootReducer)