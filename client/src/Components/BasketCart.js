import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../redux/baskets/basketAcsions";
import "../styles/cart/cart.css";

const BasketCart = ({ item }) => {
  const items = useSelector((state) => state.basket.items);
  const dispatch = useDispatch();
  const deleteHandler = (item) => {
    const deleteBasket = items.filter((it) => it !== item);
    setTimeout(() => {
      dispatch(deleteItem(deleteBasket));
    }, 500);
  };
  return (
    <>
      {item && (
        <div className="contCart" key={item.i}>
          <img src={item.imageSrc} className="imgCart" alt={item.name} />
          <div className="cartRidius">
            <p>20-30-M</p>
          </div>
          <h3>{item.name}</h3>
          <p>SOS: {item.sos}</p>
          <p>
            COST: {item.cost}-PLN
            <button
              onClick={() => deleteHandler(item)}
              style={{ paddingBottom: "0px" }}
            >
              Delete
            </button>
          </p>
        </div>
      )}
    </>
  );
};
export default BasketCart;
