import React from "react";
import "../assets/styles/header.css";
import image from "../assets/images/doctor-with-stethoscope.png";
import "../assets/styles/hero.css";

function Hero() {
  return (
    <div className="main-banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-6 align-self-center">
                <div className="left-content header-text">
                  <h6>Online Medical Care</h6>
                  <h3>Get a diagnosis, treatment plan,
                    and prescription from original provider of quality medical care.</h3>
                  <div className="main-blue-button"><a href="#contact">Get Started</a></div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="right-image">
                    <img src={ image }alt="team meeting" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
