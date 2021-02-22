import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postContact } from "../reduxs/contacts/contactAcsions";
import { Alert } from "../Components";
import "../styleCss/contact/contact.css";
import { showAlert } from "../reduxs/generals/generalAcsions";

function ContactCart() {
  const dispatch = useDispatch();
  const alert = useSelector((state) => state.general.alert);
  const [form, setform] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const changeHandler = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };
  const sendContact = (e) => {
    e.preventDefault();
    if (!form) {
      dispatch(showAlert("Fil Out The Form"));
    } else {
      dispatch(postContact(form));
      setTimeout(() => {
        setform({ name: "", email: "", phone: "", message: "" });
      }, 1000);
    }
  };

  return (
    <form className="contactCart" onSubmit={sendContact}>
      {alert && <Alert text={alert} />}
      <h1>Write To Us</h1>
      <input
        required
        value={form.name}
        name="name"
        type="name"
        placeholder="Your Name"
        onChange={changeHandler}
      />
      <input
        required
        value={form.email}
        name="email"
        type="email"
        placeholder="Your Email"
        onChange={changeHandler}
      />
      <input
        required
        value={form.phone}
        name="phone"
        type="phone"
        placeholder="Your Phone"
        onChange={changeHandler}
      />
      <textarea
        required
        name="message"
        rows="4"
        cols="50"
        value={form.message}
        onChange={changeHandler}
      >
        {" "}
      </textarea>
      <button required>Send</button>
    </form>
  );
}
export default ContactCart;
