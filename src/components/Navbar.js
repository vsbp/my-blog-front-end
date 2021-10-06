import React, { useState } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import "./assets/css/Navbar.css";

function Navbar() {

  const [show, setShow] = useState(true);

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <Nav className="navbar-gray">
        <div className="navbar-gray-margin">
          <NavItem className="nav-item-menu">
            <NavLink
              to="/"
              href="https://www.globo.com/"
              className="bar-links color-blue"
            >
              globo.com
            </NavLink>
          </NavItem>
          <NavItem className="nav-item-menu">
            <NavLink
              to="/"
              href="https://g1.globo.com/"
              className="bar-links color-wine"
            >
              g1
            </NavLink>
          </NavItem>
          <NavItem className="nav-item-menu">
            <NavLink
              to="/"
              href="https://ge.globo.com/"
              className="bar-links color-green"
            >
              ge
            </NavLink>
          </NavItem>
          <NavItem className="nav-item-menu">
            <NavLink
              to="/"
              href="https://gshow.globo.com/"
              className="bar-links color-orange"
            >
              gshow
            </NavLink>
          </NavItem>
          <NavItem className="nav-item-menu">
            <NavLink
              to="/"
              href="https://globoplay.globo.com/"
              className="bar-links color-blue-rgb"
            >
              vídeos
            </NavLink>
          </NavItem>
          <NavItem className="nav-item-menu">
            <NavLink
              to="/"
              href="https://www.techtudo.com.br/"
              className="bar-links color-gray"
            >
              tecnologia
            </NavLink>
          </NavItem>
        </div>
      </Nav>
      <Nav className="navbar">
        <NavItem className="navbar-container">
          <NavLink to="/" href="/" className="navbar-logo">
            O GLOBO
          </NavLink>
        </NavItem>
        <NavItem className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </NavItem>
        <ul
          className={click ? "nav-menu active" : "nav-menu"}
          id="nav-item-links"
        >
          <NavItem className="nav-item-bars nav-item-menu">
            <NavLink
              to="/"
              href="/"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Home
            </NavLink>
          </NavItem>
          <NavItem className="nav-item-bars  nav-item-menu" style={{ display: show ? "none" : "none" }}>
            <NavLink
              to="/blog"
              href="/blog"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Blog
            </NavLink>
          </NavItem>
          <NavItem className="nav-item-bars  nav-item-menu">
            <NavLink
              to="/crud"
              href="/crud"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Criar blog
            </NavLink>
          </NavItem>
        </ul>
      </Nav>
    </>
  );
}

export default Navbar;
