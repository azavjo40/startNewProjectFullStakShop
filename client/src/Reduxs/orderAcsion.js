//@ts-check
import { clearBasket } from "./basketAcsion"
import { hideLoader, showAlert, showLoader } from "./generalAcsion"
import { ALL_ORDER } from "./types"

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
            dispach(clearBasket())
        } catch (e) { dispach(showAlert('Something went wrong try again')) }
    }
}
export function getOrder(paramId) {
    return async dispach => {
        try {
            const requestOptions = {
                method: 'GET'
            }
            dispach(showLoader())
            const res = await fetch('/api/allorder', requestOptions)
            const data = await res.json()
            const items = data.map(items => { return items.order })
            dispach({ type: ALL_ORDER, payload: items })
            dispach(hideLoader())
        } catch (e) { dispach(showAlert('Something went wrong try again')) }
    }

}