import React from "react";

import "./ContactUs.css";

import { useState, useRef } from "react";

const ContactUs = () => {
  const [inputError, setInputError] = useState(false);

  const inputRef = useRef();

  function onButtonClicked() {
    if (!inputRef.current.value.includes("@")) {
      setInputError(true);
    } else {
      setInputError(false);
    }
  }

  return (
    <section id="contact-us">
      <div className="bookmark__contact-container">
        <div className="bookmark__contact-content-container">
          <p>35,000+ ALREADY JOINED</p>
          <h1>Stay up-to-date with what we're doing</h1>
          <div className="bookmark__contact-input-container">
            <div className="bookmark__contact-input-container-error">
              <input
                ref={inputRef}
                className={inputError ? "error" : "no-error"}
                placeholder="Enter your email address"
              />
              {inputError && (
                <div className="bookmark__contact-input-error-message-container">
                  <p>Whoops, make sure it's an email</p>
                </div>
              )}
            </div>
            <div className="bookmark__contact-button-container">
              <button onClick={onButtonClicked}>Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
