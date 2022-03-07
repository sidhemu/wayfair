import "@testing-library/jest-dom";
import * as React from "react";
import { render, screen } from "@testing-library/react";
import SidebarList from "./SidebarList";
import { mockData, mockDataWithUrl } from "../../services/api";

let dataArr = mockData;
let dataWithUrl = mockDataWithUrl;

test("render sidebar list component", () => {
  render(<SidebarList item={dataArr} toggle={false} />);
  const sidebarlistElement = screen.getByTestId("sidebar-list");
  const sidebarlistPElem = screen.getByTestId("sidebar-list-p");
  expect(sidebarlistElement).toBeInTheDocument();
  expect(sidebarlistPElem).toBeInTheDocument();
});

test("check for url", () => {
  const recurrsion = jest.fn();
  const { container } = render(
    <SidebarList
      item={dataWithUrl}
      toggle={true}
      recurRenderList={recurrsion}
    />
  );

  expect(container.querySelector(".url-link")).toBeInTheDocument();
});
