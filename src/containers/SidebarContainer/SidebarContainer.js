import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Sidebar from "../../components/Sidebar/Sidebar";
import { fetchData } from "../../services/api";

const SidebarContainer = (props) => {
  const { updateSideBarToggle, sidebarToggle } = props;
  const [sideBarData, updateSidebarData] = useState([]);

  useEffect(() => {
    fetchData().then((data) => {
      console.log("data fetched ==>", data);
      updateSidebarData(data);
    });
  }, []);

  return (
    <>
      <Sidebar
        sideBarData={sideBarData}
        sidebarToggle={sidebarToggle}
        updateSidebarfn={updateSideBarToggle}
      />
    </>
  );
};

SidebarContainer.propTypes = {
  updateSideBarToggle: PropTypes.func.isRequired,
  sidebarToggle: PropTypes.bool.isRequired,
};

export default SidebarContainer;
