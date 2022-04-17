import React, {ChangeEvent, useCallback} from 'react';
import {TaskType} from "./Todolist";
import {Checkbox, IconButton} from "@material-ui/core";
import {EditableSpan} from "./EditableSpan";
import {Delete} from "@material-ui/icons";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
import {TasksStateType} from "./App";
import {Task} from "./task";
import {changeTaskStatusAC, changeTaskTitleAC, removeTaskAC} from "./state/tasks-reducer";

type PropsType = {
    todolistId: string
    taskId: string
}

export const Task1 = React.memo((props: PropsType) => {
    const task = useSelector<AppRootStateType, TaskType>(state => state.tasks[props.todolistId].filter(task => task.id === props.taskId)[0])
    const dispatch = useDispatch();
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newIsDoneValue = e.currentTarget.checked;
        dispatch(changeTaskStatusAC(props.taskId, newIsDoneValue, props.todolistId))
    };
    const onTitleChangeHandler = (newValue: string) => {
      dispatch(changeTaskTitleAC(props.taskId, newValue, props.todolistId))
    };
    const onClickHandler = ()=> {
        dispatch(removeTaskAC(props.taskId,props.todolistId))
    }


    return (
        <div key={task.id} className={task.isDone ? "is-done" : ""}>
            <Checkbox
                checked={task.isDone}
                color="primary"
                onChange={onChangeHandler}
            />

            <EditableSpan value={task.title} onChange={onTitleChangeHandler}/>
            <IconButton onClick={onClickHandler}>
                <Delete/>
            </IconButton>
        </div>
    );
});

