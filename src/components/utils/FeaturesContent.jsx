import React, { Fragment } from "react";

import "./FeaturesContent.css";

import TabOne from "../../assets/images/illustration-features-tab-1.svg";
import TabTwo from "../../assets/images/illustration-features-tab-2.svg";
import TabThree from "../../assets/images/illustration-features-tab-3.svg";

const FeaturesContent = (props) => {
  let img = "";
  let text = "";
  let title = "";

  if (props.activeId === 0) {
    img = TabOne;
    text = (
      <p>
        Organize your bookmarks however you like. Our
        <br />
        simple drag-and-drop interface gives you complete
        <br />
        control over how you manage your favourite sites.
      </p>
    );
    title = "Bookmark in one click";
  } else if (props.activeId === 1) {
    img = TabTwo;
    text = (
      <p>
        Our powerful search feature will help you find saved
        <br />
        sites in no time at all. No need to trawl through all of
        <br />
        your bookmarks
      </p>
    );
    title = "Intelligent search";
  } else if (props.activeId === 2) {
    img = TabThree;
    text = (
      <p>
        Easily share your bookmarks and collections with
        <br />
        others. Create your shareable link that you can send at
        <br />
        the click of a button.
      </p>
    );
    title = "Share your bookmarks";
  }

  return (
    <Fragment>
      <div className="bookmark__features-selected-content-image">
        <div className="bookmark__features-selected-content-image-container">
          <img src={img} alt={img} />
        </div>
        <div className="bookmark__features-selected-content-img-bubble" />
      </div>
      <div className="bookmark__features-selected-content-text-container">
        <div className="bookmark__features-selected-content-text">
          <h2>{title}</h2>
          <p>
            {text}
          </p>
          <button>More info</button>
        </div>
      </div>
    </Fragment>
  );
};

export default FeaturesContent;
