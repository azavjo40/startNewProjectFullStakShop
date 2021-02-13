//@ts-check
import { LOCAL_STORAGE } from "../constant/localstorage"
import { hideLoader, showAlert, showLoader } from "./generalAcsion"
import { IS_AUTH_USER, AUTH_TOKEN,} from "./types"

export const authUser = (isAuthUser) => {
  return {type: IS_AUTH_USER,payload: isAuthUser }
}

export const authToken = (token) => {
  return { type: AUTH_TOKEN,payload: token }
}

export function autoLogin() {
  return async (dispach) => {
    try {
      const storage = JSON.parse(
        localStorage.getItem(LOCAL_STORAGE.STORAGE_NAME)
      )
      if (storage.token) {
        dispach(authUser(true))
        dispach(authToken(storage.token))
      }
    } catch (e) {
      dispach(showAlert("Error something went wrong to Login"))
    }
  };
}

export function authRegister(form) {
  return async dispach => {
    try {
      const requestOptions = {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      };
      dispach(showLoader());
      const date = await fetch("/api/auth/register", requestOptions)
      const response = await date.json()
      dispach(showAlert(response.message))
      if (response.token) {
        localStorage.setItem(
          LOCAL_STORAGE.STORAGE_NAME,
          JSON.stringify({ token: response.token, userId: response.userId })
        )
        dispach(authUser(true))
      }
      dispach(hideLoader())
    } catch (error) {
      dispach(showAlert("Error something went wrong to Rgister"))
    }
  };
}

export function authLogin(raw) {
  return async (dispach) => {
    try {
      const requestOptions = {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(raw),
      };
      dispach(showLoader())
      const date = await fetch("/api/auth/login", requestOptions)
      const json = await date.json()
      dispach(showAlert(json.message))
      if (json.token) {
        localStorage.setItem(
          LOCAL_STORAGE.STORAGE_NAME,
          JSON.stringify({ token: json.token, userId: json.userId })
        );
        dispach(authUser(true))
      }
      dispach(hideLoader())
    } catch (e) {
      dispach(showAlert("Error something went wrong to Login"))
    }
  }
}

export const logout = () => {
  return (dispach) => {
    localStorage.removeItem(LOCAL_STORAGE.STORAGE_NAME)
    dispach(authUser(false))
  }
}