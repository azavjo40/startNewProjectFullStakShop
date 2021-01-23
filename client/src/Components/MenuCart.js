import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteMenu } from '../Reduxs/menuAcsion'
import '../StyleCss/cart/cart.css'
import ModelChoice from './ModelChoice'
const MenuCart = (props) => {
    const [show, setShow] = useState(false)
    const [form, setForm] = useState({ imageSrc: "", _id: "" })

    const dispatch = useDispatch()
    const removeHandler = () => {
        dispatch(deleteMenu(form))
        console.log(form)
    }
    const changeHndler = (props) => {
        setForm(props)
    }
    return (
        <>
            {show && <ModelChoice setShow={setShow} show={show} />}
            <div className="contCart">
                <img src={props.imageSrc} className="imgCart" alt={props.name} />
                <div className="cartRidius"><p>20-30-M</p></div>
                <h3>{props.name}</h3>
                <p> {props.p}</p>
                {props.authUser ? <label style={{ fontSize: '10px' }}>
                    <input type="checkbox" onChange={(e) => changeHndler(props)} /> Confirm</label> : <p>{props.cost}-PLN</p>}
                {props.authUser ? <button onClick={removeHandler}>Delete</button> : <button onClick={() => setShow(!show)}> +</button>}
            </div>
        </>
    )
}
export default MenuCart 