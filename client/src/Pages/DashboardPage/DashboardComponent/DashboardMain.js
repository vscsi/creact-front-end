import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import DashboardMainCss from './DashboardMain.module.css'
import DashboardNavbar from './DashboardNavbar';
import Aux from '../../../hoc/Auxiliary';

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
      </Grid>
    </Aux>
  )
}

export default DashboardMain;
