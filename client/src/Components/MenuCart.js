import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toBasket } from "../Reduxs/basketAcsion";
import { showAlert } from "../Reduxs/generalAcsion";
import { allmenu, deleteMenu } from "../Reduxs/menuAcsion";
import "../StyleCss/cart/cart.css";
import Alert from "./Alert";
import ModelChoice from "./ModelChoice";

const MenuCart = ({ item, authUser }) => {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({ imageSrc: "", _id: "" });
  const [check, setCheck] = useState(false);
  const alert = useSelector((state) => state.general.alert);
  const dispatch = useDispatch();
  const removeHandler = () => {
    dispatch(deleteMenu(form));
    setTimeout(() => {
      dispatch(allmenu());
    }, 1000);
  };
  const addBasket = () => {
    if (item.ifKebab === "true") {
      setShow(!show);
    }
    if (item.ifKebab === "false") {
      dispatch(toBasket(item));
      dispatch(showAlert("You Added To Basket !"));
    }
  };

  const changeHndler = (e) => {
    const checked = e.target.checked;
    if (checked) {
      setCheck(checked);
      setForm(item);
    } else {
      setForm(null);
      setCheck(false);
    }
  };
  return (
    <>
      {alert && <Alert text={alert} />}
      {show && <ModelChoice show={show} item={item} setShow={setShow} />}

      <div className="contCart">
        <img src={item.imageSrc} className="imgCart" alt={item.name} />
        <div className="cartRidius">
          <p>20-30-M</p>
        </div>
        <h3>{item.name}</h3>
        <p> {item.p}</p>
        {authUser ? (
          <label style={{ fontSize: "10px" }}>
            <input type="checkbox" onChange={(e) => changeHndler(e)} /> Confirm
          </label>
        ) : (
          <p>{item.cost}-PLN</p>
        )}

        {authUser ? (
          <button disabled={!check} onClick={removeHandler}>
            Delete
          </button>
        ) : (
          <button onClick={addBasket}> +</button>
        )}
      </div>
    </>
  );
};
export default MenuCart;
