import React from "react";
import "./Features.css";

import FeaturesButton from "./utils/FeaturesButton";
import FeaturesContent from "./utils/FeaturesContent";

import { useState } from "react";

let buttons = [
  {
    text: "Simple Bookmarking",
  },
  {
    text: "Speedy Searching",
  },
  {
    text: "Easy Sharing",
  },
];

const Features = () => {
  const [currentlyActive, setCurrentlyActive] = useState(0);

  function changeCurrentActiveTab(index) {
    setCurrentlyActive(index);
  }

  return (
    <section id="features">
      <div className="bookmark__features-container">
        <div className="bookmark__features-header-container">
          <div className="bookmark__features-header-content">
            <h1>Features</h1>
            <p>
              Our aim is to make it quick and easy for you to access your
              favourite websites. Your bookmarks sync between your devices so
              you can access them on the go.
            </p>
          </div>
        </div>
        <div className="bookmark__features-content-container">
          <div className="bookmark__features-content-buttons-container">
            {buttons.map((button, index) => {
              return (
                <FeaturesButton
                  key={index}
                  text={button.text}
                  activeId={currentlyActive}
                  index={index}
                  changeTab={changeCurrentActiveTab}
                />
              );
            })}
          </div>
          <div className="bookmark__features-selected-content-container">
            <FeaturesContent activeId={currentlyActive}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
