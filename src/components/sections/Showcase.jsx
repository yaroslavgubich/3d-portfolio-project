// src/components/sections/Showcase.jsx
import React from "react";

const Showcase = () => {
  return (
    <div id="work" className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/*Left*/}
          <div className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="Ryde" />
              <div className="text-content">
                <h2>
                  On-demand Rides Made Simple with a Powerful, User-Friendly App
                  called Ryde
                </h2>
              </div>
              {/*Right*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
