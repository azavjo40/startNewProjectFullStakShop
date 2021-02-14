import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getOrder, removeOrder } from "../Reduxs/orderAcsion";
import "../StyleCss/order/order.css";
function OrderCart({ address, order, id }) {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const deleteHandler = (e) => {
    e.preventDefault();
    dispatch(removeOrder(id));
    dispatch(getOrder());
  };

  return (
    <div key={id} className="orderCart">
      <form onSubmit={deleteHandler} key={id}>
        <h3 onClick={() => setOpenModal(!openModal)}>
          {address.nameClient} OPEN
        </h3>
        <input required type="checkbox" />
        <button type="submit">Delet</button>
      </form>

      {openModal && (
        <div className="openModal">
          <h1
            onClick={() => {
              setOpenModal(!openModal);
            }}
          >
            Close
          </h1>
          <ul key={id}>
            <ol>ADDRESS CLIENT</ol>
            <ol>CLIENT: {address.nameClient}</ol>
            <ol>ADDRESS: {address.address}</ol>
            <ol>MESSAGE: {address.message}</ol>
            <ol>TOTAL-COST: = {address.totalCost} - PLN</ol>
          </ul>

          {order &&
            order.map((item, i) => {
              return (
                <ul key={id}>
                  <ol>ORDERS: {i}</ol>
                  <ol>NAME: {item.name}</ol>
                  <ol>PARAGRAPH: {item.p}</ol>
                  <ol>COST: = {item.cost} - PLN</ol>
                  {item.sos && <ol>SOS: {item.sos}</ol>}
                </ul>
              );
            })}
        </div>
      )}
    </div>
  );
}
export default OrderCart;
