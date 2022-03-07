import React, { useState, useEffect, useRef } from "react";
import * as MdIcons from "react-icons/md";
import { CSSTransition } from "react-transition-group";
import DropdownItem from "../DropdownItem/DropdownItem";

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  const setActiveMenufunc = (data) => {
    setActiveMenu(data);
  };

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem>Account Setting</DropdownItem>
          <DropdownItem>User Management</DropdownItem>
          <DropdownItem>My Team</DropdownItem>
          <DropdownItem
            rightIcon={<MdIcons.MdChevronRight />}
            goToMenu="settings"
            setActiveMenu={setActiveMenufunc}
          >
            Settings
          </DropdownItem>
          <DropdownItem>Logout</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "settings"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem
            goToMenu="main"
            leftIcon={<MdIcons.MdChevronLeft />}
            setActiveMenu={setActiveMenufunc}
          >
            <h4>Settings</h4>
          </DropdownItem>
          <DropdownItem>Test 1</DropdownItem>
          <DropdownItem>Test 1</DropdownItem>
          <DropdownItem>Test 1</DropdownItem>
          <DropdownItem>Test 1</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default DropdownMenu;
