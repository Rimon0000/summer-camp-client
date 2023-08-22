import React from "react";
import Banner from "../Banner/Banner";
import Instructors from "../Instructors/Instructors";
import PopularClasses from "./PopularClasses/PopularClasses";
import OurServices from "../OurServices/OurServices";
import UpcomingClasses from "../UpcomingClasses/UpcomingClasses";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <PopularClasses></PopularClasses>
      <Instructors></Instructors>
      <UpcomingClasses></UpcomingClasses>
      <OurServices></OurServices>
    </div>
  );
};

export default Home;
