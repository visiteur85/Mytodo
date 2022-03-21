import { v1 } from "uuid";
import { FilterValuesType } from "../App";
import { TaskType } from "../Todolist";


let initialState: FilterValuesType =  "all";

export const filterReducer = (state = initialState, action: mainType) => {
switch(action.type) {
    case "CHANGE-FILTER": {
        return action.payload.value
    }
    default: return state
}
};



type mainType = ReturnType<typeof changeFilterAC>;
export const changeFilterAC = (value:FilterValuesType) => {
    return {
        type: "CHANGE-FILTER",
        payload: {
            value:value

        }
    } as const
}

