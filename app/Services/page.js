import React from "react";
import ServiceNavbarBg from "../components/ServiceComponents/ServiceNavbarBg";
import Navbar from "../components/Navbar";
import ServiceHero from "../components/ServiceComponents/ServiceHero";
import ServiceComponent from "../components/ServiceComponents/ServiceComponent";
import Solutions from "../components/ServiceComponents/Solutions";
import Trusted from "../components/ServiceComponents/Trusted";

const ServiceHomePage = () => {
  return (
    <div>
      <ServiceNavbarBg />
      <ServiceHero />
      <ServiceComponent />
      <Solutions />
      <Trusted />
    </div>
  );
};

export default ServiceHomePage;
