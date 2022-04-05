import React, {useReducer, useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from "uuid";
import {RemoveTAskAC, tasksReducer} from "./redux/tasksReducer";
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "./redux/store";

export type ButtonsType = "all" | "active" | "completed"

export type TodolistType = {
    id:string
    title:string
    filter: ButtonsType
}

export type TasksStateType = {
    [key:string]:TaskType[]
}

function App() {

     let todolistId1 = v1();
    let todolistId2 = v1();

    let [todolists, setTodolists] = useState<Array<TodolistType>>([
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ])

    // let [tasks, taskDispatch] = useReducer(tasksReducer,{
    //     [todolistId1]: [
    //         {id: v1(), title: "HTML&CSS", isDone: true},
    //         {id: v1(), title: "JS", isDone: true}
    //     ],
    //     [todolistId2]: [
    //         {id: v1(), title: "Milk", isDone: true},
    //         {id: v1(), title: "React Book", isDone: true}
    //     ]
    // });

    let dispatch = useDispatch();
    let tasks = useSelector<rootReducerType, TasksStateType>(state=>state.tasks)

    const removeTask = (todoListId:string, taskId:string) => {
    dispatch(RemoveTAskAC(todoListId, taskId))

    }

    return (

        <div className="App">
            {todolists.map(m=>
                <Todolist key={m.id}
                          id={m.id}
                    title={m.title}
                          // tasks={tasks[m.id]}
                removeTask={removeTask}/>
            )}
        </div>
    );
}

export default App;
