import React from 'react'
import { Grid, Paper } from '@material-ui/core';
import DashboardMainCss from './DashboardMain.module.css'
import DashboardNavbarCss from './DashboardNavbar.module.css'

function DashboardNavbar() {
  return (
    <>
       <Grid item 
       className={DashboardMainCss.testBlue}>
        Navbar
      </Grid>
    </>
  )
}

export default DashboardNavbar
