import "@testing-library/jest-dom";
import * as React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Sidebar from "./Sidebar";
import SidebarList from "../SidebarList/SidebarList";
import { mockData } from "../../services/api";

let dataArr = mockData;

test("render sidebar component", () => {
  render(<Sidebar sideBarData={[dataArr]} sidebarToggle={false} />);
  const hamburgerMenuDiv = screen.getByTestId("hamburger-menu");
  expect(hamburgerMenuDiv).toBeInTheDocument();
});

test("render sub list in side nav bar", () => {
  const intitialState = true;
  const recurrsion = jest.fn();
  const { container } = render(
    <SidebarList
      toggle={intitialState}
      item={dataArr}
      recurRenderList={recurrsion}
    />
  );
  expect(container.querySelector(".side-nav-text")).toBeInTheDocument();
});

test("testing expand list", () => {
  const recurrsion = jest.fn();
  const { container } = render(
    <SidebarList toggle={true} item={dataArr} recurRenderList={recurrsion} />
  );
  fireEvent.click(container.querySelector(".children-arrow"));

  expect(container.querySelector(".children-nav")).toBeInTheDocument();
});
