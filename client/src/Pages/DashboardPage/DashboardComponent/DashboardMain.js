import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Grid, Paper } from '@material-ui/core';
import DashboardMainCss from './DashboardMain.module.css'
import DashboardNavbar from './DashboardNavbar';
import Aux from '../../../hoc/Auxiliary';
import VideoContainer from '../DashboardFeatures/VideoPage/VideoContainer'
import VideoCreateRoom from '../DashboardFeatures/VideoPage/VideoCreateRoom'

function DashboardMain() {
  return (
    <Aux>
      <Grid Container 
        direction = "row"
        md={9}
        spacing ={0} 
        className={DashboardMainCss.testGreen}
        alignItems ={'flex-end'}  
        >
        <DashboardNavbar />
        <BrowserRouter>
        <Switch>
          <Route path="/video" exact component ={VideoCreateRoom}/>
          <Route path="/video/:roomID" component ={VideoContainer}/>
          </Switch>
        </BrowserRouter>
      </Grid>
    </Aux>
  )
}

export default DashboardMain;
