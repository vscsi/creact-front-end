import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Grid, Paper } from '@material-ui/core';
import DashboardMainCss from './DashboardMain.module.css'
import DashboardNavbar from './DashboardNavbar';
import CollabNoteContainer from '../DashboardFeatures/CollaborationNotePage/CollaborationNoteContainer';
import CollabTaskContainer from '../DashboardFeatures/CollaborationTaskPage/CollabTaskContainer'
import VideoContainer from '../DashboardFeatures/VideoPage/VideoContainer'
import VideoCreateRoom from '../DashboardFeatures/VideoPage/VideoCreateRoom'



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
          <Route path="/workspace/video" exact component ={VideoCreateRoom}/>
          <Route path="/workspace/video/:roomID" component ={VideoContainer}/>
        </Switch>
        </Router>
      
      </Grid>
    </>
  )
}

export default DashboardMain;
