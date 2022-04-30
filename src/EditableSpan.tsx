import React, {useState} from 'react';

type PropsType = {
    title: string
}

export const EditableSpan = (props: PropsType) => {
    let [editMode, setEditMode] = useState<boolean>(false);

    const onDoubleClickHandler = () => {
        setEditMode(true)
    };

    const onBlurHandler = () => {
        setEditMode(false)
    }


    return (
        editMode ?
            <input onBlur={onBlurHandler} autoFocus /> :
            <span onDoubleClick={onDoubleClickHandler}>{props.title}</span>
    );
};

