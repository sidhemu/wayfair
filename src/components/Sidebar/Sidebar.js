import React from "react";
import PropTypes from "prop-types";
import * as MdIcons from "react-icons/md";
import "./Sidebar.css";

import SidebarList from "../SidebarList/SidebarList";

const Sidebar = (props) => {
  const { sideBarData, updateSidebarfn, sidebarToggle } = props;

  const showSidebar = () => {
    updateSidebarfn(!sidebarToggle);
  };

  const recurRenderList = (data) => {
    if (data?.length) {
      return data.map((item, index) => {
        return (
          <SidebarList
            key={index}
            toggle={sidebarToggle}
            item={item}
            recurRenderList={recurRenderList}
          />
        );
      });
    }
  };

  return (
    <>
      <div className={sidebarToggle ? "sidebar active" : "sidebar"}>
        <div to="#" className="menu-bar">
          <MdIcons.MdMenu onClick={showSidebar} />
        </div>
      </div>
      <nav className={sidebarToggle ? "side-nav-menu active" : "side-nav-menu"}>
        <ul className="side-nav-menu-items">{recurRenderList(sideBarData)}</ul>
      </nav>
    </>
  );
};

Sidebar.propTypes = {
  sidebarToggle: PropTypes.bool,
  sideBarData: PropTypes.array.isRequired,
  updateSidebarfn: PropTypes.func,
};

export default Sidebar;
