import React, { useState } from "react";
import "../StyleCss/Auth/auth.css";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Alert from "../Components/Alert";
import { useDispatch, useSelector } from "react-redux";
import { showAlert } from "../Reduxs/generalAcsion";
function Auth() {
  const alert = useSelector((state) => state.general.alert);
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true);
  const chechAdmin = (login, pass) => {
    if (login === "pabek92@gmail.com" && pass === "123456") {
      setIsLogin(!isLogin);
    } else {
      dispatch(showAlert("For Administration Only Login And Password !! "));
    }
  };

  return (
    <div className="contAuth">
      {alert && <Alert text={alert} />}
      {isLogin ? <Login /> : <Register />}
      <button
        className="btnGoToRegister"
        onClick={() => chechAdmin("pabek92@gmail.com", "123456")}
      >
        {isLogin ? "To Register" : "To Login"}
      </button>
    </div>
  );
}
export default Auth;
