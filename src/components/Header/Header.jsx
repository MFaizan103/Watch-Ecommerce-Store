import React, { useContext, useState } from "react";
import Menu from "../../svg/bars-solid.svg";
import Close from "../../svg/times-circle-regular.svg";
import Cart from "../../svg/shopping-cart-solid.svg";
import "./Header.css";

import { Link } from "react-router-dom";
import { DataContext } from "./../Context/DataProvider";

export const Header = () => {
  const { cart } = useContext(DataContext);

  const [menu, setMenu] = useState(false);

  const toggleMenu = (e) => {
    setMenu(!menu);
  };

  const styleMenu = {
    left: menu ? 0 : "-100%",
  };

  return (
    <header>
      <div className="menu" onClick={toggleMenu}>
        <img src={Menu} alt="Menu Bar Icon" width="30" />
      </div>
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
      <div className="cart-icon">
        <span>{cart.length}</span>
        <Link to="/cart">
          <img src={Cart} alt="Cart Icon" width="30" />
        </Link>
      </div>
    </header>
  );
};
