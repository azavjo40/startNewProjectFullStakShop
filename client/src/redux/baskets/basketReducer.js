//@ts-check
import { ADD_BASKET, CLEAR_BASKET, DELETE_BASKET } from "./types";

const initialState = {
  items: [],
};
export const basketReducer = (state = initialState, actoin) => {
  switch (actoin.type) {
    case ADD_BASKET:
      return { ...state, items: [...state.items, actoin.payload] };
    case DELETE_BASKET:
      return { ...state, items: actoin.payload };
    case CLEAR_BASKET:
      return { ...state, items: actoin.payload };
    default:
      return state;
  }
};
