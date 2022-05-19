import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from "uuid";
import {AddItemForm} from "./AddItemForm";
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "./state/store";
import {addTaskAC} from "./state/taskReducer";
import {addTodolistAC} from "./state/todolistReducer";
// доделываем компоненты EditableSpan
export type TodolistType = {
    id: string
    title: string
    filter: ButtonsType
};
export type ButtonsType = "all" | "active" | "completed";
export type  TasksStateType = {
    [key: string]: Array<TaskType>
}

function App() {

    // let todolistId1 = v1();
    // let todolistId2 = v1();

    // let [todolists, setTodolists] = useState<Array<TodolistType>>([
    //     {id: todolistId1, title: "What to learn", filter: "all"},
    //     {id: todolistId2, title: "What to buy", filter: "all"}
    // ])

    // let [tasks, setTasks] = useState<TasksStateType>({
    //     [todolistId1]: [
    //         {id: v1(), title: "HTML&CSS", isDone: true},
    //         {id: v1(), title: "JS", isDone: false}
    //     ],
    //     [todolistId2]: [
    //         {id: v1(), title: "Milk", isDone: true},
    //         {id: v1(), title: "React Book", isDone: false}
    //     ]
    // });

    let dispath = useDispatch();
    let tasks = useSelector<rootReducerType, TasksStateType>(state=>state.tasks)
    let todolists = useSelector<rootReducerType, Array<TodolistType>>(state=>state.todolists)

    const removeTask = (taskId: string, todoListId: string) => {
        // setTasks({...tasks, [todoListId]: tasks[todoListId].filter(f => f.id !== taskId)})
    };

    const changeFilter = (value: ButtonsType, todoListId: string) => {
        // setTodolists(todolists.map(m => m.id === todoListId ? {...m, filter: value} : m))
    };
    const addTask = (title: string, todoListId: string) => {
        // let newTask: TaskType = {id: v1(), title: title, isDone: false};
        // setTasks({...tasks, [todoListId]: [newTask, ...tasks[todoListId]]})
        dispath(addTaskAC(title, todoListId))

    };

    const changeTaskStatus = (todolistId: string, taskId: string, newIsDone: boolean) => {
        // setTasks({...tasks, [todolistId]: tasks[todolistId].map
        //     (m => m.id === taskId ? {...m, isDone: newIsDone} : m)})
    }

    const removeTodolist = (todolistId: string) => {
        // setTodolists(todolists.filter(f => f.id !== todolistId));
        // delete (tasks[todolistId])
    };

    const addTodoList = (title:string) => {
        dispath(addTodolistAC(title))


    }

    return (
        <div className="App">
            <AddItemForm callback={addTodoList}/>
            {todolists.map(m => {

                let filteredTask = tasks[m.id];
                if (m.filter === "active") {
                    filteredTask = filteredTask.filter(f => f.isDone === false)
                }

                if (m.filter === "completed") {
                    filteredTask = filteredTask.filter(f => f.isDone === true)
                }

                return (
                    <Todolist
                        title={m.title}
                        tasks={filteredTask}
                        key={m.id}
                        todolistId={m.id}
                        filter={m.filter}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeTaskStatus={changeTaskStatus}
                        removeTodolist={removeTodolist}

                    />
                )
            })}
        </div>
    );
}

export default App;
