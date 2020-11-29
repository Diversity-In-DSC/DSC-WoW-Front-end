import React, { useState } from "react";
import "./styles/index.css";
import Lottie from "lottie-react-web";
import animation from "./lottie.json";
import RegisterModal from "./components/register-modal";

const Landing = () => {
  const [isModalOpen, setisModalOpen] = useState(false);
  const [hasRegistered, setHasRegistered] = useState(false);

  return (
    <section className="row landing__wrapper" id="landing-section">
      <div className="col-md-6 landing__content">
        <video
          className="landing__logo"
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline={true}
        >
          <source src="images/logos/dsc-wow-white.webm" type="video/webm" />
          <source src="images/logos/dsc-wow-white.mp4" type="video/mp4" />
        </video>

        <span className="landing__date">
          <i className="fas fa-calendar-alt"></i> December 7-13, 2020
          <span className="landing__separator">|</span>
          <i className="fas fa-globe"></i> Online
        </span>

        <div className="landing__description">
          DSC <span style={{ fontWeight: "500" }}>Week Of Wonders</span>, aka
          DSC WOW. A weeklong event consisting of a{" "}
          <span className="landing__highlight">
            {" "}
            4 days of workshops/sessions{" "}
          </span>
          and a 48 hours <span className="landing__highlight"> hackathon </span>
          named{" "}
          <span
            className="landing__highlight"
            style={{ fontWeight: "600", color: "#db4437" }}
          >
            CodeOffDuty
          </span>
          . To us developers and tech enthusiasts, this is much more than
           a few workshops and a hackathon, it is a place where
            imagination meets the technology of tomorrow.
        </div>

        <div className="landing__actions">
          <a href="https://badge.dscwow.tech" target="_blank" rel="noopener">
            <button className="secondary__btn">Get Your WOW Badge</button>
          </a>

          <button
            className="primary__btn"
            onClick={() => setisModalOpen(true)}
            disabled={hasRegistered}
            style={{ cursor: hasRegistered ? "not-allowed" : "pointer" }}
          >
            {hasRegistered ? "Registered" : "Register"}
          </button>
        </div>
      </div>
      <div className="col-md-6 landing__lottie">
        <Lottie
          options={{
            animationData: animation,
          }}
        />
      </div>

      <RegisterModal
        isOpen={isModalOpen}
        closeModal={() => setisModalOpen(false)}
        setRegistered={() => {
          setisModalOpen(false);
          setHasRegistered(true);
        }}
      />
    </section>
  );
};

export default Landing;
