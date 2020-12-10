import React, { useState } from "react";
import * as MaterialUI from "@material-ui/core";
import DashboardSidebarCss from "./DashboardSidebar.module.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useHistory,
} from "react-router-dom";

const DashboardFeatureSidebar = () => {
  return (
    <MaterialUI.Grid
      container
      md={2}
      spacing={0}
      alignItems="center"
      justify="space-around"
      direction="column"
      className={`${DashboardSidebarCss.sideBarBorder} ${DashboardSidebarCss.sidebar2Background}`}
    >
      <NavLink
        to="/workspace/chat"
        className={DashboardSidebarCss.featureIconLink}
      >
        <MaterialUI.Tooltip title="Chatroom" placement="right-end">
          <div className={`${DashboardSidebarCss.featureIcon}`}>Chatroom</div>
        </MaterialUI.Tooltip>
      </NavLink>

      <NavLink
        to="/workspace/docs"
        className={DashboardSidebarCss.featureIconLink}
      >
        <MaterialUI.Tooltip
          title="Collaboration document"
          placement="right-end"
        >
          <div className={DashboardSidebarCss.featureIcon}>
            Collaboration Document
          </div>
        </MaterialUI.Tooltip>
      </NavLink>

      <NavLink
        to="/workspace/dropbox"
        className={DashboardSidebarCss.featureIconLink}
      >
        <MaterialUI.Tooltip title="Dropbox" placement="right-end">
          <div className={DashboardSidebarCss.featureIcon}>Dropbox</div>
        </MaterialUI.Tooltip>
      </NavLink>

      <NavLink
        to="/workspace/tasks"
        className={DashboardSidebarCss.featureIconLink}
      >
        <MaterialUI.Tooltip
          title="Collaboration Task List"
          placement="right-end"
        >
          <div className={DashboardSidebarCss.featureIcon}>
            Collaboration Task List
          </div>
        </MaterialUI.Tooltip>
      </NavLink>

      <NavLink
        to="/workspace/calendar"
        className={DashboardSidebarCss.featureIconLink}
      >
        <MaterialUI.Tooltip title="Chatroom" placement="right-end">
          <div className={DashboardSidebarCss.featureIcon}>Calender</div>
        </MaterialUI.Tooltip>
      </NavLink>

      <NavLink
        to="/workspace/whiteboard"
        className={DashboardSidebarCss.featureIconLink}
      >
        <MaterialUI.Tooltip title="Whiteboard" placement="right-end">
          <div className={DashboardSidebarCss.featureIcon}>Whiteboard</div>
        </MaterialUI.Tooltip>
      </NavLink>

      <NavLink
        to="/workspace/video"
        className={DashboardSidebarCss.featureIconLink}
      >
        <MaterialUI.Tooltip title="Video" placement="right-end">
          <div className={DashboardSidebarCss.featureIcon}>Video</div>
        </MaterialUI.Tooltip>
      </NavLink>
    </MaterialUI.Grid>
  );
};

export default DashboardFeatureSidebar;
