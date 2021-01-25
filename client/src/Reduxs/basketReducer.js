import { ADD_BASKET } from "./types"

//@ts-check
const initialState = {
    form: []
}


export const basketReducer = (state = initialState, actoin) => {
    switch (actoin.type) {
        case ADD_BASKET:
            return { ...state, form: actoin.payload }
        default: return state
    }
}