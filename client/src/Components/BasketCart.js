import React from 'react'
import { useSelector } from 'react-redux'
// import { deleteMenu } from '../Reduxs/menuAcsion'
// import { useHistory } from 'react-router-dom'
import '../StyleCss/cart/cart.css'
const BasketCart = (props) => {
    const menu = useSelector(state => state.basket.form)
    const removeBasket = (pro) => {
        menu.filter(r => r !== pro)
    }
    return (
        <>
            { props && <div className="contCart" key={props.i}>
                <img src={props.imageSrc} className="imgCart" alt={props.name} />
                <div className="cartRidius"><p>20-30-M</p></div>
                <h3>{props.name}</h3>
                <p>SOS: {props.sos}</p>
                <p>COST: {props.cost}-PLN
                <button onClick={(pro) => removeBasket(pro)} >Delete</button></p>
            </div>}
        </>
    )
}
export default BasketCart 