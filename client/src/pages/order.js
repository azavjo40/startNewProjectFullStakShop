import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import OrderCart from '../Components/OrderCart'
import { getOrder } from '../Reduxs/orderAcsion'
import '../StyleCss/order/order.css'
function Order() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getOrder())
    }, [dispatch])
    const order = useSelector(state => state.order.allOrder)

    return (
        <div className="contOrder">

            {order && order.map((item, i) => {
                return (
                    <OrderCart 
                        id={item._id}
                        address={item.itemsAddress} 
                        order={item.itemsOrder} 
                    />
                )
            })}

        </div>
    )
}
export default Order