import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.png";
import "./header.style.scss";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="header__brand">
        <div className="header__logo-box">
          <img src={logo} alt="logo" className="header__logo" />
          <span className="header__title">Jibannagar Degree College</span>
        </div>
      </Link>
    </header>
  );
};

export default Header;
