import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postOrder } from '../Reduxs/orderAcsion'
import Alert from '../Components/Alert'
import '../StyleCss/create/create.css'
import { showAlert } from '../Reduxs/generalAcsion'
const ModelAdress = ({ setShow, show, cost }) => {
    const [form, setForm] = useState({ name: "", phone: "", address: "", message: "" })
    const dispatch = useDispatch()
    const menu = useSelector(state => state.basket.form)
    const alert = useSelector((state) => state.general.alert)
    const chanheHandler = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value, totalCost: cost, menu })
    }
    console.log(menu.name)
    const bay = (e) => {
        e.preventDefault()
        if (menu[0]) {
            dispatch(postOrder({ form }))
            setTimeout(() => {
                setForm({ name: "", phone: "", address: "", message: "" })
                setShow(!show)
            }, 1000)
        } else { dispatch(showAlert('First Add Menu  To Basket !!')) }
    }
    return (
        <div className="createCont" >
            {alert && <Alert text={alert} />}
            <form className="creteForm" onSubmit={(e) => bay(e)}>
                <label className="closeBtn" onClick={() => setShow(!show)}>close</label>
                <input required type="text" placeholder="Your Name" name="name" value={form.name} onChange={(e) => chanheHandler(e)} />
                <input required type="phone" placeholder="your Phone" name="phone" value={form.email} onChange={(e) => chanheHandler(e)} />
                <input required type="text" placeholder="Your Address" name="address" value={form.address} onChange={(e) => chanheHandler(e)} />
                <input required type="text" placeholder="Write Additionally" name="message" value={form.message} onChange={(e) => chanheHandler(e)} />
                <button style={{ margin: "15px" }} className="createBtn">bay</button>
            </form>
        </div>
    )
}
export default ModelAdress