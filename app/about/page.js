import React from "react";
import Navbar from "../components/Navbar";
import AboutNavBg from "../components/AboutComponents/AboutNavBg";
import AboutHero from "../components/AboutComponents/AboutHero";
import Empower from "../components/AboutComponents/Empower";
import Mission from "../components/AboutComponents/Mission";
import Values from "../components/AboutComponents/Values";
import Founder from "../components/AboutComponents/Founder";

const AboutPage = () => {
  return (
    <div className="">
      <Navbar />
      <AboutNavBg />
      <AboutHero />
      <Empower />
      <Mission />
      <Values />
      <Founder />
    </div>
  );
};

export default AboutPage;
