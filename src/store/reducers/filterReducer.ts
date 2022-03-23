import { v1 } from "uuid";
import { TaskType } from "../../Todolist";
import {FilterValuesType} from "../../App";

let initialState:FilterValuesType = "all"

export const filterReducer = (state = initialState, action: changeFiltertype) => {
    switch(action.type) {
        case "CHANGE-FILTER":{
            return action.payload.value
        }
        default: return state
    }
};


type changeFiltertype = ReturnType<typeof changeFilterAC>;
export const changeFilterAC = (value: FilterValuesType) => {
    return {
        type: "CHANGE-FILTER",
        payload: {
            value:value

        }
    } as const
}

