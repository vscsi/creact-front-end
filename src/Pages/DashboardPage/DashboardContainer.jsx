import React, { useState, useEffect } from "react";
import DashboardContainerCss from "./DashboardContainer.module.css";
import { Grid } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // useParams,
} from "react-router-dom";
import DashboardNavbar from "./DashboardComponent/DashboardNavbar";
import ChatroomContainer from "./DashboardFeatures/ChatroomPage/ChatroomContainer";
import CollabNoteContainer from "./DashboardFeatures/CollaborationNotePage/CollabNoteContainer";
import DropboxContainer from "./DashboardFeatures/DropboxPage/DropboxContainer";
import CollabTaskContainer from "./DashboardFeatures/CollaborationTaskPage/CollabTaskContainer";
import CalenderContainer from "./DashboardFeatures/CalenderPage/CalenderContainer";
import WhiteboardContainer from "./DashboardFeatures/WhiteboardPage/WhiteboardContainer";
import VideoContainer from "./DashboardFeatures/VideoPage/VideoContainer";
import VideoCreateRoom from "./DashboardFeatures/VideoPage/VideoCreateRoom";
// import DashboardAddSocial from "./DashboardComponent/DashboardAddSocial";
import DashboardCreateWorkspace from "./DashboardComponent/DashboardCreateWorkspace";
import DashboardProfileHome from "./DashboardComponent/DashboardProfileHome.js";
import DashboardFeatureSidebar from "./DashboardComponent/DashboardFeatureSidebar";
import DashboardProfileSidebar from "./DashboardComponent/DashboardProfieSidebar";
import DashboardSearchWorkspace from "./DashboardComponent/DashboardSearchWorkspace";
import Axios from "axios";

function DashboardContainer() {
  const [userName, setUserName] = useState("");
  const [userWorkspaces, setUserWorkspaces] = useState([]);
  const [currentWorkspace, setCurrentWorkspace] = useState("");
  const [isAdmin, setAdmin] = useState(false);
  const [users, setUsers] = useState([]);
  const [allWorkspaces, setAllWorkspaces] = useState([]);

  const getUserWorkspaces = () => {
    try {
      // Axios.get("http://localhost:4000/workspace/list", {
      Axios.get(`${process.env.REACT_APP_API_SERVER}/workspace/list`, {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      }).then((res) => {
        console.log(`all workspaces`);
        console.log(res);
        // console.log(res.data.allWorkspaces);
        setUserWorkspaces(res.data.userWorkspaces);
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  const getUserInfo = () => {
    try {
      // Axios.get("http://localhost:4000/username", {
      Axios.get(`${process.env.REACT_APP_API_SERVER}/username`, {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      }).then((res) => {
        setUserName(res.data.userName);
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  const getCurrentWorkspace = () => {
    const path = window.location.pathname;
    // console.log(`url is below`);
    // console.log(path);
    // eslint-disable-next-line
    const regex = /\/workspace\/([^\/]+)/;
    const result = path.match(regex);
    // console.log(`currworkspace url is below`);
    // console.log(result);
    const currWorkspace = result[1];
    setCurrentWorkspace(currWorkspace);
    //send post request to server and check if user is admin
    checkIfAdminUsers(currWorkspace);
  };

  const getAllWorkspaces = () => {
    try {
      // Axios.get("http://localhost:4000/workspace/all", {
      Axios.get(`${process.env.REACT_APP_API_SERVER}/workspace/all`, {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      }).then((res) => {
        console.log(`res from workspace/all`);
        console.log(res);
        setAllWorkspaces(res.data);
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  const checkIfAdminUsers = (workspace) => {
    try {
      //1. send post request to server, query to "user_workspace" table
      Axios.post(
        // "http://localhost:4000/workspace/check",
        `${process.env.REACT_APP_API_SERVER}/workspace/check`,
        {
          workspaceName: workspace,
        },
        {
          headers: { "x-access-token": localStorage.getItem("token") },
        }
      ).then((res) => {
        console.log(`Getting post request in /workspace/check`);
        console.log(res);
        setAdmin(res.data.isAdmin);
        setUsers(res.data.allUsers);
      });
      //2. check if that user is the workspace_admin, return the workspace_admin boolean
      //3. if yes, that user can have the right to assign task, and can see the create task UI
      //4. if no, that user can only see all the tasklists in that workspace
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getUserWorkspaces();
    getUserInfo();
    getCurrentWorkspace();
    getAllWorkspaces();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Grid
        container
        direction="row"
        alignItems="stretch"
        className={`${DashboardContainerCss.containerHeight} ${DashboardContainerCss.containerBackground}`}
      >
        <Router>
          <DashboardProfileSidebar
            name={userName}
            workspaces={userWorkspaces}
          />
          <DashboardFeatureSidebar currentWorkspace={currentWorkspace} />
          <Grid
            Container
            direction="row"
            md={9}
            spacing={0}
            alignItems={"flex-end"}
          >
            <DashboardNavbar />
            <Switch>
              {/* for profile route */}
              <Route exact path="/profile" component={DashboardProfileHome} />
              {/* <Route path="/profile/find" component={DashboardAddSocial} /> */}
              <Route
                path="/profile/create"
                component={DashboardCreateWorkspace}
              />
              <Route path="/profile/search">
                <DashboardSearchWorkspace allWorkspaces={allWorkspaces} />
              </Route>
              {/* for workspace route */}
              <Route
                path={`/workspace/:${currentWorkspace}/chat`}
                component={ChatroomContainer}
              />
              <Route
                path={`/workspace/:${currentWorkspace}/docs`}
                component={CollabNoteContainer}
              />
              <Route
                path={`/workspace/:${currentWorkspace}/dropbox`}
                component={DropboxContainer}
              />
              <Route
                path={`/workspace/:${currentWorkspace}/tasks`}
                render={(props) => (
                  <CollabTaskContainer
                    {...props}
                    isAdmin={isAdmin}
                    users={users}
                  />
                )}
              ></Route>
              <Route
                path={`/workspace/:${currentWorkspace}/calender`}
                component={CalenderContainer}
              />
              <Route
                path={`/workspace/:${currentWorkspace}/whiteboard`}
                component={WhiteboardContainer}
              />
              <Route
                path={`/workspace/:${currentWorkspace}/video`}
                exact
                component={VideoCreateRoom}
              />
              <Route
                path={`/workspace/:${currentWorkspace}/video/:roomId`}
                exact
                component={VideoContainer}
              />
            </Switch>
          </Grid>
        </Router>
      </Grid>
    </>
  );
}

export default DashboardContainer;
