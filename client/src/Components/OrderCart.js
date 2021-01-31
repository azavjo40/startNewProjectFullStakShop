import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import '../StyleCss/order/order.css'
function OrderCart() {
    const [menuOrder, setMenuOrder] = useState([])
    const order = useSelector(state => state.order.allOrder)
    useEffect(() => {
        order && order.map((r) => setMenuOrder(r.menu))
    }, [order])
    console.log(menuOrder)
    return (
        <div className="orderCart">
            {menuOrder.map(ord => {
                return (
                    <div>
                        <p>Name: {ord.nameClient}</p>
                        <p>Phone: {ord.phone}</p>
                        <p>Address: {ord.address}</p>
                        <p>Message: {ord.message}</p>
                        <p>total-Cost: {ord.totalCost}</p>
                    </div>
                )
            })}
        </div>
    )
}
export default OrderCart