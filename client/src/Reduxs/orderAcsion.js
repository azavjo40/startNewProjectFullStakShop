//@ts-check
import { clearBasket } from "./basketAcsion"
import { showAlert } from "./generalAcsion"
import { httpFetch } from "./hooks/httpFetch"
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
            const items = { itemsOrder, itemsAddress }
            dispach(httpFetch('/api/order', 'POST', items, null, null, null))
            dispach(clearBasket())
        } catch (e) { dispach(showAlert('Something went wrong try again')) }
    }
}
export function getOrder() {
    return async dispach => {
        try {
            dispach(httpFetch('/api/allorder', 'GET', null, null, null, ALL_ORDER))
        } catch (e) { dispach(showAlert('Something went wrong try again')) }
    }

}
export const removeOrder = (id) => {
    return async dispach => {
        try {
            dispach(httpFetch(`/api/delete/${id}`, 'DELETE', null, null, null, null))
        } catch (e) { dispach(showAlert('Something went wrong try again')) }
    }
} 