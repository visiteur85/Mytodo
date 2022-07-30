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
        const taskId = "65bbb3ea-1ffb-4d17-8244-16dab93ce019"
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
        const taskId = "c3a6c1b3-f125-41b1-855d-e0b594a28861"
            todolistApi.updateTask(todolistId, taskId)
            .then((res) => {
                setState(res.data)
            })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}


