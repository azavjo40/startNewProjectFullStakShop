//@ts-check
import { ADD_BASKET, CLEAR_BASKET, DELETE_BASKET } from "./types";

export const clearBasket = () => ({ type: CLEAR_BASKET, payload: [] });

export function toBasket(item) {
  return (dispach) => {
    dispach({ type: ADD_BASKET, payload: item });
  };
}
export function deleteItem(deleteBasket) {
  return (dispach) => {
    dispach({ type: DELETE_BASKET, payload: deleteBasket });
  };
}
