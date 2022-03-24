import React, {
  ChangeEvent,
  ChangeEventHandler,
  DetailedHTMLProps,
  InputHTMLAttributes,
  useState,
} from "react";
import { useSelector } from "react-redux";
import { buttonType } from "./App";
import { rootReducerType } from "./store/reducers/store";

export type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
};

type PropsType = {
  title: string;
  
  removeTask: (id: string) => void;
  changeFilter: (value: buttonType) => void;
  addTask: (title: string) => void;
  changeStatus:(id: string, newIsdone: boolean)=>void
};

export function Todolist(props: PropsType) {
  let [title, setTitle] = useState<string>("");
  let [error, Seterror] = useState<string | null>(null);

  let tasks = useSelector<rootReducerType, Array<TaskType>>((state)=>state.task)
    let filter = useSelector<rootReducerType, buttonType>((state)=>state.filter)

    let filteredTasks = tasks;
    if (filter === "active") {
      filteredTasks = tasks.filter((f) => f.isDone === false);
    }
  
    if (filter === "completed") {
      filteredTasks = tasks.filter((f) => f.isDone === true);
    }

  const changeFilterHandler = (value: buttonType) => {
    if (value === "all") {
      props.changeFilter("all");
    } else if (value === "active") {
      props.changeFilter("active");
    } else if (value === "completed") {
      props.changeFilter("completed");
    }
  };

  const addTaskHandler = () => {
      if (title.trim() !== ""){
    props.addTask(title);
    setTitle("");}
    else {Seterror("Ddtlbnt ntrcn")}
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      Seterror(null)
    setTitle(e.currentTarget.value);
  };
  const onKeyPressHandler = (
    e: DetailedHTMLProps<
      InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >
  ) => {
    if (e.key === "Enter") {
      props.addTask(title);
      setTitle("")
    }
    
  };

  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input
          value={title}
          onChange={onChangeHandler}
          onKeyPress={onKeyPressHandler}
        />
        <button onClick={addTaskHandler}>+</button>
        { error && <div>{error}</div>}
      </div>
      <ul>
        {filteredTasks.map((m) => {
          const removeTaskHandler = (id: string) => {
            props.removeTask(id);
          };

          const changeStatusHandler = (e:ChangeEvent<HTMLInputElement>)=> {
              let newIsDone = e.currentTarget.checked
              props.changeStatus(m.id, newIsDone)
          }

          return (
            <li>
              <input type="checkbox" onChange={changeStatusHandler} checked={m.isDone} />{" "}
              <span>{m.title}</span>
              <button onClick={() => removeTaskHandler(m.id)}>x</button>
            </li>
          );
        })}
      </ul>
      <div>
        <button onClick={() => changeFilterHandler("all")}>All</button>
        <button onClick={() => changeFilterHandler("active")}>Active</button>
        <button onClick={() => changeFilterHandler("completed")}>
          Completed
        </button>
      </div>
    </div>
  );
}
