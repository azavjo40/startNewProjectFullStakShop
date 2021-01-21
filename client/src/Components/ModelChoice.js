import React, { useState } from 'react'
import '../StyleCss/modalChice/modalChoice.css'
const ModelChoice = ({ setShow, show }) => {
    const [form, setForm] = useState([])
    const changehandler = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    console.log('form', form)
    return (
        <div className="modalCont" >
            <form className="modalChoice" onChange={(e) => changehandler(e)}>
                <button onClick={() => setShow(!show)} className="closeModal">Close</button>
                <label className="label">Choose a sauce !!!</label>
                <label className="label"><input required type="radio" name="sos" value="1" />Spicy</label>
                <label className="label"><input required type="radio" name="sos" value="2" />Garlic</label>
                <label className="label"><input required type="radio" name="sos" value="3" />Mix</label>
                <label className="label"><input required type="radio" name="sos" value="4" />Without-sauce</label>
                <label className="label">
                    <button className="modalBtn"

                    >Buy</button>
                    <button className="modalBtn"

                    >Add-baskets</button></label>
            </form>
        </div>
    )
}
export default ModelChoice