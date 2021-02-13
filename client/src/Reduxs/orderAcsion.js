//@ts-check
import { clearBasket } from "./basketAcsion"
import { httpFetch } from "./hooks/httpFetch"
import { ALL_ORDER } from "./types"

export const autoOrderPost = (itemsOrder, itemsAddress) => {
    return dispach => {
        const data = itemsOrder.map(item => ({
            name: item.name,
            p: item.p,
            cost: item.cost,
            sos: item.sos
        }))
        
        if (data[0]) {
            dispach(postOrder(data, itemsAddress))
        }
    }

}
export function postOrder(itemsOrder, itemsAddress) {
    return async dispach => {
            const items = { itemsOrder, itemsAddress }
            dispach(httpFetch('/api/order', 'POST', items))
            dispach(clearBasket())
    }
}
export function getOrder() {
    return async dispach => {
            dispach(httpFetch('/api/allorder', 'GET', null, null, null, ALL_ORDER))
    }

}
export const removeOrder = (id) => {
    return async dispach => {
            dispach(httpFetch(`/api/delete/${id}`, 'DELETE', null, null, null, null))
    }
} 