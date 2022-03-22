import { v1 } from "uuid";
import { TaskType } from "../../Todolist";
import {FilterValuesType} from "../../App";

export const filterReducer = (state: FilterValuesType, action: changeFiltertype) => {
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

