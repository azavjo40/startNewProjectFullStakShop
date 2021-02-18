//@ts-check
import { httpFetch } from "./hooks/httpFetch";
import { ALL_CONTACT } from "./types";
import { LOCAL_STORAGE } from "../constant/localstorage";

const storage = JSON.parse(localStorage.getItem(LOCAL_STORAGE.STORAGE_NAME));

export const postContact = (form) => {
  return async (dispach) => {
    await dispach(httpFetch("/api/contact", "POST", form));
  };
};

export const getContacts = () => {
  return async (dispach) => {
    await dispach(
      httpFetch(
        "/api/mycontacts",
        "GET",
        null,
        null,
        storage.token,
        ALL_CONTACT
      )
    );
  };
};

export const removeContact = (id) => {
  return async (dispach) => {
    await dispach(
      httpFetch(
        `/api/contact/delete/${id}`,
        "DELETE",
        null,
        null,
        storage.token
      )
    );
  };
};
