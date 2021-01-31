//@ts-check
import { ADD_BASKET } from "./types"

const initialState = {
    items: []
}

export const basketReducer = (state = initialState, actoin) => {
    switch (actoin.type) {
        case ADD_BASKET:
            return { ...state, items: [...state.items, actoin.payload] }
        case DELETE_BASKET:
            return { ...state, items: deleteItem(actoin.payload) }
        default: return state
    }
}

function deleteItem(id) {
    return items.filter(item => item._id !== id)
}