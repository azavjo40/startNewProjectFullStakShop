import React from 'react'
import '../StyleCss/cart/cart.css'
const BasketCart = (props) => {
    // const removeBasket = (pro) => {
    //     menu.filter(r => r !== pro)
    // }
    return (
        <>
            { props && <div className="contCart" key={props.i}>
                <img src={props.imageSrc} className="imgCart" alt={props.name} />
                <div className="cartRidius"><p>20-30-M</p></div>
                <h3>{props.name}</h3>
                <p>SOS: {props.sos}</p>
                <p>COST: {props.cost}-PLN
                <button style={{ paddingBottom: "0px" }} >Delete</button></p>
            </div>}
        </>
    )
}
export default BasketCart 