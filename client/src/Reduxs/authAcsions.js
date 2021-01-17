//@ts-check

import { LOCAL_STORAGE } from "../constant/localstorage";
import {
  HIDE_ALERT,
  IS_LOADING_FALSE,
  IS_LOADING_TRUE,
  IS_AUTH_USER,
  SHOW_ALERT,
} from "./types";

export function showLoader() {
  return {
    type: IS_LOADING_TRUE,
  };
}

export function hideLoader() {
  return {
    type: IS_LOADING_FALSE,
  };
}

export function hideAlert() {
  return {
    type: HIDE_ALERT,
  };
}

export function authUser(isAuthUser) {
  return {
    type: IS_AUTH_USER,
    payload: isAuthUser,
  };
}

export function showAlert(text) {
  return (dispach) => {
    dispach({
      type: SHOW_ALERT,
      payload: text,
    });
    setTimeout(() => {
      dispach(hideAlert());
    }, 3000);
  };
}

export function autoLogin() {
  return async (dispach) => {
    try {
      const storage = JSON.parse(
        localStorage.getItem(LOCAL_STORAGE.STORAGE_NAME)
      );
      if (storage) {
        dispach(authUser(true));
      }
    } catch (e) {
      dispach(showAlert("Error something went wrong to Login"));
    }
  };
}

export function authRegister(raw) {
  return async (dispach) => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(raw),
      };
      dispach(showLoader());
      const date = await fetch("/api/auth/register", requestOptions);
      const response = await date.json();
      dispach(showAlert(response.message));

      if (response.token) {
        localStorage.setItem(
          LOCAL_STORAGE.STORAGE_NAME,
          JSON.stringify({ token: response.token, userId: response.userId })
        );
        dispach(authUser(true));
      }
      dispach(hideLoader());
    } catch (error) {
      dispach(showAlert("Error something went wrong to Rgister"));
    }
  };
}

export function authLogin(raw) {
  return async (dispach) => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(raw),
      };
      dispach(showLoader());
      const date = await fetch("/api/auth/login", requestOptions);
      const json = await date.json();
      localStorage.setItem(
        LOCAL_STORAGE.STORAGE_NAME,
        JSON.stringify({ token: json.token, userId: json.userId })
      );
      dispach(authUser(true));
      dispach(showAlert(json.message));
      dispach(hideLoader());
    } catch (e) {
      dispach(showAlert("Error something went wrong to Login"));
    }
  };
}
