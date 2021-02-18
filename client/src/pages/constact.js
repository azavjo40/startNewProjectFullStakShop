import React, { useEffect } from "react";
import "../StyleCss/contact/contact.css";
import { useSelector, useDispatch } from "react-redux";
import MyContactCart from "../Components/MyContactCart";
import ContactCart from "../Components/contactCart";
import { getContacts } from "../Reduxs/contactAcsion";
function Contact() {
  const authUser = useSelector((state) => state.auth.isAuthUser);
  const dispatch = useDispatch();
  useEffect(() => {
    authUser && dispatch(getContacts());
  }, [dispatch, authUser]);
  const items = useSelector((state) => state.contact.items);
  return (
    <div className={authUser ? "myContactCart" : "contContact"}>
      {authUser ? (
        items.map((item, i) => (
          <MyContactCart key={item._id} item={item} i={i} />
        ))
      ) : (
        <ContactCart />
      )}
    </div>
  );
}
export default Contact;
