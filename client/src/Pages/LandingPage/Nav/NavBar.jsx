import React, { useState } from "react";
import "../../../css/index.css";
import "../../../css/nav.css";
import Burger from "./Burger";
import RightBar from "./RightBar";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  const [isClicked, setClicked] = useState(false);
  const [burger, setBurger] = useState(false);
  function handleClick() {
    setClicked((prev) => {
      return !prev;
    });
  }
  const showButton = () => {
    if (window.innerWidth <= 1000) {
      setBurger(true); //zoom in
    } else {
      setBurger(false); //zoom out
    }
  };
  window.addEventListener("resize", showButton);

  return (
    <nav>
      <div className="nav-left">
        <Link to="/">
          <h1>CREACT</h1>
        </Link>
      </div>
      <div className="nav-middle">
        <Link to="/download">
          <li>Download</li>
        </Link>
        <Link to="/reason">
          <li>Why choose us?</li>
        </Link>
        <Link to="/price">
          <li>Price</li>
        </Link>
        <Link to="/safety">
          <li>Safety</li>
        </Link>
        <Link to="/support">
          <li>Support</li>
        </Link>
      </div>
      <div className="nav-right">
        <Link to="/login">
          <button onClick={props.handleLogin}>Open App</button>
        </Link>
        {burger ? <Burger handleClick={handleClick} /> : ""}
        {isClicked ? <RightBar handleClick={handleClick} /> : ""}
      </div>
    </nav>
  );
};

export default NavBar;
