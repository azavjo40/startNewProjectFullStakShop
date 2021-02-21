import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContacts, removeContact } from "../Reduxs/contactAcsion";
import openMessage from "../images/open-message.png";
import close from "../images/close-window.png";
import { Alert } from "../Components";
import "../StyleCss/contact/myContact.css";
function MyContactCart({ item, i }) {
  const [showModal, setShowModal] = useState(false);
  const alert = useSelector((state) => state.general.alert);
  const dispatch = useDispatch();
  const removeHandler = (e) => {
    e.preventDefault();
    dispatch(removeContact(item._id));
    setTimeout(() => {
      dispatch(getContacts());
      setShowModal(!showModal);
    }, 1000);
  };
  return (
    <div className="myContactCart">
      {alert && <Alert text={alert} />}
      <div
        className="showModal"
        onClick={() => setShowModal(!showModal)}
        key={item.i}
      >
        <img src={openMessage} alt={openMessage} />
        <span>{item.name} </span>
      </div>
      {showModal && (
        <div key={item._id} className="myContactModal">
          <label onClick={() => setShowModal(!showModal)}>
            <img src={close} alt={close} />
          </label>
          <p>Message: {item.message}</p>
          <span>Name: {item.name}</span>
          <span>Phone: {item.phone}</span>
          <span>Email: {item.email}</span>
          <span>
            Date: {new Date(item.date).toLocaleTimeString()} -
            {new Date(item.date).toLocaleDateString()}
          </span>
          <form onSubmit={removeHandler}>
            <div className="confirm">
              <p>
                {" "}
                <input type="checkbox" required /> Confirm
              </p>
              <button className="btn_delete">Delete</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
export default MyContactCart;
