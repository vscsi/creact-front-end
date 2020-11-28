import React from "react";
import * as MaterialUI from "@material-ui/core";
import DashboardMainCss from "./DashboardMain.module.css";
import DashboardSidebarCss from "./DashboardSidebar.module.css";

function DashboardSidebar() {
  return (
    <>
      {/* sidebar1 */}
      <MaterialUI.Grid
        md={1}
        spacing={0}
        justify="center"
        direction="column"
        className={`${DashboardMainCss.testGrey} ${DashboardSidebarCss.sideBarBorder}`}
      >
        <MaterialUI.Button
          variant="contained"
          color="primary"
          size="small"
          className={DashboardSidebarCss.workspaceIcon}
        >
          User
        </MaterialUI.Button>
        <div className={DashboardSidebarCss.workSpaceSeparator}></div>
        <MaterialUI.Button
          variant="contained"
          color="primary"
          className={DashboardSidebarCss.workspaceIcon}
          size="small"
        >
          W
        </MaterialUI.Button>
        <MaterialUI.Button
          variant="contained"
          color="primary"
          className={DashboardSidebarCss.workspaceIcon}
          size="small"
        >
          W
        </MaterialUI.Button>
      </MaterialUI.Grid>

      {/* sidebar2 */}
      <MaterialUI.Grid
        md={2}
        spacing={0}
        direction="column"
        className={`${DashboardMainCss.testGrey} ${DashboardSidebarCss.sideBarBorder}`}
      >
        Sidebar2
        <MaterialUI.Button
          variant="contained"
          color="primary"
          className={DashboardSidebarCss.workspaceIcon}
          size="small"
        >
          Chatroom
        </MaterialUI.Button>
        <MaterialUI.Button
          variant="contained"
          color="primary"
          className={DashboardSidebarCss.workspaceIcon}
          size="small"
        >
          Chatroom
        </MaterialUI.Button>
        <MaterialUI.Button
          variant="contained"
          color="primary"
          className={DashboardSidebarCss.workspaceIcon}
          size="small"
        >
          Chatroom
        </MaterialUI.Button>
      </MaterialUI.Grid>
    </>
  );
}

export default DashboardSidebar;
