//@ts-check
import { clearBasket } from "./basketAcsion"
import { hideLoader, showAlert, showLoader } from "./generalAcsion"
import { ALL_ORDER } from "./types"

export const autoOrderPost = (itemsOrder, itemsAddress) => {
    return dispach => {
        const data = itemsOrder.map(item => {
            const { name, p, cost, sos } = item
            const items = {
                name: name,
                p: p,
                cost: cost,
                sos: sos
            }
            return items
        })
        if (data[0]) {
            dispach(postOrder(data, itemsAddress))
        }
    }

}
export function postOrder(itemsOrder, itemsAddress) {
    return async dispach => {
        try {
            const items = JSON.stringify({ itemsOrder, itemsAddress })
            const requestOptions = {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: items
            }
            const res = await fetch('/api/order', requestOptions)
            const data = await res.json()
            dispach(showAlert(data.message))
            dispach(clearBasket())
        } catch (e) { dispach(showAlert('Something went wrong try again')) }
    }
}
export function getOrder() {
    return async dispach => {
        try {
            const requestOptions = {
                method: 'GET'
            }
            dispach(showLoader())
            const res = await fetch('/api/allorder', requestOptions)
            const data = await res.json()
            dispach({ type: ALL_ORDER, payload: data })
            dispach(hideLoader())
        } catch (e) { dispach(showAlert('Something went wrong try again')) }
    }

}
export const removeOrder = (id) => {
    return async dispach => {
        try {
            const options = { method: 'DELETE' }
            const res = await fetch(`/api/delete/${id}`, options)
            const data = await res.json()
            dispach(showAlert(data.message))
        } catch (e) {
            { dispach(showAlert('Something went wrong try again')) }
        }
    }
} 