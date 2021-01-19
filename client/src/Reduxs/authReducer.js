//@ts-check
import {
  SHOW_ALERT,
  HIDE_ALERT,
  IS_LOADING_FALSE,
  IS_LOADING_TRUE,
  IS_AUTH_USER,
  AUTH_TOKEN,
} from "./types";

const initialState = {
  isAuthUser: false,
  isloading: false,
  alert: null,
  token: null
};

export const authReducer = (state = initialState, actoin) => {
  switch (actoin.type) {
    case IS_LOADING_FALSE:
      return { ...state, isloading: false };

    case IS_LOADING_TRUE:
      return { ...state, isloading: true };

    case SHOW_ALERT:
      return { ...state, alert: actoin.payload };

    case HIDE_ALERT:
      return { ...state, alert: null };

    case IS_AUTH_USER:
      return { ...state, isAuthUser: actoin.payload };
    case AUTH_TOKEN:
      return { ...state, token: actoin.payload }
    default: return state;
  }
};
