import React from "react";
import Banner from "../Banner/Banner";
import Instructors from "../Instructors/Instructors";
import PopularClasses from "./PopularClasses/PopularClasses";
import OurServices from "../OurServices/OurServices";
import UpcomingClasses from "../UpcomingClasses/UpcomingClasses";
import Contact from "../Contact/Contact";
import Facilities from "../Facilities/Facilities";
import PartnerCompany from "../PartnerCompany/PartnerCompany";
import LatestClass from "../LatestClass/LatestClass";
import Gallery from "../Gallery/Gallery";
import About from "../About/About";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <PopularClasses></PopularClasses>
      <LatestClass></LatestClass>
      <About></About>
      <Instructors></Instructors>
      <OurServices></OurServices>
      <UpcomingClasses></UpcomingClasses>
      <Facilities></Facilities>
      <PartnerCompany></PartnerCompany>
      <Contact></Contact>
      <Gallery></Gallery>
    </div>
  );
};

export default Home;
