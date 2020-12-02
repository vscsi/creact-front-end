import React from 'react';
import DashboardContainerCss from './DashboardContainer.module.css';
import DashboardSidebar from './DashboardComponent/DashboardSidebar';
import DashboardMain from './DashboardComponent/DashboardMain';
import { Grid } from '@material-ui/core';


function DashboardContainer() {
  return (
    <>
      <Grid
        container
        direction="row"
        alignItems="stretch"
        className={`${DashboardContainerCss.containerHeight} ${DashboardContainerCss.containerBackground}`}
      > 
        <DashboardSidebar />
        <DashboardMain />
      </Grid>
    </>
  )
}

export default DashboardContainer;
