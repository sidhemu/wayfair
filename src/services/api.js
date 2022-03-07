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
