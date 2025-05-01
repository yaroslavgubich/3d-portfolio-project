// src/components/sections/AnimatedCounder.jsx
import React from "react";
import { counterItems } from "../../constants/index.js";

const AnimatedCounder = () => {
  return (
    // big horisontal container
    <div id="counter" className="padding-x-lg xl:mt-0 mt-32">
      {/* smaller container for rows */}

      <div className="mx-auto grid-4-cols">
        {/* counter function  */}
        {counterItems.map((item) => (
          <div className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center">
            {/* container for each value and suffix */}
            <div
              id="number-suffix-container"
              key={counterItems.value}
              className="counter-number text-white text-5xl weight-700 "
            >
              {item.value}
              {item.suffix}
            </div>
            <div id="label-container" className="text-white text-lg">{item.label}</div>
          </div>
        ))}

        {/* counter end  */}
      </div>
    </div>
  );
};
console.log(counterItems.value, counterItems.label, counterItems.suffix);
export default AnimatedCounder;
