import React, { useState } from "react";
import Menu from "../../svg/bars-solid.svg";
import Close from "../../svg/times-circle-regular.svg";
import "./Header.css";

import { Link } from "react-router-dom";

export const Header = () => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = (e) => {
    setMenu(!menu);
  };
  const styleMenu = {
    left: menu ? 0 : "-100%",
  };

  return (
    <header>
      <div className="logo">
        <h1>
          <Link to="/">Citizen</Link>
        </h1>
      </div>
      <ul style={styleMenu}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/user">Login/Register</Link>
        </li>
        <li onClick={toggleMenu}>
          <img src={Close} className="menu" alt="Close Icon" width="30" />
        </li>
      </ul>
      <div className="menu" onClick={toggleMenu}>
        <img src={Menu} alt="Menu Bar Icon" width="30" />
      </div>
    </header>
  );
};
