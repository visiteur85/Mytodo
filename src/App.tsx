import React, {useState} from 'react';
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
    let tasks = useSelector<rootReducerType, TasksStateType>(state=>state.tasks)
    let todolists = useSelector<rootReducerType, Array<TodolistType>>(state=>state.todolists)

    const removeTask = (taskId: string, todoListId: string) => {
        dispatch(removeTaskAC(taskId, todoListId))
    };
    const addTask = (title: string, todoListId: string) => {

        dispatch(addTaskAC(title, todoListId))

    };
    const changeTaskStatus = (todolistId: string, taskId: string, newIsDone: boolean) => {
        dispatch(changeTaskStatusAC(todolistId, taskId, newIsDone))
    };
    const addTodoList = (title:string) => {

        dispatch(addTodolistAC(title))


    };
    const removeTodolist = (todolistId: string) => {
        // setTodolists(todolists.filter(f => f.id !== todolistId));
        // delete (tasks[todolistId])
        dispatch(removeTodolistAC(todolistId))
    };

    const changeFilter = (value: ButtonsType, todoListId: string) => {
    dispatch(changeFilterAC(value, todoListId))
    };

    return (
        <div className="App">
            <AddItemForm callback={addTodoList}/>
            {todolists.map(m => {

                let filteredTask = tasks[m.id];
                if (m.filter === "active") {
                    filteredTask = filteredTask.filter(f => f.isDone === false)
                }

                if (m.filter === "completed") {
                    filteredTask = filteredTask.filter(f => f.isDone === true)
                }

                return (
                    <Todolist
                        title={m.title}
                        tasks={filteredTask}
                        key={m.id}
                        todolistId={m.id}
                        filter={m.filter}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeTaskStatus={changeTaskStatus}
                        removeTodolist={removeTodolist}

                    />
                )
            })}
        </div>
    );
}

export default App;
