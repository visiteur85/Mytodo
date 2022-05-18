import React from 'react';
import {EditableSpan} from "./EditableSpan";

type PropsType = {
    isDone:boolean
    title:string
    removeTask:(taskId:string, todoListId:string)=>void
    taskId:string
    todolistId:string
    changeTaskStatus:(todolistId:string, taskId:string, newIsDone:boolean)=>void
    // changeTitleHandler:(title:string)=>void
    changeTaskTitle:(taskId:string, newTitle:string)=>void

}

export const Task = (props:PropsType) => {

    const removeTaskHandler = () => {
      props.removeTask(props.taskId, props.todolistId )
    };
    const changeTaskStatus = (e:any)=> {
        let newIsDone = e.currentTarget.checked
        props.changeTaskStatus(props.todolistId, props.taskId, newIsDone)
    }
    
    const changeTitleHandler = (title:string) => {
      props.changeTaskTitle(props.taskId, title)
    }

    return (
        <div>
            <li><input type="checkbox" onChange={changeTaskStatus} checked={props.isDone}/>
                <EditableSpan changeTitleHandler={changeTitleHandler} title={props.title}/>
                <button onClick={removeTaskHandler}>x</button>
            </li>
        </div>
    );
};

