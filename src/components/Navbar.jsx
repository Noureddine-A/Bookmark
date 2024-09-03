import React from "react";

import "./Navbar.css";

import Logo from "../assets/images/logo-bookmark.svg";
import HamburgerIcon from "../assets/images/icon-hamburger.svg";

const Navbar = () => {
  return (
    <section id="navbar">
      <div className="bookmark__navbar-container">
        <div className="bookmark__navbar-logo">
          <img src={Logo} alt={Logo} />
        </div>
        <div className="bookmark__navbar-hamburger">
          <img src={HamburgerIcon} alt={HamburgerIcon} />
        </div>
        <div className="bookmark__navbar-options-container">
          <nav className="bookmark__navbar-options">
            <a href="Features">FEATURES</a>
            <a href="Pricing">PRICING</a>
            <a href="Contact">CONTACT</a>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
