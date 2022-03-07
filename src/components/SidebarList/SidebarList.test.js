import "@testing-library/jest-dom";
import * as React from "react";
import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import SidebarList from "./SidebarList";
import * as MdIcons from "react-icons/md";
const icon = <MdIcons.MdKeyboardArrowDown />;

const data = {
  title: "Reporting",
  url: null,
  id: "menu-reporting",
  icon: icon,
  hasAlert: null,
  children: [
    {
      title: "Sales Dashboard",
      url: "https://partnerswayfaircom.csnzoo.com/v/sales_dashboard/index",
      id: "menu-sales-dashboard",
      icon: null,
      hasAlert: null,
      children: [],
    },
    {
      title: "Forecast",
      url: "https://partnerswayfaircom.csnzoo.com/v/forecast/index/",
      id: "menu-forecast",
      icon: null,
      hasAlert: null,
      children: [],
    },
    {
      title: "Consumer Insights",
      url: "https://partnerswayfaircom.csnzoo.com/d/tools/report/dashboard#consumerinsights",
      id: "menu-consumer-insights",
      icon: null,
      hasAlert: null,
      children: [],
    },
    {
      title: "Supplier Registration Compliance",
      url: "https://partnerswayfaircom.csnzoo.com/v/tools/supplier_registration_compliance/index",
      id: "menu-supplier-registration-compliance",
      icon: null,
      hasAlert: null,
      children: [],
    },
    {
      title: "Fulfillment Performance Diagnostics",
      url: "https://partnerswayfaircom.csnzoo.com/v/supplier_dashboard/supplier_fulfillment/index",
      id: "menu-fulfillment-performance-diagnostics",
      icon: null,
      hasAlert: null,
      children: [],
    },
    {
      title: "Lead Time Performance",
      url: "https://partnerswayfaircom.csnzoo.com/v/lead_time_performance/index",
      id: "menu-leadtime-performance",
      icon: null,
      hasAlert: null,
      children: [],
    },
    {
      title: "Customer Incidents Dashboard",
      url: "https://partnerswayfaircom.csnzoo.com/v/customer-incidents-dashboard/index",
      id: "menu-customer-incidents-dashboard",
      icon: null,
      hasAlert: null,
      children: [],
    },
  ],
};

test("render sidebar list component", () => {
  render(<SidebarList item={data} toggle={false} />);
  const sidebarlistElement = screen.getByTestId("sidebar-list");
  const sidebarlistPElem = screen.getByTestId("sidebar-list-p");
  expect(sidebarlistElement).toBeInTheDocument();
  expect(sidebarlistPElem).toBeInTheDocument();
  expect(sidebarlistPElem).toHaveTextContent("Reporting");
});
