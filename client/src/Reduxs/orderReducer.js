//@ts-check
import { ALL_ORDER } from "./types"
const initialState = {
    allOrder: ''
}
export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case ALL_ORDER:
            return { ...state, allOrder: action.payload }
        default: return state
    }
}