import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Grid } from "@material-ui/core";
import DashboardNavbar from "./DashboardComponents/DashboardNavbar";

function DashboardContainer() {
  return (
    <>
      {/* <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={2} spacing={0}>
          <DashboardSidebar />
        </Grid>

        <Grid item xs={2} spacing={0}>
          <DashboardNavbar />
        </Grid>

        <Grid item xs={8} spacing={0}>
          <DashboardMain />
        </Grid>
      </Grid> */}
      <Router>
        <Switch>
          <Route path="/workspace" exact component={DashboardNavbar} />
        </Switch>
      </Router>
    </>
  );
}

export default DashboardContainer;
