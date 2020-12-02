import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Grid, Paper } from '@material-ui/core';
import DashboardMainCss from './DashboardMain.module.css'
import DashboardNavbar from './DashboardNavbar';
import VideoContainer from '../DashboardFeatures/VideoPage/VideoContainer';
import VideoCreateRoom from '../DashboardFeatures/VideoPage/VideoCreateRoom';
import ChatroomContainer from '../DashboardFeatures/ChatroomPage/ChatroomContainer'
import DropboxContainer from '../DashboardFeatures/DropboxPage/DropboxContainer'
import CalendarContainer from '../DashboardFeatures/CalenderPage/CalenderContainer'
import WhiteboardContainer from '../DashboardFeatures/WhiteboardPage/WhiteboardContainer'
import CollabNoteContainer from '../DashboardFeatures/CollaborationNotePage/CollaborationNoteContainer';
import CollabTaskContainer from '../DashboardFeatures/CollaborationTaskPage/CollabTaskContainer'


function DashboardMain() {
  return (
    <>
      <Grid container 
        direction = "row"
        md={9}
        spacing ={0} 
        className={`${DashboardMainCss.testGreen}`}
        alignItems ={'flex-end'}  
        >
        <DashboardNavbar />
        <Router>
        <Switch>
          <Route path="/workspace/chat" component={ChatroomContainer}/>
          <Route path="/workspace/tasks" component={CollabTaskContainer}/>
          <Route path="/workspace/docs" component={CollabNoteContainer}/>
          <Route path="/workspace/dropbox" component={DropboxContainer}/>
          <Route path="/workspace/calendar" component={CalendarContainer}/>
          <Route path="/workspace/whiteboard" component={WhiteboardContainer}/>
          <Route path="/workspace/video" exact component ={VideoCreateRoom}/>
          <Route path="/workspace/video/:roomID" component ={VideoContainer}/>
        </Switch>
        </Router>
      
      </Grid>
    </>
  )
}

export default DashboardMain;
