//@ts-check
import { ADD_BASKET } from "./types"
const initialState = {
    form: {}
}

export const basketReducer = (state = initialState, actoin) => {
    switch (actoin.type) {
        case ADD_BASKET:
            return { ...state, form: actoin.payload }
        default: return state
    }
}