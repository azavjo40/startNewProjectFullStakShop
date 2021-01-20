import React from 'react'
import '../StyleCss/modalChice/modalChoice.css'
const ModelChoice = ({ setShow, show }) => {
    return (
        <div className="modalCont" >
            <form className="modalChoice">
                <button onClick={() => setShow(!show)} className="closeModal">Close</button>
                <label className="label">Choose a sauce !!!</label>
                <label className="label"><input type="radio" name="sos" value="" />Spicy</label>
                <label className="label"><input type="radio" name="sos" value="" />Garlic</label>
                <label className="label"><input type="radio" name="sos" value="" />Mix</label>
                <label className="label"><input type="radio" name="sos" value="" />Without-sauce</label>
                <label className="label">  <button>Buy</button>  <button>Add-baskets</button></label>
            </form>
        </div>
    )
}
export default ModelChoice