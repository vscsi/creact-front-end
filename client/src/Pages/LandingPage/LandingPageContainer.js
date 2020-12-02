import React,{useState, useLocation} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./Nav/NavBar";
import Download from "./Content/Download/Download";
import Price from "./Content/Price/Price";
import Reason from "./Content/Reason/Reason";
import Safety from "./Content/Safety/Safety";
import Support from "./Content/Support/Support";
import Home from "./Content/Home/Home";
import Login from "./Content/Login/Login";

function LandingPageContainer(props) {
  

  const [isLogin, setLogin] = useState(false);
  function handleLogin() {
    console.log("Render from App.js");
    setLogin((prev)=>{
      return !prev;
    })
  }

  return (
    <>  
      <NavBar/>
    </>
  )
}

export default LandingPageContainer;