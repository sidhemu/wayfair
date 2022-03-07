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
            {item && item?.icon && <span>{item.icon}</span>}
            {item && !item.url && <span>{item.title}</span>}
            {item && item.url !== null && (
              <a className="url-link" href={item.url}>
                {item.title}
              </a>
            )}
          </p>
          {item && item?.icon && (
            <i className={toggle ? "side-nav-icon" : "side-nav-icon active"}>
              {item.icon}
            </i>
          )}
        </>

        {item && item?.children?.length > 0 && (
          <span
            data-testid="span-expand"
            className="children-arrow"
            onClick={expand}
          >
            <MdIcons.MdKeyboardArrowDown />
          </span>
        )}
      </div>
      {toggle && isVisible && (
        <div data-testid="children-list" className="children-nav">
          {item && item?.children?.length && (
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
