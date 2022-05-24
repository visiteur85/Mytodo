import React, {useCallback, useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from "uuid";
import {AddItemForm} from "./AddItemForm";
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "./state/store";
import {addTaskAC, changeTaskStatusAC, removeTaskAC} from "./state/taskReducer";
import {addTodolistAC, changeFilterAC, removeTodolistAC} from "./state/todolistReducer";
// доделываем компоненты EditableSpan
export type TodolistType = {
    id: string
    title: string
    filter: ButtonsType
};
export type ButtonsType = "all" | "active" | "completed";
export type  TasksStateType = {
    [key: string]: Array<TaskType>
}

function App() {


    let dispatch = useDispatch();
    let todolists = useSelector<rootReducerType, Array<TodolistType>>(state => state.todolists)


    const addTodoList = useCallback((title: string) => {

        dispatch(addTodolistAC(title))


    }, [dispatch]);


    return (
        <div className="App">
            <AddItemForm callback={addTodoList}/>
            {todolists.map(m => {
                return (
                    <Todolist
                        key={m.id}
                        todolistId={m.id}


                    />
                )
            })}
        </div>
    );
}

export default App;
