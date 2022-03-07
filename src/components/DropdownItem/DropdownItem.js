import React from "react";
import PropTypes from "prop-types";

const DropdownItem = (props) => {
  const { leftIcon, rightIcon, children, goToMenu, setActiveMenu } = props;
  return (
    <a
      href="#"
      className="menu-item"
      onClick={() => goToMenu && setActiveMenu(goToMenu)}
    >
      {leftIcon && <span className="icon-button">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="icon-right">{rightIcon}</span>}
    </a>
  );
};

DropdownItem.propTypes = {
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  goToMenu: PropTypes.string,
  children: PropTypes.any,
  setActiveMenu: PropTypes.func,
};

export default DropdownItem;
