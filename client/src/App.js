import React, { useState } from "react";
import DashboardContainer from "./Pages/DashboardPage/DashboardContainer";
import LandingPageContainer from "./Pages/LandingPage/LandingPageContainer";
import LoginContainer from "./Pages/LoginPage/LoginContainer";
import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom";



function App() {
  const [isLogin, setLogin] = useState(false);
  function handleLogin() {
    console.log("Render from App.js");
    setLogin((prev) => !prev);
  }
  return (
    <>
      <LandingPageContainer />
      <DashboardContainer />
    </>
  );
}

export default App;
