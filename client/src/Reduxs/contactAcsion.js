//@ts-check
import { showAlert } from "./generalAcsion"
import { httpFetch } from "./hooks/httpFetch"
import { ALL_CONTACT } from "./types"
export const postContact = (form) => {
    return async dispach => {
        try {
            dispach(httpFetch('/api/contact', 'POST', form, null, null, null))
        } catch (e) { dispach(showAlert('Something went wrong try again')) }
    }
}

export const getContacts = () => {
    return async dispach => {
        try {
            dispach(httpFetch('/api/mycontacts', 'GET', null, null, null, ALL_CONTACT))
        } catch (e) { dispach(showAlert('Something went wrong try again')) }
    }
}

export const removeContact = (id) => {
    return async dispach => {
        try {
            dispach(httpFetch(`/api/contact/delete/${id}`, 'DELETE', null, null, null, null))
        } catch (e) { dispach(showAlert('Something went wrong try again')) }
    }
}