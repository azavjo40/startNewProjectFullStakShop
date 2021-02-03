import React from 'react'
import { useSelector } from 'react-redux'
import '../StyleCss/order/order.css'
function OrderCart() {
    const order = useSelector(state => state.order.allOrder)
    console.log(order)
    // console.log(order && order.map(r => { return r.formAddress }))
    return (
        <div className="orderCart">
            {order && order.map((item, i) => {
                return (
                    <div key={i}>
                        <p>Kebab: {item.name}</p>
                        <p>Cost: {item.cost}</p>
                        <p>paragraph: {item.p}</p>
                    </div>
                )
            })}
        </div>
    )
}
export default OrderCart