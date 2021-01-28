import React from 'react'
import { useSelector } from 'react-redux'
import '../StyleCss/order/order.css'
function OrderCart() {
    const order = useSelector(state => state.order.allOrder)
    console.log(order)
    return (
        <div className="orderCart">
            {order.map(ord => {
                return (
                    <ul key={ord._id}>
                        <ol>{ord.form.name}</ol>
                    </ul>
                )
            })}
        </div>
    )
}
export default OrderCart