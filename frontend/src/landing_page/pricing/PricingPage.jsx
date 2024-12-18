import React from "react";
import Brokerage from "./Brokerage";
import Hero from "./Hero";
import ChargerExplained from "./ChargesExplained";
import OpenAccount from "../OpenAccount";

function PricingPage() {
  return (
    <>
      <Hero />
      <Brokerage />
      <ChargerExplained />
      <OpenAccount />
    </>
  );
}

export default PricingPage;
