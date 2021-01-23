//@ts-check
import {
  IS_AUTH_USER,
  AUTH_TOKEN,
} from "./types";

const initialState = {
  isAuthUser: false,
  token: null
};

export const authReducer = (state = initialState, actoin) => {
  switch (actoin.type) {
    case IS_AUTH_USER:
      return { ...state, isAuthUser: actoin.payload };
    case AUTH_TOKEN:
      return { ...state, token: actoin.payload }
    default: return state;
  }
};
