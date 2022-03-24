import { filterReducer } from './filterReducer';
import { taskReducer } from './taskReducer';
import { combineReducers, createStore } from "redux";

let rootReducer = combineReducers({
    task:taskReducer,
    filter: filterReducer
});

export type rootReducerType = ReturnType<typeof rootReducer>;
export let store = createStore(rootReducer)