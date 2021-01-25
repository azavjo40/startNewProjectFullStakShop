import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toBasket } from '../Reduxs/basketAcsion'
import { showAlert } from '../Reduxs/generalAcsion'
import Alert from '../Components/Alert'
import '../StyleCss/modalChice/modalChoice.css'
const ModelChoice = ({ setShow, show, props }) => {
    const [form, setForm] = useState([])
    const alert = useSelector(state => state.general.alert)
    const dispatch = useDispatch()
    const changehandler = (e) => {
        const check = e.target.checked
        if (check) {
            const sos = e.target.value
            setForm([...form, { ...props, sos }])
        }
    }

    const addBasket = (e) => {
        dispatch(toBasket(form))
        e.preventDefault()
        dispatch(showAlert('You Addet To Basket !!!'))
        setTimeout(() => {
            setShow(!show)
        }, 1000)
    }
    return (
        <div className="modalCont" >
            {alert && <Alert text={alert} />}
            <form className="modalChoice" onSubmit={(e) => addBasket(e)} >
                <button onClick={() => setShow(!show)} className="closeModal">Close</button>
                <label className="label">Choose a sauce !!!</label>
                <label className="label"><input required name="sos" onChange={(e) => changehandler(e)} type="radio" value="spicy" />Spicy</label>
                <label className="label"><input required name="sos" onChange={(e) => changehandler(e)} type="radio" value="garlic" />Garlic</label>
                <label className="label"><input required name="sos" onChange={(e) => changehandler(e)} type="radio" value="mix" />Mix</label>
                <label className="label"><input required name="sos" onChange={(e) => changehandler(e)} type="radio" value="not-sauce" />Not-sauce</label>
                <label className="label">
                    <button className="modalBtn">Add-baskets</button></label>
            </form>
        </div>
    )
}
export default ModelChoice