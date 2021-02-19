import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authAdmin, authLogin } from "../Reduxs/authAcsions";
import "../StyleCss/Auth/register.css";
import Alert from "./Alert";
function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const changehandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const isloading = useSelector((state) => state.general.isloading);
  const alert = useSelector((state) => state.general.alert);
  const dispach = useDispatch();

  const loginHandler = (e) => {
    e.preventDefault();
    dispach(authLogin(form));
    setForm({ email: "", password: "" });
  };

  useEffect(() => {
    dispach(authAdmin(form));
  }, [dispach, form]);

  return (
    <form className="authForm" onSubmit={(e) => loginHandler(e)}>
      {alert && <Alert text={alert} />}
      <h1>Login</h1>
      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        required
        value={form.email}
        onChange={(event) => changehandler(event)}
      />
      <input
        type="passeord"
        name="password"
        placeholder="Enter Password"
        required
        value={form.password}
        onChange={(event) => changehandler(event)}
      />
      <button disabled={isloading}>Login</button>
    </form>
  );
}
export default Login;
