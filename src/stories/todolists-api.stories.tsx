import React, {useEffect, useState} from 'react'
import axios from "axios";
import {TodolistAPI} from "../api/todolist-api";

export default {
    title: 'API'
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        TodolistAPI.getTodos()
            .then((res) => {
                setState(res.data);
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        let title = "Helloeverebody";
        TodolistAPI.createTodo(title)
        .then( (res) => {
            setState(res.data.data.item.addedDate);
        } )

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '475ddc6e-0f2d-4a6a-8644-93ed4eec3944';
        TodolistAPI.deleteTodo(todolistId)

        .then( (res) => {
            setState(res.data);
        })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '65f0c0f5-cb33-4925-9a21-5f9f73d62a73'
        const newTitle = "Movies"
        TodolistAPI.updateTitle(todolistId, newTitle )
            .then((res) => {
                setState(res.data)
            })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = 'd95adf0a-ca5d-439f-9f54-8c40810b91da'
        TodolistAPI.getTasks(todolistId)

            .then((res) => {
                setState(res.data);
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = 'd95adf0a-ca5d-439f-9f54-8c40810b91da'
        let title = "React";
        TodolistAPI.CreateTask(todolistId, title)
            .then( (res) => {
                setState(res.data);
            } )

    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = 'd95adf0a-ca5d-439f-9f54-8c40810b91da';
        const taskId = "1f33a60b-8c30-4ada-ad93-7da9bd3f6ba3"
        TodolistAPI.deleteTask(todolistId,taskId )

            .then( (res) => {
                setState(res.data);
            })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const UpdateTaskTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = 'd95adf0a-ca5d-439f-9f54-8c40810b91da';
        const taskId = "11059270-1f42-44b2-903d-93714e749e8f";
        const newTitle = "TS"
        TodolistAPI.UpdateTaskTitle(todolistId,taskId, newTitle )

            .then( (res) => {
                setState(res.data);
            })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
