import React from "react";
import "./Home.css";

import HomeImg from '../assets/images/illustration-hero.svg';

const Home = () => {
  return (
    <section id="home">
      <div className="bookmark__home-container">
        <div className="bookmark__home-text-container">
          <div className="bookmark__home-text">
            <h1>A Simple Bookmark <br/>Manager</h1>
            <p>A clean and simple interface to organize your favourite 
                websites. Open a new browser tab and see your sites load
                 instantly. Try it for free.
            </p>
            <div className="bookmark__home-text-buttons-container">
                <button className="bookmark__home-text-button-one">Get it on Chrome</button>
                <button className="bookmark__home-text-button-two">Get it on Firefox</button>
            </div>
          </div>
        </div>
        <div className="bookmark__home-img-container">
            <div className="bookmark__home-img-img">
                <img src={HomeImg} alt={HomeImg}/>
            </div>
            <div className="bookmark__home-img-bubble"/>
        </div>
      </div>
    </section>
  );
};

export default Home;
