import React from "react";
import "./styles/index.css";
import Tilt from "react-tilt";

const Card = (props) => {
  return (
    <Tilt
      className="col-md-9 card__content Tilt"
      options={{ max: 5, scale: 1 }}
    >
      <div
        className="card__content__inner Tilt-inner"
        style={{ backgroundColor: props.color, scale: 1 }}
      >
        <div className="row">
          <div className="col-lg-6 col-md-9 col-xs-12
           align-items-start">
            <div className="hackathon__title">Code Off Duty</div>
            <div className="hackathon__duration">48 Hours Hackathon</div>

            <a
              href="https://hackathon.dscwow.tech/"
              target="_blank"
              rel="noopener"
            >
              <button class="buttonfx slideleft">Register Now</button>
            </a>
          </div>
          <img
          src=""
            data-src="images/card/graphics.png"
            className="card__graphics lazy"
            alt="CodeOffDuty Hackathon DSC WOW"
          />
        </div>
      </div>
    </Tilt>
  );
};

export default Card;
