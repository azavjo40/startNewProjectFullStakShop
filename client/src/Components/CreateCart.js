import React, { useState } from 'react'
import '../StyleCss/create/create.css'
import { useDispatch, useSelector } from 'react-redux'
import { CreateAcsion } from '../Reduxs/menuAcsion'
import Alert from './Alert'
const CreateCart = () => {
    const alert = useSelector(state => state.auth.alert)
    const dispatch = useDispatch
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
        dispatch(CreateAcsion(form, file))
    }

    return (
        <div className="createCont">
            <form className="creteForm" onSubmit={(e) => create(e)}>
                {alert && <Alert text={alert} />}
                <label>Create Menu</label>
                <input type="text" name="name" value={form.name} onChange={(e) => chanheHandler(e)} />
                <input type="text" name="p" value={form.p} onChange={(e) => chanheHandler(e)} />
                <input type="text" name="cost" value={form.cost} onChange={(e) => chanheHandler(e)} />
                <input type="file" onChange={(e) => changeFile(e)} />
                <button className="createBtn">Create</button>
            </form>
        </div>
    )
}
export default CreateCart