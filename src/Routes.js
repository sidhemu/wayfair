import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";

const RouterComponent = () => {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" />
        </Routes>
      </Router>
    </>
  );
};

export default RouterComponent;
