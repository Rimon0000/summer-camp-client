import React from "react";
import Banner from "../Banner/Banner";
import Instructors from "../Instructors/Instructors";
import PopularClasses from "./PopularClasses/PopularClasses";
import OurServices from "../OurServices/OurServices";
import UpcomingClasses from "../UpcomingClasses/UpcomingClasses";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <PopularClasses></PopularClasses>
      <Instructors></Instructors>
      <OurServices></OurServices>
      <UpcomingClasses></UpcomingClasses>
      <Contact></Contact>
    </div>
  );
};

export default Home;
