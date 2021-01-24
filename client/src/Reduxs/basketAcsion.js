//@ts-check

import { ADD_BASKET } from "./types"

export function toBasket(form) {
    return dispach => {
        dispach({
            type: ADD_BASKET,
            payload: form
        })
    }
}