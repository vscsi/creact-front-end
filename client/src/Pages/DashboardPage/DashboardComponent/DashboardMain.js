import React from 'react'
import { Grid, Paper } from '@material-ui/core';
import DashboardMainCss from './DashboardMain.module.css'
import DashboardNavbar from './DashboardNavbar';

function DashboardMain() {
  return (
    <>
      <Grid Container 
      direction = "row"
      md={9}
      spacing ={0} 
      className={`${DashboardMainCss.testGrey}`}
      alignItems ={'flex-end'}  
      >
        <DashboardNavbar />
      </Grid>
    </>
  )
}

export default DashboardMain
