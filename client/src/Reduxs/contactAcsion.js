//@ts-check
import { showAlert } from "./generalAcsion"
import { ALL_CONTACT } from "./types"
export const postContact = (form) => {
    return async dispach => {
        try {
            const options = {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form)
            }
            const res = await fetch('/api/contact', options)
            const data = await res.json()
            dispach(showAlert(data.message))
        } catch (e) { dispach(showAlert('Something went wrong try again')) }
    }
}

export const getContacts = () => {
    return async dispach => {
        const requestOptions = {
            method: "GET"
        }
        try {
            const res = await fetch('/api/mycontacts', requestOptions)
            const data = await res.json()
            dispach({ type: ALL_CONTACT, payload: data })
        } catch (e) { dispach(showAlert('Something went wrong try again')) }
    }
}