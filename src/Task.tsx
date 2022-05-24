import React, {useCallback} from 'react';
import {EditableSpan} from "./EditableSpan";

type PropsType = {
    isDone:boolean
    title:string
    removeTask:(taskId: string)=>void
    taskId:string
    todolistId:string
    changeTaskStatus:(taskId: string, newIsDone:boolean)=>void
}

export const Task = React.memo ((props:PropsType) => {
    console.log(props.title)
    const removeTaskHandler = () => {
      props.removeTask(props.taskId)
    };
    const changeTaskStatus = (e:any)=> {
        let newIsDone = e.currentTarget.checked
        props.changeTaskStatus(props.taskId, newIsDone)
    };

    return (
        <div>
            <li><input type="checkbox" onChange={changeTaskStatus} checked={props.isDone}/>
                <EditableSpan title={props.title}/>
                <button onClick={removeTaskHandler}>x</button>
            </li>
        </div>
    );
});

