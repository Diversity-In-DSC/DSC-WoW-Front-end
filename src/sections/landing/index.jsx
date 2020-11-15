import React from "react";
import "./styles/index.css";
import Lottie from 'lottie-react-web'
import animation from './lottie.json'


const Landing = () => {
  return (
    <section className="row landing__wrapper">
      <div className="col-md-6 landing__content">
        <img
          className="landing__logo"
          src="images/logos/dsc-wow-white.gif"
          alt="DSC WOW Logo"
        />

        <span className="landing__date">
          <i className="fas fa-calendar-alt"></i> December 7-13, 2020
          <span className="landing__separator">|</span>
          <i className="fas fa-globe"></i> Online
        </span>

        <div className="landing__description">
          DSC <span style={{fontWeight:"500"}}>Week Of Wonders</span>, aka DSC WOW. A weeklong event consisting of a <span className="landing__highlight"> 4 days of workshops/sessions </span>
          and a 48 hours <span className="landing__highlight"> hackathon </span>
          named <span className="landing__highlight" style={{fontWeight:"600", color:"#db4437"}}>CodeOffDuty</span>. But to us developers and tech enthusiasts, this is
          much more than some workshops and hackathon, it is a place where
          imagination meets the technology of tomorrow.
        </div>

        <div className="landing__actions">
          <button className="secondary__btn">Get Your WOW Badge</button>

          <button className="primary__btn">Register</button>
        </div>
      </div>
      <div className="col-md-6 landing__lottie">
      <Lottie
    options={{
      animationData: animation
    }}
  />
      </div>
    </section>
  );
};

export default Landing;
