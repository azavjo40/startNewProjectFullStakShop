//@ts-check
import { MENU_GET_ALL } from "./types";

const initialState = {
  allMenu: "",
};
export const menuReducer = (state = initialState, actoin) => {
  switch (actoin.type) {
    case MENU_GET_ALL:
      return { ...state, allMenu: actoin.payload };
    default:
      return state;
  }
};
