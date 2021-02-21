import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OrderCart } from "../Components";
import { getOrder } from "../Reduxs/orderAcsion";
import "../StyleCss/order/order.css";
function Order() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrder());
  }, [dispatch]);
  const order = useSelector((state) => state.order.allOrder);
  return (
    <div className="orderCont">
      {order &&
        order.map((item, i) => {
          return (
            <OrderCart
              key={item._id}
              id={item._id}
              address={item.itemsAddress}
              order={item.itemsOrder}
              i={i}
              date={item.date}
            />
          );
        })}
    </div>
  );
}
export default Order;
