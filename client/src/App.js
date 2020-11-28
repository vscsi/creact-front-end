import React, { useState } from "react";
import DashboardContainer from "./Pages/DashboardPage/DashboardContainer";
import LandingPageContainer from "./Pages/LandingPage/LandingPageContainer";

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
