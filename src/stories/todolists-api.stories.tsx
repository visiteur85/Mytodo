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
            setState(res.data);
        } )

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = 'ca93a187-b8cb-408c-a591-eff17e4e9af9';
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
        const todolistId = 'b0bb9b43-0f38-461b-b048-3fc2c7928461'
        const newTitle = "aaaaaaaaaaaaaa"
        TodolistAPI.updateTitle(todolistId, newTitle )
            .then((res) => {
                setState(res.data)
            })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
