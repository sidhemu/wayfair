import React from "react";
import PropTypes from "prop-types";
import Navbar from "../../components/Navbar/Navbar";

const NavbarContainer = (props) => {
  const { sidebarToggle } = props;

  return (
    <>
      <Navbar sidebarToggle={sidebarToggle} />
    </>
  );
};

NavbarContainer.propTypes = {
  sidebarToggle: PropTypes.bool.isRequired,
};

export default NavbarContainer;
