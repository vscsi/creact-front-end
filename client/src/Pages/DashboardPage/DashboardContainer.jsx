import React from 'react';
import DashboardContainerCss from './DashboardContainer.module.css';
import DashboardSidebar from './DashboardComponent/DashboardSidebar';
import DashboardMain from './DashboardComponent/DashboardMain';
import { Grid } from '@material-ui/core';
import Aux from '../../hoc/Auxiliary';


function DashboardContainer() {
  return (
    <Aux>
      <Grid
        container
        direction="row"
        alignItems="stretch"
        className={`${DashboardContainerCss.containerHeight} ${DashboardContainerCss.containerBackground}`}
      > 
        <DashboardSidebar />
        <DashboardMain />
      </Grid>
    </Aux>
  )
}

export default DashboardContainer;
