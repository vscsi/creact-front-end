import React from "react";
import "../../../css/index.css";
import "../../../css/header.css";

const Header = () => {
  return (
    <header>
      <div className="headerBody">
        <h1>Best Working Environment Ever</h1>
        <p>
          No matter Working at office, Working at home, Working during trips,
          the place you can name can enjoy using <b>CREACT</b>, which makes the
          work become easy and pleasant!
        </p>
        <div className="headerButtons">
          <button>Open CREACT in your browser</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
