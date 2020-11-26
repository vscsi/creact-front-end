import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./Pages/LandingPage/Nav/NavBar"
import Download from "./Pages/LandingPage/Content/Download/Download";
import Price from "./Pages/LandingPage/Content/Price/Price";
import Reason from "./Pages/LandingPage/Content/Reason/Reason";
import Safety from "./Pages/LandingPage/Content/Safety/Safety";
import Support from "./Pages/LandingPage/Content/Support/Support";
import Home from "./Pages/LandingPage/Content/Home/Home";
import Login from "./Pages/LandingPage/Content/Login/Login";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/download" component={Download} />
          <Route path="/reason" component={Reason} />
          <Route path="/price" component={Price} />
          <Route path="/safety" component={Safety} />
          <Route path="/support" component={Support} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
