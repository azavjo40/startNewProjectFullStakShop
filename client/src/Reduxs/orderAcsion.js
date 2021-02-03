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
export function postOrder(itaemsOrder, itemsAddress) {
    return async dispach => {
        try {
            const raw = JSON.stringify({ itaemsOrder, itemsAddress })
            console.log(raw)
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
export function getOrder() {
    return async dispach => {
        try {
            const requestOptions = {
                method: 'GET'
            }
            dispach(showLoader())
            const res = await fetch('/api/allorder', requestOptions)
            const data = await res.json()
            console.log(JSON.stringify(JSON.stringify(data)))
            let items = ''
            data.map(item => { return items = item.order })
            console.log(JSON.stringify(items))
            dispach({ type: ALL_ORDER, payload: items })
            dispach(hideLoader())
        } catch (e) { dispach(showAlert('Something went wrong try again')) }
    }

}