import React, {useEffect, useState} from 'react'
import axios from "axios";
import {todolistApi} from "../api/todolist-api";

export default {
    title: 'API'
}

let settings = {
    withCredentials: true,
    headers: {
        "API-KEY": "13291219-4788-4555-a4f4-aaeffe0abc09"
    }
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        // здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке
        todolistApi.getTodos()
            .then((res) => {

                setState(res.data)
            })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        let title = "instanseList";
        todolistApi.createTodos(title)

            .then((res) => {

                setState(res.data)
            })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        let todolistId = "3d5cdf67-1f6f-42d8-8357-bef302112f3f";
       todolistApi.deleteTodos(todolistId)
            .then((res) => {

                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        let title = "Study";

        let todolistId = "d95adf0a-ca5d-439f-9f54-8c40810b91da";
        todolistApi.UpdateTodolistTitle(todolistId, title)
            .then((res) => {

                setState(res.data)
            })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        let title = "instanseList";
        todolistApi.createTodos(title)

            .then((res) => {

                setState(res.data)
            })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}

