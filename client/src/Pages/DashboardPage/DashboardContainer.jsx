import React from 'react';
import DashboardContainerCss from './DashboardContainer.module.css';
import DashboardSidebar from './DashboardComponent/DashboardSidebar';
import DashboardMain from './DashboardComponent/DashboardMain';
import { Grid } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DashboardNavbar from './DashboardComponent/DashboardNavbar';
import ChatroomContainer from './DashboardFeatures/ChatroomPage/ChatroomContainer';
import CollabTaskContainer from './DashboardFeatures/CollaborationTaskPage/CollabTaskContainer';
import DropboxContainer from './DashboardFeatures/DropboxPage/DropboxContainer';
import WhiteboardContainer from './DashboardFeatures/WhiteboardPage/WhiteboardContainer';
import CollabNoteContainer from './DashboardFeatures/CollaborationNotePage/CollabNoteContainer';
import VideoCreateRoom from './DashboardFeatures/VideoPage/VideoCreateRoom';
import VideoContainer from './DashboardFeatures/VideoPage/VideoContainer';
import CalenderContainer from './DashboardFeatures/CalenderPage/CalenderContainer';


function DashboardContainer() {
  return (
    <>
          <Grid
        container
        direction="row"
        alignItems="stretch"
        className={`${DashboardContainerCss.containerHeight} ${DashboardContainerCss.containerBackground}`}
      >
        <Router>
          <DashboardSidebar />
          <Grid
            Container
            direction="row"
            md={9}
            spacing={0}
            alignItems={"flex-end"}
          >
            <DashboardNavbar />
            <Switch>
              <Route path="/workspace/chatroom" component={ChatroomContainer} />
              <Route
                path="/workspace/documents"
                component={CollabNoteContainer}
              />
              <Route path="/workspace/dropbox" component={DropboxContainer} />
              <Route path="/workspace/tasks" component={CollabTaskContainer} />
              <Route path="/workspace/calender" component={CalenderContainer} />
              <Route
                path="/workspace/whiteboard"
                component={WhiteboardContainer}
              />
              <Route path="/workspace/video" exact component={VideoContainer} />
            </Switch>
          </Grid>
        </Router>
      </Grid>
    </>
  )
}

export default DashboardContainer;
