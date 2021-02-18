import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { autoOrderPost } from "../Reduxs/orderAcsion";
import { useHistory } from "react-router-dom";
import Alert from "../Components/Alert";
import "../StyleCss/modalAddress/modalAddress.css";
import { showAlert } from "../Reduxs/generalAcsion";
import { clearBasket } from "../Reduxs/basketAcsion";
import close from "../images/close-window.png";
const ModelAdress = ({ setShowAddress, showAddress, cost }) => {
  const [formAddress, setFormAddress] = useState({
    nameClient: "",
    phone: "",
    address: "",
    message: "",
    payment: "",
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const order = useSelector((state) => state.basket.items);
  const alert = useSelector((state) => state.general.alert);
  const chanheHandler = (e) => {
    setFormAddress({
      ...formAddress,
      [e.target.name]: e.target.value,
      totalCost: cost,
    });
  };
  const bayHandler = (e) => {
    e.preventDefault();
    if (order[0]) {
      dispatch(autoOrderPost(order, formAddress));
      setTimeout(() => {
        setFormAddress({
          nameClient: "",
          phone: "",
          address: "",
          message: "",
          payment: "",
        });
        setShowAddress(!showAddress);
        dispatch(clearBasket());
        history.push("/");
      }, 1000);
    } else {
      dispatch(showAlert("First Add Menu  To Basket !!"));
      setTimeout(() => {
        setFormAddress({
          nameClient: "",
          phone: "",
          address: "",
          message: "",
          payment: "",
        });
        history.push("/");
      }, 1000);
    }
  };

  return (
    <form className="addressForm" onSubmit={(e) => bayHandler(e)}>
      {alert && <Alert text={alert} />}
      <p className="closeBtn" onClick={() => setShowAddress(!showAddress)}>
        <img src={close} alt={close} />
      </p>
      <input
        className="inputAddress"
        required
        type="text"
        placeholder="Your Name"
        name="nameClient"
        value={formAddress.name}
        onChange={(e) => chanheHandler(e)}
      />
      <input
        className="inputAddress"
        required
        type="phone"
        placeholder="your Phone"
        name="phone"
        value={formAddress.email}
        onChange={(e) => chanheHandler(e)}
      />
      <div className="choicePayment">
        <label>
          Card
          <input
            required
            type="radio"
            name="payment"
            value="cart"
            onChange={(e) => chanheHandler(e)}
          />
        </label>
        <label> Payment By? </label>
        <label>
          <input
            required
            type="radio"
            name="payment"
            value="cash"
            onChange={(e) => chanheHandler(e)}
          />
          Cash
        </label>
      </div>
      <input
        className="inputAddress"
        required
        type="text"
        placeholder="Your Address"
        name="address"
        value={formAddress.address}
        onChange={(e) => chanheHandler(e)}
      />
      <input
        className="inputAddress"
        required
        type="text"
        placeholder="Write Additionally"
        name="message"
        value={formAddress.message}
        onChange={(e) => chanheHandler(e)}
      />
      <button>Buy {cost} - PLN</button>
    </form>
  );
};
export default ModelAdress;
