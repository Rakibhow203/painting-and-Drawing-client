import React, { useState } from "react";
import Banner from "../Banner/Banner";
import BrandProduc from "../BrandProduct/BrandProduc";

import Testimonial from "../Testimonial/Testimonial";
import TopCategory from "../TopCategory/TopCategory";
import WhyUs from "../WhyUs/WhyUs";

const Home = () => {
  // State to manage the current theme
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle between dark and light themes
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? "dark" : ""}>
      {/* Toggle Button */}
      <button onClick={toggleTheme}>
        {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>

      <Banner></Banner>

      <div className="mt-5 mb-5">
        <BrandProduc></BrandProduc>
      </div>

      <div className="mt-5 mb-5">
        <TopCategory></TopCategory>
      </div>

      <div>
        <Testimonial></Testimonial>
      </div>

      <div>
        <WhyUs></WhyUs>
      </div>
    </div>
  );
};

export default Home;
