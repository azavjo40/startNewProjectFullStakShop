//@ts-check
import { showAlert } from "./generalAcsion"

export function postOrder(form) {
    return async dispach => {
        try {
            const raw = JSON.stringify(form)
            const requestOptions = {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: raw
            }
            const res = await fetch('/api/order', requestOptions)
            const data = await res.json()
            dispach(showAlert(data.message))
        } catch (e) { dispach(showAlert('Something went wrong try again')) }
    }
}