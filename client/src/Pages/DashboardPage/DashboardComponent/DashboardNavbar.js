import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import DashboardMainCss from './DashboardMain.module.css';
import DashboardNavbarCss from './DashboardNavbar.module.css';
import Aux from '../../../hoc/Auxiliary';


function DashboardNavbar() {
  return (
    <Aux>
       <Grid item 
       className={DashboardMainCss.testBlue}>
        Navbar
      </Grid>
    </Aux>
  )
}

export default DashboardNavbar;
