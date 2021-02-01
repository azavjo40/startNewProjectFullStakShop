import React from 'react'
import { useSelector } from 'react-redux'
import '../StyleCss/order/order.css'
function OrderCart() {
    const order = useSelector(state => state.order.allOrder)
    console.log(order)
    return (
        <div className="orderCart">
            {/* {order && order.map((ord, i) => {
                // console.log(JSON.stringify('oo', ord[0]))

                return (
                    <div key={i}>
                        <p>Name: {ord.nameClient}</p>
                        <p>Phone: {ord.phone}</p>
                        <p>Address: {ord.address}</p>
                        <p>Message: {ord.message}</p>
                        <p>total-Cost: {ord.totalCost}</p>
                    </div>
                )
            })} */}
        </div>
    )
}
export default OrderCart