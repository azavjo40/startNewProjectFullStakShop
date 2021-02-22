//@ts-check
import { ALL_CONTACT } from "./types";
const initialState = {
  items: [],
};
export const contsactReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_CONTACT:
      return { ...state, items: action.payload };
    default:
      return state;
  }
};
