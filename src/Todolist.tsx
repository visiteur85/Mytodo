import React from 'react';
import {ButtonsType, TasksStateType} from "./App";
import {useSelector} from "react-redux";
import {rootReducerType} from "./redux/store";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    // tasks: Array<TaskType>
    id:string
    removeTask:(todoListId:string, taskId:string)=>void

}

export function Todolist(props: PropsType) {
    let tasks = useSelector<rootReducerType, TasksStateType>(state=>state.tasks)
    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>{tasks[props.id].map(m=> {

            const removeTaskHandler = () => {
              props.removeTask(props.id, m.id)
            }
            return (
            <li><input type="checkbox" checked={m.isDone}/> <span>{m.title}</span>
                <button onClick={removeTaskHandler}>x</button>
            </li>
        )})}
        </ul>
        <div>
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
        </div>
    </div>
}
