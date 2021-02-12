//@ts-check
import { hideLoader, showAlert, showLoader } from "./generalAcsion"
import { httpFetch } from "./hooks/httpFetch";
import { MENU_GET_ALL } from "./types";


export function deleteMenu(form) {
    return async dispach => {
        const formPars = { imageSrc: form.imageSrc, _id: form._id }
        try {
            // const requestOptions = {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(formPars)
            // }
            if (form) {
                // dispach(showLoader())
                // const res = await fetch('/api/delete', requestOptions)
                // const data = await res.json()
                // dispach(showAlert(data.message))
                // dispach(hideLoader())
                dispach(httpFetch('/api/delete', 'POST', formPars, null, null, null))
                dispach(showAlert('Menu Deleted'))
            }
        } catch (e) { dispach(showAlert('Something went wrong try again')) }
    }
}

export function allmenu() {
    return async dispach => {
        try {
            dispach(httpFetch('/api/allmenu', 'GET', null, null, null, MENU_GET_ALL))
        } catch (e) { dispach(showAlert('Something went wrong try again')) }
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
            dispach(httpFetch('/api/create', null, null, formdata, null, null))
        } catch (e) { dispach(showAlert('Something went wrong try again')) }
    }
}
