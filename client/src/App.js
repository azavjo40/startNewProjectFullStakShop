import { useEffect } from "react";
import Navbar from "./Components/Navbar";
import useRouters from "./routers/Router";
import { BrowserRouter as Router } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { autoLogin } from "./Reduxs/authAcsions";

function App() {
  const isAuthUser = useSelector((state) => state.auth.isAuthUser);
  const routers = useRouters(isAuthUser);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(autoLogin());

  }, [dispatch])

  return (
    <div className="cont">
      <Router>
        {isAuthUser ? (
          <Navbar home="MyHome" contact="MyContacts" create="Create" order="Order"
            logout="Logout" lo="/" cr="/create" h="/" o="/order" c="contact"
          />
        ) : (
            <Navbar home="Home" contact="Contacts" login="Login" l="/auth"
              basket="Basket" b="/basket" c="contact"
            />
          )}
        {routers}
      </Router>
    </div>
  );
}

export default App;