import React from 'react'
import DashboardSidebar from './DashboardComponents/DashboardSidebar';
import DashboardNavbar from './DashboardComponents/DashboardNavbar';
import DashboardMain from './DashboardComponents/DashboardMain';
import { Grid } from '@material-ui/core';
import DashboardMainCss from '../css/DashboardMain.module.css'

function DashboardContainer() {
  return (
    <>
  <Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
>
<Grid item xs={2} spacing ={0}>
      <DashboardSidebar />
  </Grid> 
  
<Grid item xs={2} spacing ={0}>
      <DashboardNavbar />
  </Grid> 

<Grid item xs={8} spacing ={0}>
      <DashboardMain />
  </Grid> 

</Grid>
    </>
  )
}

export default DashboardContainer
