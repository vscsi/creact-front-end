import NavBar from "./components/Nav/NavBar.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Download from "./components/Content/Download/Download";
import Price from "./components/Content/Price/Price";
import Reason from "./components/Content/Reason/Reason";
import Safety from "./components/Content/Safety/Safety";
import Support from "./components/Content/Support/Support";
import Home from "./components/Content/Home/Home";
import Login from "./components/Content/Login/Login";

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
