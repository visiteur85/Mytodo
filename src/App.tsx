import React, { useReducer, useState } from "react";
import "./App.css";
import {TaskType, Todolist} from "./Todolist";
import { v1 } from "uuid"
import { addTaskAC, changeStatusAC, removeTaskAC, tasksReducer } from "./store/reducers/tasksReducer";
import {changeFilterAC, filterReducer} from "./store/reducers/filterReducer";
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "./store/store";

export type FilterValuesType = "all" | "active" | "completed";

function App() {


  let dispatch = useDispatch();





  function changeFilter(value: FilterValuesType) {
    dispatch(changeFilterAC(value))
  }

  function removeTask(id: string) {
        dispatch(removeTaskAC(id))
  };

  function addTask(title: string) {
    // dispatchTask(addTaskAC(title))
    dispatch(addTaskAC(title))
  };

  function changeStatus(taskId: string, isDone: boolean) {
    dispatch(changeStatusAC(taskId, isDone))
  }





  return (
    <div className="App">
      <Todolist
        title="What to learn"
        // tasks={tasksForTodolist}
        removeTask={removeTask}
        changeFilter={changeFilter}
        addTask={addTask}
        changeTaskStatus={changeStatus}

      />
    </div>
  );
}

export default App;
function changeStatusType(taskId: string, isDone: boolean): import("./store/reducers/tasksReducer").mainType {
  throw new Error("Function not implemented.");
}

