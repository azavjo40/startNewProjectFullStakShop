import React, { useState } from "react";
import "../StyleCss/Auth/auth.css";
import Login from "../Components/Login";
import Register from "../Components/Register";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="contAuth">
      {isLogin ? <Login /> : <Register />}
      <button className="btnGoToRegister" onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "To Register" : "To Login"}
      </button>
    </div>
  );
}
export default Auth;
