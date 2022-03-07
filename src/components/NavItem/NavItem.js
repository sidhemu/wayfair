import React, { useState } from "react";
import PropTypes from "prop-types";
const NavItem = (props) => {
  const { icon, children } = props;
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        <span>Siddharth Hembrom</span>
        <span>{icon}</span>
      </a>

      {open && children}
    </li>
  );
};

NavItem.prototype = {
  icon: PropTypes.node,
  children: PropTypes.element,
};

export default NavItem;
