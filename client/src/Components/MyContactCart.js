import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getContacts, removeContact } from '../Reduxs/contactAcsion'
import '../StyleCss/contact/myContact.css'
function MyContactCart({ item }) {
    const [showModal, setShowModal] = useState(false)
    const dispatch = useDispatch()
    const removeHandler = (e) => {
        e.preventDefault()
        dispatch(removeContact(item._id))
        setTimeout(() => {
            dispatch(getContacts())
            setShowModal(!showModal)
        }, 1000)

    }
    return (
        <>
            <span className="showModal" onClick={() => setShowModal(!showModal)}
                key={item.name}>
                {item.name} - {new Date(item.date).toLocaleDateString()}
            </span>
            {showModal && <div key={item._id} className="myContactModal">
                <h3 onClick={() => setShowModal(!showModal)}>Close</h3>
                <span>Name: {item.name}</span>
                <span>Phone: {item.phone}</span>
                <span>Email: {item.email}</span>
                <span>Date: {new Date(item.date).toLocaleTimeString()} -
                {new Date(item.date).toLocaleDateString()}</span>
                <form onSubmit={removeHandler}>
                    <span>
                        <input type="checkbox" required /> Confirm
                    <button className="btn_delete">Delete</button>
                    </span>
                </form>
                <p>Message: {item.message}</p>

            </div>}
        </>
    )
}
export default MyContactCart