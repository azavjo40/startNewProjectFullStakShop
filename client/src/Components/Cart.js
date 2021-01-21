import React, { useState } from 'react'
import '../StyleCss/cart/cart.css'
import ModelChoice from './ModelChoice'
const Cart = (props) => {
    const [show, setShow] = useState(false)
    return (
        <>
            {show && <ModelChoice setShow={setShow} show={show} />}
            <div className="contCart">
                <img src={props.imageSrc} className="imgCart" alt={props.imageSrc} />
                <div className="cartRidius"><p>20-30-M</p></div>
                <h3>{props.name}</h3>
                <p> {props.p}-PLN</p>
                <p>{props.cost}<button onClick={() => setShow(!show)}> +</button></p>
            </div>
        </>
    )
}
export default Cart 