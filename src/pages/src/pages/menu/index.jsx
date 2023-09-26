import React, { useState } from "react";
import "../navbar/navbar.css";
import { useNavigate } from "react-router-dom";

function Menu() {
  const navigate = useNavigate(); // Obtém a função de navegação

  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const [submenuVisible, setSubmenuVisible] = useState(false); // Estado para controlar a visibilidade do submenu

  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else {
      setActive("nav__menu");
    }

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else {
      setIcon("nav__toggler");
    }
  };

  const toggleSubmenu = (event) => {
    event.preventDefault(); // Evita o comportamento padrão do link (refresh da página)
    setSubmenuVisible(!submenuVisible); // Alterna a visibilidade do submenu
  };

  const handleLogout = () => {
    // Remove o token de autenticação do localStorage
    localStorage.removeItem("authToken");

    // Redireciona o usuário para a página de login
    navigate("/login"); // Use a função navigate para redirecionar
  };

  return (
    <nav className="nav">
      <a href="http://localhost:3001/veiculos" className="nav__brand">
        SISTEMA DE GERENCIAMENTO DE FROTAS
      </a>
      <ul className={active}>
        <li className="nav__item">
          <a href="#" className="nav__link" onClick={toggleSubmenu}>
            Veículos
          </a>
          {submenuVisible && (
            <ul className="submenu">
              <li className="submenu__item">
                <a
                  href="http://localhost:3001/veiculos/novo"
                  className="submenu__link"
                >
                  Novo Veículo
                </a>
              </li>
              <li className="submenu__item">
                <a
                  href="http://localhost:3001/veiculos/lista"
                  className="submenu__link"
                >
                  Lista de Veículos
                </a>
              </li>
            </ul>
          )}
        </li>
        <li className="nav__item">
          <a href="http://localhost:3001/signup" className="nav__link">
            Motoristas
          </a>
        </li>
        <li className="nav__item">
          <a href="http://localhost:3001/signup" className="nav__link">
            Modelos
          </a>
        </li>
        <li>
          <button onClick={handleLogout}>Logout</button>
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

export default Menu;
