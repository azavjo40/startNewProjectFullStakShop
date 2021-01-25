import React from 'react'
import { useSelector } from 'react-redux'
import BasketCart from '../Components/BasketCart'
function Basket() {
    const menu = useSelector(state => state.basket.form)
    console.log(menu)
    return (
        <div className="contMenu" >
            {menu && menu && menu.map((pro, i) => {
                return (
                    <BasketCart key={i} imageSrc={pro.imageSrc}
                        name={pro.name} cost={pro.cost} sos={pro.sos} i={i}
                    />
                )
            })}
        </div>
    )
}
export default Basket