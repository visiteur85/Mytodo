import React, {useState} from 'react';

type PropsType = {
    callback:(title:string)=>void
}

export const AddItemForm = (props:PropsType) => {

    const [title, setTitle] = useState("");
    const [error, setError] = useState<string | null>(null)

    const addTaskHandler = () => {
        if (title.trim() !== "") {
      props.callback(title)
        setTitle("")}
        else {setError("Введите текст")}
    };
    const onChangeTitleHandler = (e:any) => {
      setTitle(e.currentTarget.value)
    };
    const onKeyPreessHandler = (e:any) => {
        setError(null)
        if (e.key === "Enter") {
            addTaskHandler();
        }


    }
    return (
        <div>
            <input onKeyPress={onKeyPreessHandler} value={title} onChange={onChangeTitleHandler}/>
            <button onClick={addTaskHandler}>+</button>
            {error && <div>{error}</div>}
        </div>
    );
};

