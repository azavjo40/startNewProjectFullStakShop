import { hideLoader, showAlert, showLoader } from "./generalAcsion"
import { MENU_GET_ALL} from "./types";


export function deleteMenu(form) {
    return async dispach => {
        try {
            console.log('form', form)
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form)
            }
            dispach(showLoader())
            const res = await fetch('/api/delete', requestOptions)
            const data = await res.json()
            console.log(data)
            dispach(showAlert(data.message))
            dispach(hideLoader())
        } catch (e) {dispach(showAlert('Something went wrong try again'))}
    }
}

export function allmenu() {
    return async dispach => {
        try {
            const requestOptions = {
                method: 'GET'
            }
            dispach(showLoader())
            const res = await fetch('/api/allmenu', requestOptions)
            const data = await res.json()
            dispach({ type: MENU_GET_ALL, payload: data })
            dispach(hideLoader())
        } catch (e) {dispach(showAlert('Something went wrong try again')) }
    }
}

export function createAcsion(form, file) {
    return async dispach => {
        try {
            const formdata = new FormData();
            formdata.append("name", form.name);
            formdata.append("cost", form.cost);
            formdata.append("p", form.p);
            formdata.append("file", file);
            const requestOptions = {
                method: 'POST',
                headers: {
                },
                body: formdata
            }
            dispach(showLoader())
            const res = await fetch("/api/create", requestOptions)
            const data = await res.json()
            dispach(showAlert(data.message))
            dispach(hideLoader())
        } catch (e) { dispach(showAlert('Something went wrong try again')) }
    }
}
