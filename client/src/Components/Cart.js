import React, { useState } from 'react'
import '../StyleCss/cart/cart.css'
import kebab from '../images/kebab.jpg'
import ModelChoice from './ModelChoice'
const Cart = () => {
    const [show, setShow] = useState(false)
    return (
        <>
            {show && <ModelChoice setShow={setShow} show={show} />}
            <div className="contCart">
                <img src={kebab} className="imgCart" alt={kebab} />
                <div className="cartRidius"><p>20-30-M</p></div>
                <h3>Kebab Na Gruby</h3>
                <p> a kahksh jashfkjs </p>
                <p>Cost: 12  <button onClick={() => setShow(!show)}> +</button></p>
            </div>
        </>
    )
}
export default Cart 