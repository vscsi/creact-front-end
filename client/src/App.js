import { useState } from "react";
import LandingPageContainer from "./Pages/LandingPage/LandingPageContainer";
import Aux from "./hoc/Auxiliary";
import DashboardContainer from "./Pages/DashboardPage/DashboardContainer";

function App() {
  const [isLogin, setLogin] = useState(false);
  function handleLogin() {
    console.log("Render from App.js");
    setLogin((prev) => !prev);
  }
  return (
    <Aux>
      {isLogin ? "" : <LandingPageContainer handleLogin={handleLogin} />}
      <DashboardContainer />
    </Aux>
  );
}

export default App;
