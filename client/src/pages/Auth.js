import React, { useState } from "react";
import { Login, Register, Alert } from "../Components";
import { useDispatch, useSelector } from "react-redux";
import { showAlert } from "../reduxs/generals/generalAcsions";
import "../StyleCss/Auth/auth.css";
function Auth() {
  const alert = useSelector((state) => state.general.alert);
  const authAdmin = useSelector((state) => state.auth.authAdmin);
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true);
  const chechAdmin = () => {
    if (
      authAdmin.email === "pabek92@gmail.com" &&
      authAdmin.password === "123456"
    ) {
      setIsLogin(!isLogin);
    } else {
      dispatch(showAlert("For Administration Only Login And Password !! "));
      setIsLogin(true);
    }
  };

  return (
    <div className="contAuth">
      {alert && <Alert text={alert} />}
      {isLogin ? <Login /> : <Register />}
      <button className="btnGoToRegister" onClick={() => chechAdmin()}>
        {isLogin ? "To Register" : "To Login"}
      </button>
    </div>
  );
}
export default Auth;
