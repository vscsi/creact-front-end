import React from 'react'
import { Grid, Paper } from '@material-ui/core';
import DashboardMainCss from './DashboardMain.module.css'
import DashboardNavbar from './DashboardNavbar';

function DashboardMain() {
  return (
    <>
      <Grid Container 
      direction = "row"
      xs={9}
      spacing ={0} 
      alignItems ='flex-end'  
      className={
        `
        ${DashboardMainCss.mainBackground}
        `
      }
      >
        <DashboardNavbar />
      </Grid>
    </>
  )
}

export default DashboardMain
