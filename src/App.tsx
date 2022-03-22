import React, { useReducer, useState } from "react";
import "./App.css";
import { Todolist } from "./Todolist";
import { v1 } from "uuid"
import { addTaskAC, changeStatusAC, removeTaskAC, tasksReducer } from "./store/reducers/tasksReducer";
import {changeFilterAC, filterReducer} from "./store/reducers/filterReducer";

export type FilterValuesType = "all" | "active" | "completed";

function App() {
  let [tasks, dispatchTask] = useReducer(tasksReducer,[
    { id: v1(), title: "HTML&CSS", isDone: true },
    { id: v1(), title: "JS", isDone: true },
    { id: v1(), title: "ReactJS", isDone: false },
    { id: v1(), title: "Rest API", isDone: false },
    { id: v1(), title: "GraphQL", isDone: false },
  ]);
  let [filter, dispatchFilter] = useReducer(filterReducer,"all");

  function changeFilter(value: FilterValuesType) {
    dispatchFilter(changeFilterAC(value))
  }

  function removeTask(id: string) {
        dispatchTask(removeTaskAC(id))
  };

  function addTask(title: string) {
    dispatchTask(addTaskAC(title))
  };

  function changeStatus(taskId: string, isDone: boolean) {
    dispatchTask(changeStatusAC(taskId, isDone))
  }

  let tasksForTodolist = tasks;

  if (filter === "active") {
    tasksForTodolist = tasks.filter((t) => t.isDone === false);
  }
  if (filter === "completed") {
    tasksForTodolist = tasks.filter((t) => t.isDone === true);
  }



  return (
    <div className="App">
      <Todolist
        title="What to learn"
        tasks={tasksForTodolist}
        removeTask={removeTask}
        changeFilter={changeFilter}
        addTask={addTask}
        changeTaskStatus={changeStatus}
        filter={filter}
      />
    </div>
  );
}

export default App;
function changeStatusType(taskId: string, isDone: boolean): import("./store/reducers/tasksReducer").mainType {
  throw new Error("Function not implemented.");
}

