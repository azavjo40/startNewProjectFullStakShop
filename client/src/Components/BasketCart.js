import React from 'react'
// import { useDispatch } from 'react-redux'
// import { deleteMenu } from '../Reduxs/menuAcsion'
// import { useHistory } from 'react-router-dom'
import '../StyleCss/cart/cart.css'
const BasketCart = (props) => {
    return (
        <>
            { props && <div className="contCart">
                {/* <img src={props.imageSrc} className="imgCart" alt={props.name} /> */}
                <div className="cartRidius"><p>20-30-M</p></div>
                <h3>{props.name}</h3>
                <p> {props.p}</p>
                <p>{props.cost}-PLN
                <button >Delete</button></p>
            </div>}
        </>
    )
}
export default BasketCart 