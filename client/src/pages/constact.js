import React from 'react'
import '../StyleCss/contact/contact.css'
import { useSelector } from 'react-redux'
import MyContactCart from '../Components/MyContactCart'
import ContactCart from '../Components/contactCart'
function Contact() {
    const authUser = useSelector(state => state.auth.isAuthUser)
    return (
        <div className="contContact">
            {authUser ? <MyContactCart /> : <ContactCart />}
        </div>
    )
}
export default Contact