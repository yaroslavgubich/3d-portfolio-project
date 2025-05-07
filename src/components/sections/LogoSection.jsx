// src/components/sections/LogoSection.jsx
import React from "react";
import logos from "../../constants/index.js";
const LogoSection = () => {
  return (
    <div className="md:my-20 my-10 relative">
      <div className="gradient-edge"></div>
      <div className="gradient-edge"></div>
      <div className="marquee h-52">
        <div className="marquee-box md:gap-12 gap-5"></div>
      </div>
    </div>
  );
};

export default LogoSection;
