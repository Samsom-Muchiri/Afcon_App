import React from "react";
import "../Style Sheets/homePage.css";
import CitiesSlider from "./slider";
import Dates from "./home page components/Dates";
import WhatsNew from "./home page components/WhatsNew";

function Home() {
  return (
    <div className="slider-section">
      <CitiesSlider />
      <Dates />
      <WhatsNew />
    </div>
  );
}

export default Home;
