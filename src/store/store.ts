import {combineReducers, createStore} from "redux";
import {tasksReducer} from "./reducers/tasksReducer";
import {filterReducer} from "./reducers/filterReducer";

let rootReducer = combineReducers({
    task:tasksReducer,
    filtered: filterReducer
});

export type rootReducerType = ReturnType<typeof rootReducer>;
export let store = createStore(rootReducer)