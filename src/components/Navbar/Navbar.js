import React from "react";
import PropTypes from "prop-types";
import wayfairLogo from "../../assets/wayfair-partner-home-logo.svg";
import Dropdown from "../Dropdown/Dropdown";
import "./Navbar.css";

const Navbar = (props) => {
  const { sidebarToggle } = props;
  return (
    <>
      <nav className={sidebarToggle ? "nav-bar active" : "nav-bar"}>
        <img className="wayfair-logo" src={wayfairLogo} alt="wayfair" />
        <Dropdown />
      </nav>
    </>
  );
};

Navbar.prototype = {
  sidebarToggle: PropTypes.bool,
};

export default Navbar;
