//@ts-check
import { showAlert } from "./generalAcsion";
import { httpFetch } from "./hooks/httpFetch";
import { MENU_GET_ALL } from "./types";

export function deleteMenu(form) {
  return async (dispach) => {
    const formPars = { imageSrc: form.imageSrc, _id: form._id };
    if (form) {
      dispach(httpFetch("/api/delete", "POST", formPars));
      dispach(showAlert("Menu Deleted"));
    }
  };
}

export function allmenu() {
  return async (dispach) => {
    dispach(httpFetch("/api/allmenu", "GET", null, null, null, MENU_GET_ALL));
  };
}

export function createAcsion(form, file) {
  return async (dispach) => {
    const formdata = new FormData();
    formdata.append("name", form.name);
    formdata.append("cost", form.cost);
    formdata.append("p", form.p);
    formdata.append("checked", form.checked);
    formdata.append("file", file);
    dispach(httpFetch("/api/create", "POST", null, formdata));
  };
}
