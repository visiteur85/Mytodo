import React, {useCallback} from 'react';
import {ButtonsType, TasksStateType, TodolistType} from "./App";
import {Task} from "./Task";
import {EditableSpan} from "./EditableSpan";
import {AddItemForm} from "./AddItemForm";
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "./state/store";
import {changeFilterAC, removeTodolistAC} from "./state/todolistReducer";
import {addTaskAC, changeTaskStatusAC, removeTaskAC} from "./state/taskReducer";


export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    todolistId: string
}

export const Todolist = React.memo((props: PropsType) => {

    let tasks = useSelector<rootReducerType, Array<TaskType>>(state => state.tasks[props.todolistId]);
    let todolists = useSelector<rootReducerType, TodolistType>(state => state.todolists.filter(f => f.id === props.todolistId)[0])
    let dispatch = useDispatch();


    if (todolists.filter === "active") {
        tasks = tasks.filter(f => f.isDone === false)
    }

    if (todolists.filter === "completed") {
        tasks = tasks.filter(f => f.isDone === true)
    }


    const changeFilterHandler = useCallback((value: ButtonsType) => {
        dispatch(changeFilterAC(value, props.todolistId))

    }, [dispatch, props.todolistId]);
    const removeTodolistHandler = useCallback(() => {
        dispatch(removeTodolistAC(props.todolistId))

    }, [dispatch, props.todolistId]);
    const callbackHandler = useCallback((title: string) => {
        dispatch(addTaskAC(title, props.todolistId))


    }, [dispatch, props.todolistId]);

    const removeTaskHandler = useCallback((taskId: string) => {
        dispatch(removeTaskAC(taskId, props.todolistId))
    }, [dispatch, props.todolistId]);

    const changeTaskStatusHandler = useCallback((taskId: string, newIsDone: boolean) => {
        dispatch(changeTaskStatusAC(props.todolistId, taskId, newIsDone))
    }, [dispatch, props.todolistId])

    return <div>
        <h3><EditableSpan title={todolists.title}/>
            <button onClick={removeTodolistHandler}>x</button>
        </h3>
        <div>

            <AddItemForm callback={callbackHandler}/>
        </div>
        <ul>
            {tasks.map(m => {


                return (
                    <Task
                        key={m.id}
                        taskId={m.id}
                        removeTask={removeTaskHandler}
                        isDone={m.isDone}
                        title={m.title}
                        todolistId={props.todolistId}
                        changeTaskStatus={changeTaskStatusHandler}
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
})
