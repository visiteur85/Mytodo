export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
    status: 'loading' as RequestStatusType,
    error: null as null | string
}

export type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: APPActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':{
            return {...state, status: action.status}
        }
        case "App/SET-ERROR":{
            return {...state, error: action.error}
        }
        default:
            return state
    }
}

export type APPActionsType = setAppStatusType | setAppErrorType;

export type setAppStatusType = ReturnType<typeof setAppStatusAC>
export const setAppStatusAC = (status: RequestStatusType) => {
    return {
        type: "APP/SET-STATUS",
        status
    } as const
}



export type setAppErrorType = ReturnType<typeof setAppErrorAC>
export const setAppErrorAC = (error: string | null) => ({type: "App/SET-ERROR", error} as const)



