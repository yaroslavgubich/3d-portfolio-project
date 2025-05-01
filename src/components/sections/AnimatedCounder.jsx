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
          <>
            {/* small dynamic container for each value lable and suffix */}
            
            
            
            
            <div className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center">
                {/* container for each value and suffix */}
              
              
              
              
              <div
                key={counterItems.value}
                className="counter-number text-white text-5xl weight-700 "
              >




                0{item.suffix}




              </div>
            </div>
          </>
        ))}

        {/* counter end  */}
      </div>
    </div>
  );
};
console.log(counterItems.value, counterItems.label, counterItems.suffix);
export default AnimatedCounder;
