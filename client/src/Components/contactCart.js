import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { postContact } from '../Reduxs/contactAcsion'
import '../StyleCss/contact/contact.css'

function ContactCart() {
    const dispatch = useDispatch()
    const [form, setform] = useState({ name: '', email: '', phone: '', message: '' })
    const changeHandler = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }
    const sendContact = (e) => {
        e.preventDefault()
        dispatch(postContact(form))
        setTimeout(() => {
            setform({ name: '', email: '', phone: '', message: '' })
        }, 1000)
    }
    return (
        <form className="contactCart" onSubmit={sendContact} >
            <h1>Write To Us</h1>
            <input required value={form.name} name="name" type="name" placeholder="Your Name" onChange={changeHandler} />
            <input required value={form.email} name="email" type="email" placeholder="Your Email" onChange={changeHandler} />
            <input required value={form.phone} name="phone" type="phone" placeholder="Your Phone" onChange={changeHandler} />
            <textarea required name="message" rows="4" cols="50"
                value={form.message} onChange={changeHandler}
            > </textarea>
            <button>Send</button>
        </form>
    )
}
export default ContactCart