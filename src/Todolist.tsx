import React from 'react';
import {ButtonsType} from "./App";
import {Task} from "./Task";
import {EditableSpan} from "./EditableSpan";
import {AddItemForm} from "./AddItemForm";


export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    todolistId: string
    filter: ButtonsType
    removeTask: (taskId: string, todoListId: string) => void
    changeFilter: (value: ButtonsType, todoListId: string) => void
    addTask:(title: string, todoListId: string)=>void
    changeTaskStatus:(todolistId:string, taskId:string, newIsDone:boolean)=>void
    removeTodolist:(todolistId:string)=>void
}

export function Todolist(props: PropsType) {


    const changeFilterHandler = (value: ButtonsType) => {
              props.changeFilter(value, props.todolistId)
    };
    const removeTodolistHandler = ()=> {
        props.removeTodolist(props.todolistId)
    };
    const callbackHandler = (title:string)=>{
        props.addTask(title, props.todolistId)

    }

    return <div>
        <h3><EditableSpan title={props.title}/><button onClick={removeTodolistHandler}>x</button> </h3>
        <div>
          
            <AddItemForm callback={callbackHandler}/>
        </div>
        <ul>
            {props.tasks.map(m => {
                return (
                    <Task taskId={m.id} removeTask={props.removeTask}
                          key={m.id} isDone={m.isDone}
                          title={m.title}
                          todolistId={props.todolistId}
                          changeTaskStatus={props.changeTaskStatus}
                    />
                )
            })}
        </ul>
        <div>
            <button onClick={() => changeFilterHandler("all")}>All</button>
            <button onClick={() => changeFilterHandler("active")}>Active</button>
            <button onClick={() => changeFilterHandler("completed")}>Completed</button>
        </div>
    </div>
}
