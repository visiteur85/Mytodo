import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {todolistApi} from "../api/todolist-api";

export default {
    title: 'API'
}


export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = 'c19b9a35-286a-4436-9195-d4fe234bf25c';
        todolistApi.getTasks(todolistId)
            .then((res) => {
                setState(res.data);
            })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const title = "My first task";
        const todolistId = 'c19b9a35-286a-4436-9195-d4fe234bf25c';
        todolistApi.createTask(title, todolistId )
            .then( (res) => {
            setState(res.data);
        } )

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
//
export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = 'c19b9a35-286a-4436-9195-d4fe234bf25c';
        const taskId = "4f894ba4-df85-44f6-a439-0c69b3902582"
        todolistApi.deleteTask(todolistId, taskId)
            .then( (res) => {
            setState(res.data);
        })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTaskTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = 'c19b9a35-286a-4436-9195-d4fe234bf25c';
        const taskId = "cda1ef88-d5ef-42e0-b0f0-13cef190eaac"
            todolistApi.updateTask(todolistId, taskId)
            .then((res) => {
                setState(res.data)
            })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
