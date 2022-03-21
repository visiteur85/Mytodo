import React, { useReducer, useState } from "react";
import "./App.css";
import { TaskType, Todolist } from "./Todolist";
import { v1 } from "uuid"
import { addTaskAC, changeStatusAC, removeTaskAC, tasksReducer } from "./store/tasksReducer";
import { changeFilterAC, filterReducer } from "./store/filterReducer";
import { useDispatch, useSelector } from "react-redux";
import { rootReducerType } from "./store/store";

export type FilterValuesType = "all" | "active" | "completed";

function App() {

  // let [tasks, dispatchTask] = useReducer(tasksReducer,[
  //   { id: v1(), title: "HTML&CSS", isDone: true },
  //   { id: v1(), title: "JS", isDone: true },
  //   { id: v1(), title: "ReactJS", isDone: false },
  //   { id: v1(), title: "Rest API", isDone: false },
  //   { id: v1(), title: "GraphQL", isDone: false },
  // ]);

  let dispatch = useDispatch();


  // let [filter, dispatchFilter] = useReducer(filterReducer,"all");

  function removeTask(id: string) {
        // dispatchTask(removeTaskAC(id))
        dispatch(removeTaskAC(id))
  };

  function addTask(title: string) {
    // dispatchTask(addTaskAC(title))
    dispatch(addTaskAC(title))
  };

  function changeStatus(taskId: string, isDone: boolean) {
    // dispatchTask(changeStatusAC(taskId, isDone))
    dispatch(changeStatusAC(taskId, isDone))
  }

  // let tasksForTodolist = tasks;

  // if (filter === "active") {
  //   tasksForTodolist = tasks.filter((t) => t.isDone === false);
  // }
  // if (filter === "completed") {
  //   tasksForTodolist = tasks.filter((t) => t.isDone === true);
  // }



  return (
    <div className="App">
      <Todolist
        title="What to learn"
        // tasks={tasksForTodolist}
        removeTask={removeTask}
       
        addTask={addTask}
        changeTaskStatus={changeStatus}
      
      />
    </div>
  );
}

export default App;
function changeStatusType(taskId: string, isDone: boolean): import("./store/tasksReducer").mainType {
  throw new Error("Function not implemented.");
}

