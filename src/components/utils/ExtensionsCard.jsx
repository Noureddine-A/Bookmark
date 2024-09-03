import React from "react";

import "./ExtensionsCard.css";

import BgDots from "../../assets/images/bg-dots.svg";

const ExtensionsCard = (props) => {
  return (
    <div
      className="bookmark__extensions-card"
      style={{ marginTop: props.margin }}
    >
      <div className="bookmark__extensions-card-img">
        <img src={props.logo} alt={props.logo} />
      </div>
      <h2>Add to {props.browser}</h2>
      <p>Minimum version {props.version}</p>
      <img
        className="bookmark__extensions-card-dots"
        src={BgDots}
        alt={BgDots}
      />
      <div className="bookmark__extensions-card-button">
        <button>Add & Install Extension</button>
      </div>
    </div>
  );
};

export default ExtensionsCard;
