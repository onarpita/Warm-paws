import React from "react";
import Hero from "./Hero";
import Cards from "./Cards";
import Service from "./Service";
import WinterAccessories from "./WinterAccessories";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Cards></Cards>
      <WinterAccessories></WinterAccessories>
      <Service></Service>
    </div>
  );
};

export default Home;