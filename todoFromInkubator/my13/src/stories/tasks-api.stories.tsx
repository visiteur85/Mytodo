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
        let todolistId = "be59c3da-5a85-43aa-839a-523d401e921b";
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
        let title = "rename";

        let todolistId = "549af769-9a5f-4a81-84b6-3e028c2a915b";
        todolistApi.UpdateTodolistTitle(todolistId, title)
            .then((res) => {

                setState(res.data)
            })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
