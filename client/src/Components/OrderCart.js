import React from 'react'
import '../StyleCss/order/order.css'
function OrderCart({ address, order }) {
    return (
        <div key={address.nameClient} className="orderCart">
            <ul>
                <ol>NEW ORDERS</ol>
                <ol>CLIENT: {address.nameClient}</ol>
                <ol>ADDRESS: {address.address}</ol>
                <ol>MESSAGE: {address.message}</ol>
                <ol>TOTAL-COST: = {address.totalCost} - PLN</ol>
            </ul>
            {order && order.map((item, i) => {
                return (
                    <ul key={i}>
                        <ol>ORDERS: {i}</ol>
                        <ol >KEBAB: {item.name}</ol>
                        <ol >PARAGRAPH: {item.p}</ol>
                        <ol >COST: = {item.cost} - PLN</ol>
                        <ol >SOS: {item.sos}</ol>
                    </ul>
                )
            })}
        </div>
    )
}
export default OrderCart