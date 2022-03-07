import * as MdIcons from "react-icons/md";
export const fetchData = () => {
  return fetch(
    "https://run.mocky.io/v3/b49604f2-3705-4e14-992f-1378fb4b598f?mocky-delay=1000ms"
  )
    .then((res) => res.json())
    .then((data) => {
      //   console.log("reponse ==> ", data);
      if (data?.length) {
        data.forEach((element) => {
          switch (element?.icon) {
            case "reporting":
              element.icon = <MdIcons.MdNoteAlt />;
              break;
            case "tickets":
              element.icon = <MdIcons.MdMailOutline />;
              break;
            case "castleGate":
              element.icon = <MdIcons.MdAccountBalance />;
              break;
            case "orders":
              element.icon = <MdIcons.MdShoppingCart />;
              break;
            case "inventory":
              element.icon = <MdIcons.MdOutlineInventory2 />;
              break;
            case "products":
              element.icon = <MdIcons.MdOutlineRedeem />;
              break;
            case "premiumShelf":
              element.icon = <MdIcons.MdBookmarkAdded />;
              break;
            case "downloadCenter":
              element.icon = <MdIcons.MdOutlineFileDownload />;
              break;
            case "helpAndSupport":
              element.icon = <MdIcons.MdOutlineHelpOutline />;
              break;

            default:
              element.icon = <MdIcons.MdOutlineManageAccounts />;
              break;
          }
        });
        return data;
      }
    });
};

export const mockData = {
  title: "Reporting",
  url: null,
  id: "menu-reporting",
  icon: <MdIcons.MdNoteAlt />,
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

export const mockDataWithUrl = {
  title: "Tickets",
  url: "https://partnerswayfaircom.csnzoo.com/app/tickets",
  id: "menu-ticket",
  icon: "tickets",
  hasAlert: null,
  children: [],
};
