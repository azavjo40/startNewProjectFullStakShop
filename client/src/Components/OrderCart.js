import React, { useState } from "react";
import { Alert, Accordion } from "../Components";
import { useDispatch, useSelector } from "react-redux";
import { getOrder, removeOrder } from "../redux/orders/orderAcsions";
import openOrder from "../images/open-order.png";
import close from "../images/close-window.png";
import "../styles/order/order.css";

function OrderCart({ address, order, id, i, date }) {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const alert = useSelector((state) => state.general.alert);
  const deleteHandler = (e) => {
    e.preventDefault();
    dispatch(removeOrder(id));
    dispatch(getOrder());
  };
  return (
    <div key={i} className="orderCart">
      <div className="showModal" onClick={() => setOpenModal(!openModal)}>
        {alert && <Alert text={alert} />}
        <img src={openOrder} alt={openOrder} />
        <span> {address.nameClient} </span>
      </div>

      {openModal && (
        <div className="orderModalCart">
          <label onClick={() => setOpenModal(!openModal)}>
            <img src={close} alt={close} />
          </label>
          <Accordion
            button="Data-Client"
            name={address.nameClient}
            phone={address.phone}
            address={address.address}
            totalCost={address.totalCost}
            payment={address.payment}
            date={date}
            message={address.message}
          />
          {order &&
            order.map((item, i) => {
              return (
                <Accordion
                  key={i}
                  button={`Order ${i}`}
                  name={item.name}
                  sos={item.sos}
                  cost={item.cost}
                />
              );
            })}
          <form onSubmit={deleteHandler}>
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
export default OrderCart;
