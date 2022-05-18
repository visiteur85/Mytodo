import React, {useState} from 'react';

type PropsType = {
    title: string
    changeTitleHandler:(title:string)=>void
}

export const EditableSpan = (props: PropsType) => {
    let [editMode, setEditMode] = useState<boolean>(false);
    let [title, setTitle] = useState(props.title)

    const onDoubleClickHandler = () => {
        setEditMode(true)
    };

    const onBlurHandler = () => {
        setEditMode(false);
        props.changeTitleHandler(title)


    }
    const onChangeTitleHandlerr = (e:any) => {
        setTitle(e.currentTarget.value)
    };


    return (
        editMode ?
            <input value={title} onBlur={onBlurHandler} autoFocus onChange={onChangeTitleHandlerr}  /> :
            <span onDoubleClick={onDoubleClickHandler}>{props.title}</span>
    );
};

