//@ts-check
import { showAlert } from "./generalAcsion";
import { httpFetch } from "./hooks/httpFetch";
import { MENU_GET_ALL } from "./types";
import { LOCAL_STORAGE } from "../constant/localstorage";

const storage = JSON.parse(localStorage.getItem(LOCAL_STORAGE.STORAGE_NAME));

export function deleteMenu(form) {
  return async (dispach) => {
    const formPars = { imageSrc: form.imageSrc, _id: form._id };
    if (form) {
      await dispach(
        httpFetch("/api/delete", "POST", formPars, null, storage.token)
      );
      dispach(showAlert("You Deleted The Menu "));
    }
  };
}

export function allmenu() {
  return async (dispach) => {
    await dispach(
      httpFetch("/api/allmenu", "GET", null, null, null, MENU_GET_ALL)
    );
  };
}

export function createAcsion(form, file) {
  return async (dispach) => {
    const formdata = new FormData();
    formdata.append("name", form.name);
    formdata.append("cost", form.cost);
    formdata.append("p", form.p);
    formdata.append("ifKebab", form.ifKebab);
    formdata.append("file", file);
    await dispach(
      httpFetch("/api/create", "POST", null, formdata, storage.token)
    );
  };
}
