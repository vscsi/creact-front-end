import React, { useState } from "react";
import DashboardContainer from "./Pages/DashboardPage/DashboardContainer";
import LandingPageContainer from "./Pages/LandingPage/LandingPageContainer";
import Aux from './hoc/Auxiliary'

function App() {
  const [isLogin, setLogin] = useState(false);
  function handleLogin() {
    console.log("Render from App.js");
    setLogin((prev) => !prev);
  }
  return (
    <Aux>
      <LandingPageContainer />
      <DashboardContainer />
    </Aux>
  );
}

export default App;
