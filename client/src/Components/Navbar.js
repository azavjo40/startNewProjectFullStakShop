import { useState } from "react";
import { NavLink } from "react-router-dom";
import icon from "../images/openMenu.png";
import { useDispatch } from "react-redux";
import { logout } from "../reduxs/auths/authAcsions";
import "../styleCss/navbar/onavbar.css";
const Navbar = (props) => {
  const [isLoadin, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  return (
    <header className="header">
      <img
        src={icon}
        alt={icon}
        className="imgIcon"
        onClick={() => setIsLoading(!isLoadin)}
      />
      <ul
        className={isLoadin ? "openNav" : "nav_links"}
        onClick={() => setIsLoading(false)}
      >
        {props.home ? (
          <li>
            <NavLink to={props.h ? props.h : ""}>{props.home}</NavLink>
          </li>
        ) : (
          ""
        )}

        {props.contact ? (
          <li>
            <NavLink to={props.c ? props.c : ""}>{props.contact}</NavLink>
          </li>
        ) : (
          ""
        )}

        {props.create ? (
          <li>
            <NavLink to={props.cr ? props.cr : ""}>{props.create}</NavLink>
          </li>
        ) : (
          ""
        )}

        {props.order ? (
          <li>
            <NavLink to={props.o ? props.o : ""}>{props.order}</NavLink>
          </li>
        ) : (
          ""
        )}

        {props.basket ? (
          <li>
            <NavLink to={props.b ? props.b : ""}>{props.basket}</NavLink>
          </li>
        ) : (
          ""
        )}

        {props.login ? (
          <li>
            <NavLink to={props.l ? props.l : ""}>{props.login}</NavLink>
          </li>
        ) : (
          ""
        )}

        {props.logout ? (
          <li>
            <NavLink
              to={props.logout ? props.lo : ""}
              onClick={() => dispatch(logout())}
            >
              {props.logout}
            </NavLink>
          </li>
        ) : (
          ""
        )}
      </ul>
    </header>
  );
};
export default Navbar;
