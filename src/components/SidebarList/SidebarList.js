import React, { useState } from "react";
import PropTypes from "prop-types";
import * as MdIcons from "react-icons/md";
import "./SidebarList.css";

const SidebarList = (props) => {
  const { toggle, item, recurRenderList } = props;
  const [isVisible, updateVisibility] = useState(false);
  const expand = (e) => {
    updateVisibility(!isVisible);
    e.stopPropagation();
  };
  return (
    <li
      data-testid="sidebar-list"
      className={toggle ? "side-nav-text active" : "side-nav-text"}
    >
      <div className="nav-tab">
        <>
          <p
            data-testid="sidebar-list-p"
            className={toggle ? "side-nav-title active" : "side-nav-title"}
          >
            {item?.icon && <span>{item.icon}</span>}
            {item?.url === null ? (
              <span>{item.title}</span>
            ) : (
              <a href={item.url}>{item.title}</a>
            )}
          </p>
          {item?.icon && (
            <i className={toggle ? "side-nav-icon" : "side-nav-icon active"}>
              {item.icon}
            </i>
          )}
        </>

        {item.children && item.children.length ? (
          <span className="children-arrow" onClick={expand}>
            <MdIcons.MdKeyboardArrowDown />
          </span>
        ) : null}
      </div>
      {toggle && isVisible && (
        <div className="children-nav">
          {item.children && item.children.length && (
            <ul>{recurRenderList(item.children)}</ul>
          )}
        </div>
      )}
    </li>
  );
};

SidebarList.propTypes = {
  toggle: PropTypes.bool,
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.node,
    children: PropTypes.array,
    url: PropTypes.string,
  }),
  recurRenderList: PropTypes.func,
};

export default SidebarList;
