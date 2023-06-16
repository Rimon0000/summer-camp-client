import React from "react";
import Banner from "../Banner/Banner";
import Instructors from "../Instructors/Instructors";
import PopularClasses from "./PopularClasses/PopularClasses";
import OurServices from "../OurServices/OurServices";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <PopularClasses></PopularClasses>
      <Instructors></Instructors>
      <OurServices></OurServices>
    </div>
  );
};

export default Home;
