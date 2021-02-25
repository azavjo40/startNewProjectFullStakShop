//@ts-check
import { clearBasket } from "../baskets/basketAcsions";
import { httpFetch } from "../hooks/httpFetch";
import { ALL_ORDER } from "./types";
import { LOCAL_STORAGE } from "../../constant/localstorage";

const storage = JSON.parse(localStorage.getItem(LOCAL_STORAGE.STORAGE_NAME));

export const autoOrderPost = (itemsOrder, itemsAddress) => {
  return (dispach) => {
    const data = itemsOrder.map((item) => ({
      name: item.name,
      p: item.p,
      cost: item.cost,
      sos: item.sos,
    }));

    if (data[0]) {
      dispach(postOrder(data, itemsAddress));
    }
  };
};
export function postOrder(itemsOrder, itemsAddress) {
  return async (dispach) => {
    const items = { itemsOrder, itemsAddress };
    await dispach(httpFetch("/api/order", "POST", items));
    dispach(clearBasket());
  };
}
export function getOrder() {
  const storage = JSON.parse(localStorage.getItem(LOCAL_STORAGE.STORAGE_NAME));
  return async (dispach) => {
    await dispach(
      httpFetch("/api/allorder", "GET", null, null, storage.token, ALL_ORDER)
    );
  };
}
export const removeOrder = (id) => {
  return async (dispach) => {
    await dispach(
      httpFetch(`/api/delete/${id}`, "DELETE", null, null, storage.token, null)
    );
  };
};
