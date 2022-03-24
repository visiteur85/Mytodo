import React, { useReducer } from "react";
import "./App.css";
import { TaskType, Todolist } from "./Todolist";
import { v1 } from "uuid";
import { addTaskAC, changeStatusAC, removeTaskAC, taskReducer } from "./store/reducers/taskReducer";
import { changeFilterAC, filterReducer } from "./store/reducers/filterReducer";
import { useDispatch, useSelector } from "react-redux";
import { rootReducerType } from "./store/reducers/store";

export type buttonType = "all" | "active" | "completed";



function App() {
 
    let dispatch = useDispatch();
    




  const removeTask = (id: string) => {
    dispatch(removeTaskAC(id));
  };

  const addTask = (title:string)=> {
    dispatch(addTaskAC(title));
  }

  const changeFilter = (value: buttonType) => {
    dispatch(changeFilterAC(value));
  };

  const changeStatus = (id: string, newIsdone: boolean)=> {
    dispatch(changeStatusAC(id, newIsdone ))
  }



  return (
    <div className="App">
      <Todolist
        title="What to learn"
        
        removeTask={removeTask}
        changeFilter={changeFilter}
        addTask={addTask}
        changeStatus={changeStatus}
      />
    </div>
  );
}

export default App;
