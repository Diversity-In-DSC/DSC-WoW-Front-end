import React from "react";
import "./styles/index.css";
import Typed from "react-typed";

import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="about__section" id="about-section">
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
                "<green>121+ DSCs</green>",
                "<red>11 Speakers<red/>",
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
              <span className="font-weight-bold">DSC WOW </span>is a collaborative 
              event of 100+ DSCs from India, who have joined hands to bring together students,
               developers and communities under the same roof. They can attain knowledge
                from highly experienced industry professionals and can also polish
                 their coding skills, or maybe just get started with their programming
                  journey.
            </p>

            <Link to="/clubs">
              <button className="secondary__btn">
                View Collaborating DSCs
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
