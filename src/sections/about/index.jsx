import React from "react";
// import about from "./about.jpg";
import "./styles/index.css";
import Typed from "react-typed";

const About = () => {
  return (
    <section className="about__section">
      <div className="row ">
        <div className="col-md-5">
          <img
            src="images/dsc-map.png"
            alt="DSC WOW About"
            className="img-fluid about__img"
          />
        </div>
        <div className="col-md-6 about-content mt-5">
          <h3 className="week-of-wonders-header">
            Week Of Wonders <green>aka</green> <red>"WOW"</red>
          </h3>
          Helping students bridge the gap between theory and practice
          <div className="typed-content mt-3 mb-5">
            <Typed
              className="about-typer"
              style={{ wordSpacing: "3px", letterSpacing: "1px" }}
              strings={[
                "<red>11 Speakers<red/>",
                "<green>121+ DSCs</green>",
                "<blue>7 Days</blue>",
              ]}
              typeSpeed={30}
              backSpeed={30}
              backDelay={1500}
              cursorChar={["_"]}
              loop
            />
          </div>
          <div className="about-text">
            <p className="mb-3">
              <span className="font-weight-bold">Developer Student Clubs</span>{" "}
              are university based community groups for students interested in
              Google developer technologies. Students from all undergraduate or
              graduate programs with an interest in growing as a developer are
              welcome.
            </p>
            <p>
            By joining a DSC, students grow their knowledge in a <span className="about-highlight">peer-to-peer learning environment</span> and <span className="text-danger"> build solutions </span>for local businesses and their community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;