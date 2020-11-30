import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import DashboardMainCss from './DashboardMain.module.css'
import DashboardNavbar from './DashboardNavbar';
import CollaborationNoteContainer from '../DashboardFeatures/CollaborationNotePage/CollaborationNoteContainer';
import Aux from '../../../hoc/Auxiliary';
import CollabTaskContainer from '../DashboardFeatures/CollaborationTaskPage/CollabTaskContainer'


function DashboardMain() {
  return (
    <Aux>
      <Grid Container 
        direction = "row"
        md={9}
        spacing ={0} 
        className={`${DashboardMainCss.testGreen}`}
        alignItems ={'flex-end'}  
        >
        <DashboardNavbar />
        <CollabTaskContainer />
      </Grid>
    </Aux>
  )
}

export default DashboardMain;
