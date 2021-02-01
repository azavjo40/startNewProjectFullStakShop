import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postOrder } from '../Reduxs/orderAcsion'
import Alert from '../Components/Alert'
import '../StyleCss/create/create.css'
import { showAlert } from '../Reduxs/generalAcsion'
import { clearBasket } from '../Reduxs/basketAcsion'
const ModelAdress = ({ setShowAddress, showAddress, cost }) => {
    const [form, setForm] = useState({ nameClient: "", phone: "", address: "", message: "" })
    const dispatch = useDispatch()
    const order = useSelector(state => state.basket.items)
    const alert = useSelector((state) => state.general.alert)
    const chanheHandler = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value, totalCost: cost })
    }
    const bayHandler = (e) => {
        e.preventDefault()
        if (order[0]) {
            order.push({ form })
            dispatch(postOrder({ order: order }))
            setTimeout(() => {
                setForm({ nameClient: "", phone: "", address: "", message: "" })
                setShowAddress(!showAddress)
                dispatch(clearBasket())
            }, 1000)
        } else { dispatch(showAlert('First Add Menu  To Basket !!')) }
    }

    return (
        <div className="createCont" >
            {alert && <Alert text={alert} />}
            <form className="creteForm" onSubmit={(e) => bayHandler(e)}>
                <label className="closeBtn" onClick={() => setShowAddress(!showAddress)}>close</label>
                <input required type="text" placeholder="Your Name" name="nameClient" value={form.name} onChange={(e) => chanheHandler(e)} />
                <input required type="phone" placeholder="your Phone" name="phone" value={form.email} onChange={(e) => chanheHandler(e)} />
                <input required type="text" placeholder="Your Address" name="address" value={form.address} onChange={(e) => chanheHandler(e)} />
                <input required type="text" placeholder="Write Additionally" name="message" value={form.message} onChange={(e) => chanheHandler(e)} />
                <button style={{ margin: "15px" }} className="createBtn">bay</button>
            </form>
        </div>
    )
}
export default ModelAdress