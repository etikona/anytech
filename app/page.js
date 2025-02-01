"use client";
import React from "react";
import Navbar from "./components/Navbar";
import NavbarBackground from "./components/Home/NavbarBg";
import HeroSection from "./components/Home/HomeHero";
import PhilosophySection from "./components/Home/Philosophy";
import FinanceSection from "./components/Home/Finance";
import StateSection from "./components/Home/State";

const page = () => {
  return (
    <div>
      <Navbar />
      <NavbarBackground />
      <HeroSection />
      <PhilosophySection />
      <FinanceSection />
      <StateSection />
    </div>
  );
};

export default page;
