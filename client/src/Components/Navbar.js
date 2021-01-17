import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../StyleCss/navbar/onavbar.css";
import icon from "../images/openMenu.png";

const Navbar = (props) => {
  const [isLoadin, setIsLoading] = useState(false);

  return (
    <header className="header">
      <img
        src={icon}
        alt={icon}
        className={isLoadin ? "icon" : ""}
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
        {props.myMenu ? (
          <li>
            <NavLink to={props.my ? props.my : ""}>{props.myMenu}</NavLink>
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
      </ul>
    </header>
  );
};
export default Navbar;
