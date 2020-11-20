import React from "react";
import "../../../css/herosection.css";
import hero_pic_1 from "../../../css/images/header-1.jpeg";
import Wave from "./Wave";

const HeroSection = ({ flexReverse, contentH1, contentP, waveShape }) => {
  return (
    <>
      <div className={waveShape === "wave" ? "hero" : "hero2"}>
        <div className={flexReverse ? "hero-wrapper-reverse" : "hero-wrapper"}>
          <div className="hero-img">
            <img src={hero_pic_1} alt="hero-pic-1" />
          </div>
          <div className="hero-content">
            <h1>{contentH1}</h1>
            <p>{contentP}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
