//@ts-check
import { showAlert } from "./generalAcsion"
export const postContact = (form) => {
    return async dispach => {
        try {
            const options = {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form)
            }
            ////
            const res = await fetch('/api/contact', options)
            const data = await res.json()
            dispach(showAlert(data.message))
        } catch (e) { dispach(showAlert('Something went wrong try again')) }
    }
}