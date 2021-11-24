import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Departments from "../Departments/Departments";
import Emargency from "../Emagecy/Emargency";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Emargency></Emargency>
      <About></About>
      <Departments></Departments>
    </div>
  );
};

export default Home;
