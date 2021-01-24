import React from 'react'
import { useSelector } from 'react-redux'
import BasketCart from '../Components/BasketCart'
function Basket() {
    const menu = useSelector(state => state.basket.form)
    console.log(menu)
    if (menu) {
        return (
            <div className="contMenu" >
                {menu.p}
            </div>
        )
    } else {
        return (
            <div className="contMenu" >
                <h1>There is no basket yet</h1>
            </div>
        )
    }
}
export default Basket