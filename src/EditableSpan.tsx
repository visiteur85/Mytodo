import React, {useCallback, useState} from 'react';

type PropsType = {
    title: string
}

export const EditableSpan = React.memo ((props: PropsType) => {
    console.log("Edit")
    let [editMode, setEditMode] = useState<boolean>(false);
    let [title, setTitle] = useState(props.title)

    const onDoubleClickHandler = () => {
        setEditMode(true)
    };

    const onBlurHandler = () => {
        setEditMode(false)
    }
    const onChangeTitleHandler =  (e:any) => {
        setTitle(e.currentTarget.value)
    };

    return (
        editMode ?
            <input value={title} onBlur={onBlurHandler} autoFocus
                   onChange={onChangeTitleHandler}
            /> :
            <span onDoubleClick={onDoubleClickHandler}>{props.title}</span>
    );
});

