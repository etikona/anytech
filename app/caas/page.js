import React from "react";
import Navbar from "../components/Navbar";
import CaasNavBg from "../components/CaasComponents.jsx/CaasNavBg";
import CaasHero from "../components/CaasComponents.jsx/CaasHero";
import Feature from "../components/CaasComponents.jsx/Features";
import Revolution from "../components/CaasComponents.jsx/Revolution";
import CaasTrusted from "../components/CaasComponents.jsx/CaasTrusted";
import Needs from "../components/CaasComponents.jsx/Needs";

const CaasPage = () => {
  return (
    <div>
      <CaasNavBg />
      <CaasHero />
      <Feature />
      <Revolution />
      <CaasTrusted />
      <Needs />
    </div>
  );
};

export default CaasPage;
