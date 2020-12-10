import React from "react";
import classes from "./Herosection.module.css";

const HeroSection = ({ flexReverse, imgSrc, contentH1, contentP, waveShape }) => {
  return (
    <>
      <div className={waveShape === "wave" ? classes.hero : classes.hero2}>
        <div className={flexReverse ? classes.heroWrapperReverse : classes.heroWrapper}>
          <div className={classes.heroImg}>
            <img src={imgSrc} alt="hero-pic-1" />
          </div>
          <div className={classes.heroContent}>
            <h1>{contentH1}</h1>
            <p>{contentP}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
