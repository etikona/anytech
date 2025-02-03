import React from "react";
import BaasNavBg from "../components/BaasComponents/BaasNavBg";
import BaasHero from "../components/BaasComponents/BaasHero";
import Redefined from "../components/BaasComponents/Redefined";
import Benefits from "../components/BaasComponents/Benefits";
import BaasTrusted from "../components/BaasComponents/BaasTrustes";
import Solutions from "../components/ServiceComponents/Solutions";

const BaasPage = () => {
  return (
    <div>
      <BaasNavBg />
      <BaasHero />
      <Redefined />
      <Benefits />
      <BaasTrusted />
      <Solutions />
    </div>
  );
};

export default BaasPage;
