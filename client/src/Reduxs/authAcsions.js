//@ts-check
import { LOCAL_STORAGE } from "../constant/localstorage";
import { showAlert } from "./generalAcsion";
import { httpFetch } from "./hooks/httpFetch";
import { IS_AUTH_USER, AUTH_TOKEN, AUTH_STORAGE, AUTH_ADMIN } from "./types";

const storage = JSON.parse(localStorage.getItem(LOCAL_STORAGE.STORAGE_NAME));

export const authUser = (isAuthUser) => {
  return { type: IS_AUTH_USER, payload: isAuthUser };
};

export const authToken = (token) => {
  return { type: AUTH_TOKEN, payload: token };
};

export function autoLogin(data) {
  return async (dispach) => {
    try {
      if (data.token) {
        localStorage.setItem(
          LOCAL_STORAGE.STORAGE_NAME,
          JSON.stringify({ token: data.token, userId: data.userId })
        );
      }
      const storage = JSON.parse(
        localStorage.getItem(LOCAL_STORAGE.STORAGE_NAME)
      );
      if (storage.token) {
        dispach(authUser(true));
        dispach(authToken(storage.token));
      }
    } catch (e) {
      dispach(showAlert("Error something went wrong to Login"));
    }
  };
}

export function authRegister(form) {
  return async (dispach) => {
    try {
      await dispach(
        httpFetch("/api/auth/register", "POST", form, null, null, AUTH_STORAGE)
      );
      const storage = JSON.parse(
        localStorage.getItem(LOCAL_STORAGE.STORAGE_NAME)
      );
      if (storage.token) {
        dispach(authUser(true));
      } else {
        dispach(authUser(false));
      }
    } catch (e) {}
  };
}

export function authLogin(raw) {
  return async (dispach) => {
    try {
      await dispach(
        httpFetch("/api/auth/login", "POST", raw, null, null, AUTH_STORAGE)
      );
      const storage = JSON.parse(
        localStorage.getItem(LOCAL_STORAGE.STORAGE_NAME)
      );
      if (storage.token) {
        dispach(authUser(true));
      } else {
        dispach(authUser(false));
      }
    } catch (e) {}
  };
}

let setTime;
export const refreshToken = () => {
  return (dispach) => {
    try {
      setTime = setTimeout(() => {
        dispach(
          httpFetch(
            "/api/auth/refresh/token",
            "POST",
            storage,
            null,
            storage.token,
            AUTH_STORAGE
          )
        );
      }, 200000);
    } catch (e) {}
  };
};

export const logout = () => {
  return (dispach) => {
    localStorage.removeItem(LOCAL_STORAGE.STORAGE_NAME);
    dispach(authUser(false));
    clearTimeout(setTime);
  };
};

export const authAdmin = (form) => {
  return (dispach) => {
    dispach({ type: AUTH_ADMIN, payload: form });
  };
};
