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
    changeTaskTitle:(todolistId: string, taskId: string, newTitle:string)=>void
    changeTodolistTitle:(todolistId: string, newTitle:string)=>void
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

    const changeTitleHandler = (newTitle:string) => {
        props.changeTodolistTitle(props.todolistId, newTitle)
    };
    const changeTaskTitle = (taskId:string, newTitle:string)=> {
        props.changeTaskTitle(props.todolistId, taskId, newTitle)
    }

    return <div>
        <h3><EditableSpan changeTitleHandler={changeTitleHandler}  title={props.title}/><button onClick={removeTodolistHandler}>x</button> </h3>
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
                          // changeTitleHandler={changeTitleHandler}
                          changeTaskTitle={changeTaskTitle}

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
