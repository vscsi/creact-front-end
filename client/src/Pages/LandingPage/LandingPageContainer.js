import React,{useState} from "react";
import NavBar from "./Nav/NavBar";


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