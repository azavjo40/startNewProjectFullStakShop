import { useEffect } from "react";
import Navbar from "./Components/Navbar";
import useRouters from "./routers/Router";
import { BrowserRouter as Router } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { autoLogin } from "./reduxs/authAcsions";

function App() {
  const isAuthUser = useSelector((state) => state.auth.isAuthUser);
  const routers = useRouters(isAuthUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(autoLogin());
  }, [dispatch]);

  return (
    <div className="cont">
      <Router>
        {isAuthUser ? (
          <Navbar home="Home" contact="Contacts" create="Create" myMenu="MyMenu"
            logout="Logout" lo="/"
          />
        ) : (
            <Navbar home="Home" contact="Contacts" login="Login" l="/auth" />
          )}
        {routers}
      </Router>
    </div>
  );
}

export default App;