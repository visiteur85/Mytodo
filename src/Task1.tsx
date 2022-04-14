import React, {ChangeEvent, useCallback} from 'react';
import {TaskType} from "./Todolist";
import {Checkbox, IconButton} from "@material-ui/core";
import {EditableSpan} from "./EditableSpan";
import {Delete} from "@material-ui/icons";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
import {changeTaskStatusAC, changeTaskTitleAC, removeTaskAC} from "./state/tasks-reducer";


export type TaskPropsType = {
    todolistId: string
    taskId: string
}


export const Task1 = React.memo(({taskId, todolistId}: TaskPropsType) => {

    const task = useSelector<AppRootStateType, TaskType>(state => state.tasks[todolistId].filter(task => task.id === taskId)[0]);
    const dispatch = useDispatch();

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newStatus = e.currentTarget.checked;
        dispatch(changeTaskStatusAC(taskId, newStatus, todolistId))

    };
    const onTitleChangeHandler = (newValue: string) => {
        dispatch(changeTaskTitleAC(taskId, newValue, todolistId))

    };
    const onClickHandler = () => {
        dispatch(removeTaskAC(taskId, todolistId))

    };

    return <div key={taskId} className={task.isDone ? "is-done" : ""}>
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
});

