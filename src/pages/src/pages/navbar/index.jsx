import React, { useState } from "react";
import "../navbar/navbar.css";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <a href="http://localhost:3001" className="nav__brand">
        SISTEMA DE GERENCIAMENTO DE FROTAS
      </a>
      <ul className={active}>
        <li className="nav__item">
          <a href="http://localhost:3001/login" className="nav__link">
            LOGIN
          </a>
        </li>
        <li className="nav__item">
          <a href="http://localhost:3001/signup" className="nav__link">
            SIGNUP
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;
