import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toBasket } from "../reduxs/baskets/basketAcsions";
import close from "../images/close-window.png";
import { showAlert } from "../reduxs/generals/generalAcsions";
import "../StyleCss/modalChice/modalChoice.css";

const ModelChoice = ({ setShow, show, item }) => {
  const [sos, setSos] = useState();
  const dispatch = useDispatch();

  const changehandler = (e) => {
    const check = e.target.checked;
    if (check) {
      const sosChoice = e.target.value;
      check && setSos(sosChoice);
    }
  };

  const addBasket = (e) => {
    e.preventDefault();
    const items = { ...item, sos };
    dispatch(toBasket(items));
    dispatch(showAlert("You Added To Basket !"));
    setTimeout(() => {
      setShow(!show);
    }, 1000);
  };
  return (
    <div className="modalCont">
      <form className="modalChoice" onSubmit={addBasket}>
        <p onClick={() => setShow(!show)} className="closeModal">
          <img src={close} alt={close} />
        </p>
        <label className="label">Choose a sauce !!!</label>
        <label className="label">
          <input
            required
            name="sos"
            onChange={(e) => changehandler(e)}
            type="radio"
            value="spicy"
          />
          Spicy
        </label>
        <label className="label">
          <input
            required
            name="sos"
            onChange={(e) => changehandler(e)}
            type="radio"
            value="garlic"
          />
          Garlic
        </label>
        <label className="label">
          <input
            required
            name="sos"
            onChange={(e) => changehandler(e)}
            type="radio"
            value="mix"
          />
          Mix
        </label>
        <label className="label">
          <input
            required
            name="sos"
            onChange={(e) => changehandler(e)}
            type="radio"
            value="not-sauce"
          />
          Not-sauce
        </label>
        <label className="label">
          <button className="modalBtn">Add-baskets</button>
        </label>
      </form>
    </div>
  );
};
export default ModelChoice;
