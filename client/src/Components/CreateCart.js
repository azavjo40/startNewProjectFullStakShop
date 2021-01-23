import React, { useState } from 'react'
import '../StyleCss/create/create.css'
import { useDispatch, useSelector } from 'react-redux'
import { createAcsion } from '../Reduxs/menuAcsion'
import Alert from './Alert'
const CreateCart = () => {
    const alert = useSelector((state) => state.general.alert)
    const isLoading = useSelector((state) => state.general.isloading)
    const dispatch = useDispatch()
    const [file, setFile] = useState()
    const [form, setForm] = useState({ name: "", p: "", cost: "" })
    const chanheHandler = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const changeFile = (e) => {
        const fileField = e.target.files[0]
        setFile(fileField)
    }
    const create = (e) => {
        e.preventDefault();
        dispatch(createAcsion(form, file))
        setForm({ name: "", p: "", cost: "" })
        setFile(null)
    }
    return (
        <div className="createCont">
            <form className="creteForm" onSubmit={(e) => create(e)}>
                {alert && <Alert text={alert} />}
                <label>Create Menu</label>
                <input required type="text" placeholder="Title" name="name" value={form.name} onChange={(e) => chanheHandler(e)} />
                <input required type="text" placeholder="Paragraph" name="p" value={form.p} onChange={(e) => chanheHandler(e)} />
                <input required type="number" placeholder="Cost" name="cost" value={form.cost} onChange={(e) => chanheHandler(e)} />
                <input required type="file" onChange={(e) => changeFile(e)} />
                <button disabled={isLoading} style={{ margin: "15px" }} className="createBtn">Create</button>
            </form>
        </div>
    )
}
export default CreateCart