import React from "react";
import * as MdIcons from "react-icons/md";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import NavItem from "../NavItem/NavItem";
import "./Dropdown.css";

const Dropdown = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <NavItem icon={<MdIcons.MdKeyboardArrowDown />}>
          <DropdownMenu />
        </NavItem>
      </ul>
    </nav>
  );
};

export default Dropdown;
