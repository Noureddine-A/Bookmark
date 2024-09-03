import React from "react";

import "./Extensions.css";

import ChromeLogo from "../assets/images/logo-chrome.svg";
import FirefoxLogo from "../assets/images/logo-firefox.svg";
import OperaLogo from "../assets/images/logo-opera.svg";
import ExtensionsCard from "./utils/ExtensionsCard";

let extensions = [
  {
    logo: ChromeLogo,
    browser: "Chrome",
    version: "62",
    margin: "0rem",
  },
  {
    logo: FirefoxLogo,
    browser: "Firefox",
    version: "55",
    margin: "1rem",
  },
  {
    logo: OperaLogo,
    browser: "Opera",
    version: "46",
    margin: "2rem",
  },
];

const Extensions = () => {
  return (
    <section id="extensions">
      <div className="bookmark__extensions-container">
        <div className="bookmark__extensions-header-container">
          <div className="bookmark__extensions-header-text">
            <h1>Download the extension</h1>
            <p>
              We've got more browsers in the pipeline. Please do let us know if
              you've got a favourite you'd like us to prioritize.
            </p>
          </div>
        </div>
        <div className="bookmark__extensions-extensions-container">
          <div className="bookmark__extensions-extensions-wrapper">
            {extensions.map((ex, index) => {
              return (
                <ExtensionsCard
                  logo={ex.logo}
                  browser={ex.browser}
                  version={ex.version}
                  margin={ex.margin}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Extensions;
