// import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import NavbarContainer from "./containers/NavbarContainer/NavbarContainer";
import SidebarContainer from "./containers/SidebarContainer/SidebarContainer";

function App() {
  const [sidebarToggle, updateSidebar] = useState(false);

  const updateSideBarToggle = (data) => {
    updateSidebar(data);
  };
  return (
    <>
      <SidebarContainer
        updateSideBarToggle={updateSideBarToggle}
        sidebarToggle={sidebarToggle}
      />
      <NavbarContainer sidebarToggle={sidebarToggle} />
    </>
  );
}

export default App;
