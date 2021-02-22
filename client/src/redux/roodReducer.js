//@ts-check
import { combineReducers } from "redux";
import { authReducer } from "./auths/authReducer";
import { basketReducer } from "./baskets/basketReducer";
import { generalReducer } from "./generals/generalReducer";
import { menuReducer } from "./menus/menuReducer";
import { orderReducer } from "./orders/orderReducer";
import { contsactReducer } from "./contacts/contactReducer";

export const roodReducer = combineReducers({
  // тут будить хранилешь
  auth: authReducer,
  menu: menuReducer,
  general: generalReducer,
  basket: basketReducer,
  order: orderReducer,
  contact: contsactReducer,
});
