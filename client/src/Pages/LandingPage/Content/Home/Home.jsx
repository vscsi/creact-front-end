import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection/HeroSection";
import { homeObjOne, homeObjTwo, homeObjThree } from "./Data";
import Aux from "../../../../hoc/Auxiliary"
import Wave from "./Waves/Wave";
import Wave2 from "./Waves/Wave2";
import Wave3 from "./Waves/Wave3";

const Home = () => {
  return (
    <Aux>
      <Header />
      <HeroSection {...homeObjOne} />
      <Wave />
      <HeroSection {...homeObjTwo} />
      <Wave2 />
      <HeroSection {...homeObjThree} />
      <Wave3 />
    </Aux>
  );
};

export default Home;
