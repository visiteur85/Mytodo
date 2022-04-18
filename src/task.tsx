import React, {ChangeEvent} from 'react';
import {Checkbox, IconButton} from "@material-ui/core";
import {EditableSpan} from "./EditableSpan";
import {Delete} from "@material-ui/icons";
import {TaskType} from "./Todolist";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
import {changeTaskStatusAC, changeTaskTitleAC, removeTaskAC} from "./state/tasks-reducer";

type PropsType = {
    idTask:string
    todolistId:string


}

export const Task = React.memo ((props:PropsType) => {

    let task = useSelector<AppRootStateType, TaskType>(state=>state.tasks[props.todolistId].filter(
        task=>task.id === props.idTask)[0]);
    const dispatch = useDispatch();

    const onChangeHandler = (e:any) => {
        let newStatus = e.currentTarget.checked
      dispatch(changeTaskStatusAC(props.idTask, newStatus, props.todolistId))
    };
    const onTitleChangeHandler = (newValue:string) => {
        console.log(newValue)
            dispatch(changeTaskTitleAC(props.idTask, newValue, props.todolistId))
    };
    const onClickHandler = () => {
        dispatch(removeTaskAC(props.idTask, props.todolistId))

    }


    return (
        <div  className={task.isDone ? "is-done" : ""}>
            <Checkbox
                checked={task.isDone}
                color="primary"
                onChange={onChangeHandler}
            />

            <EditableSpan value={task.title} onChange={(newValue)=>{onTitleChangeHandler(newValue)}} />
            <IconButton onClick={onClickHandler}>
                <Delete />
            </IconButton>
        </div>
    );
});

