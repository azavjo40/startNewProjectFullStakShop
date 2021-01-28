import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import OrderCart from '../Components/OrderCart'
import { getOrder } from '../Reduxs/orderAcsion'
import '../StyleCss/order/order.css'
function Order() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getOrder())
    }, [dispatch])
    return (
        <div className="contOrder">
            <OrderCart />
        </div>
    )
}
export default Order