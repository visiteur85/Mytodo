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
        const todolistId = '8ba88b39-cc4a-442e-8a53-7e5a4f7fd141';
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
        const todolistId = '785c3864-6a4c-4c39-9442-de448a5f0d00'
        const newTitle = "aaaaaaaaaaaaaa"
        TodolistAPI.updateTitle(todolistId, newTitle )
            .then((res) => {
                setState(res.data)
            })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
