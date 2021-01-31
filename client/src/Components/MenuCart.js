import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteMenu } from '../Reduxs/menuAcsion'
import { useHistory } from 'react-router-dom'
import '../StyleCss/cart/cart.css'
import ModelChoice from './ModelChoice'

const MenuCart = ({ item, authUser }) => {
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
            setForm(item)
        } else {
            setForm(null)
            setCheck(false)
        }
    }
    return (
        <>
            {show &&
                <ModelChoice
                    show={show}
                    item={item}
                    setShow={setShow}
                />
            }

            <div className="contCart">
                <img src={item.imageSrc} className="imgCart" alt={item.name} />
                <div className="cartRidius"><p>20-30-M</p></div>
                <h3>{item.name}</h3>
                <p> {item.p}</p>
                {authUser
                    ? <label style={{ fontSize: '10px' }}>
                        <input type="checkbox" onChange={(e) => changeHndler(e)} /> Confirm
                      </label>
                    : <p>{item.cost}-PLN</p>
                }

                {authUser
                    ? <button disabled={!check} onClick={removeHandler}>Delete</button>
                    : <button onClick={() => { setShow(!show) }}> +</button>
                }
            </div>
        </>
    )
}
export default MenuCart 