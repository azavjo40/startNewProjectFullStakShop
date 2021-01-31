import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteMenu } from '../Reduxs/menuAcsion'
import { useHistory } from 'react-router-dom'
import '../StyleCss/cart/cart.css'
import ModelChoice from './ModelChoice'
const MenuCart = (props) => {
    const [show, setShow] = useState(false)
    const [form, setForm] = useState({ imageSrc: "", _id: "" })
    const [check, setCheck] = useState(false)
    const history = useHistory()
    const dispatch = useDispatch()
    const removeHandler = () => {
        dispatch(deleteMenu(form))
        setTimeout(() => {
            history.push('/create')
        }, 1000)
    }

    const changeHndler = (e) => {
        const checked = e.target.checked
        if (checked) {
            setCheck(checked)
            setForm(props)
        } else {
            setForm(null)
            setCheck(false)
        }
    }
    return (
        <>
            {show && <ModelChoice setShow={setShow} show={show} props={props} />}
            <div className="contCart">
                <img src={props.imageSrc} className="imgCart" alt={props.name} />
                <div className="cartRidius"><p>20-30-M</p></div>
                <h3>{props.name}</h3>
                <p> {props.p}</p>
                {props.authUser ? <label style={{ fontSize: '10px' }}>
                    <input type="checkbox" onChange={(e) => changeHndler(e)} /> Confirm</label> : <p>{props.cost}-PLN</p>}
                {props.authUser ? <button disabled={!check} onClick={removeHandler}>Delete</button> :
                    <button onClick={() => {
                        setShow(!show)
                    }}> +</button>}
            </div>
        </>
    )
}
export default MenuCart 