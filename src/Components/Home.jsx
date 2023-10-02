import React from "react";
import "../Style Sheets/homePage.css";
import CitiesSlider from "./slider";
import Dates from "./home page components/Dates";
import WhatsNew from "./home page components/WhatsNew";
import IntroVedio from "./home page components/IntroVedio";
import HostCities from "./home page components/HostCities";
import Fqas from "./home page components/Fqas";

function Home() {
  return (
    <div className="slider-section">
      <CitiesSlider />
      <Dates />
      <IntroVedio />
      <WhatsNew />
      <HostCities />
      <Fqas />
    </div>
  );
}

export default Home;
