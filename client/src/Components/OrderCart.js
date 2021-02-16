import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getOrder, removeOrder } from "../Reduxs/orderAcsion";
import openOrder from "../images/open-order.png";
import close from "../images/close-window.png";
import "../StyleCss/order/order.css";
function OrderCart({ address, order, id, i }) {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const deleteHandler = (e) => {
    e.preventDefault();
    dispatch(removeOrder(id));
    dispatch(getOrder());
  };
  return (
    <div key={i} className="orderCart">
      <div className="showModal" onClick={() => setOpenModal(!openModal)}>
        <img src={openOrder} alt={openOrder} />
        <span> {address.nameClient} </span>
      </div>
      {openModal && (
        <div className="orderModalCart">
          <label onClick={() => setOpenModal(!openModal)}>
            <img src={close} alt={close} />
          </label>
          <div>
            <p>MESSAGE: {address.message}</p>
            <p>
              CLIENT: ({address.nameClient}) Phone: ({address.phone}) Ul: (
              {address.address}) TotalCost: ({address.totalCost}) PLN
            </p>
          </div>
          {order &&
            order.map((item, i) => {
              return (
                <div key={i}>
                  <p>
                    ORDERS: ({i}) ({item.name})
                    {item.sos && ` SOS:  (${item.sos}) `} COST: ({item.cost}) -
                    PLN
                  </p>
                </div>
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
