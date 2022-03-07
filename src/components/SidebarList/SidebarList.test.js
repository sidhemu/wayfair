import "@testing-library/jest-dom";
import * as React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import SidebarList from "./SidebarList";
import { mockData } from "../../services/api";

let dataArr = mockData;

test("render sidebar list component", () => {
  render(<SidebarList item={dataArr} toggle={false} />);
  const sidebarlistElement = screen.getByTestId("sidebar-list");
  const sidebarlistPElem = screen.getByTestId("sidebar-list-p");
  expect(sidebarlistElement).toBeInTheDocument();
  expect(sidebarlistPElem).toBeInTheDocument();
});

test("check for url", () => {
  const { container } = render(<SidebarList item={dataArr} toggle={true} />);
});
