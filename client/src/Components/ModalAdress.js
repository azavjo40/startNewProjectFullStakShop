import { useState } from 'react'
import { useDispatch } from 'react-redux'
import '../StyleCss/create/create.css'
const ModelAdress = ({ setShowAddress, showAddress }) => {
    const [form, setForm] = useState({ name: "", email: "", address: "" })
    // const dispatch = useDispatch()
    const chanheHandler = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const bay = (e) => {
        e.preventDefault()
    }
    return (
        <div className="createCont">
            <form className="creteForm" onSubmit={(e) => bay(e)}>
                <label onClick={() => setShowAddress(!showAddress)}>close</label>
                <input required type="text" placeholder="Your Name" name="name" value={form.name} onChange={(e) => chanheHandler(e)} />
                <input required type="text" placeholder="your Email" name="email" value={form.email} onChange={(e) => chanheHandler(e)} />
                <input required type="text" placeholder="Your Address" name="address" value={form.address} onChange={(e) => chanheHandler(e)} />
                <input required type="text" placeholder="Write Additionally" name="message" value={form.message} onChange={(e) => chanheHandler(e)} />
                <button style={{ margin: "15px" }} className="createBtn">bay</button>
            </form>
        </div>
    )
}
export default ModelAdress