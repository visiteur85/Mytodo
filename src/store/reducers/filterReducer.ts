import { buttonType } from "../../App";

let initialState:  buttonType = "all"

export const filterReducer = (state = initialState, action: changeFilterType )=> {
switch (action.type) {
    case "CHANGE-FILTER": {
        return action.payload.value
    }
    default: return state
}
};

type changeFilterType = ReturnType<typeof changeFilterAC>;
export const changeFilterAC = (value: buttonType) => {
    return {
        type: "CHANGE-FILTER",
        payload: {
            value:value
        }
    } as const

}



