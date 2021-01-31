import React from 'react'
import { useDispatch } from 'react-redux'
import '../StyleCss/cart/cart.css'

const BasketCart = (props) => {
    const dispatch = useDispatch()
    return (
        <>
            { props && <div className="contCart" key={props.i}>
                <img src={props.imageSrc} className="imgCart" alt={props.name} />
                <div className="cartRidius"><p>20-30-M</p></div>
                <h3>{props.name}</h3>
                <p>SOS: {props.sos}</p>
                <p>COST: {props.cost}-PLN
                <button onClick={() => dispatch(deleteItem(props._id))} style={{ paddingBottom: "0px" }} >Delete</button></p>
            </div>}
        </>
    )
}
export default BasketCart