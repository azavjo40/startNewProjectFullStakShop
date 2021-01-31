//@ts-check
// import { LOCAL_STORAGE } from "../constant/localstorage"
import { ADD_BASKET } from "./types"

export function toBasket(item) {
    return dispach => {
        dispach({
            type: ADD_BASKET,
            payload: item
        })
    }
}