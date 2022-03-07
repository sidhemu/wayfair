import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import SidebarContainer from "./containers/SidebarContainer/SidebarContainer";

test("renders learn react link", () => {
  const { container: appContainer } = render(<App />);
  expect(
    appContainer.querySelector(".sidebar .menu-bar .hamburger-icon")
  ).toBeInTheDocument();
  expect(
    appContainer.querySelector(".nav-bar .wayfair-logo")
  ).toBeInTheDocument();
});

test("render expanded sidebar container onclick", () => {
  const intitialState = false;
  const updateToggle = jest.fn();

  const { container, rerender } = render(
    <SidebarContainer
      sidebarToggle={intitialState}
      updateSideBarToggle={updateToggle}
    />
  );

  fireEvent.click(container.querySelector(".menu-bar"));
  const changeState = !intitialState;
  rerender(
    <SidebarContainer
      sidebarToggle={changeState}
      updateSideBarToggle={updateToggle}
    />
  );
  expect(container.querySelector(".active")).toBeInTheDocument();
});
