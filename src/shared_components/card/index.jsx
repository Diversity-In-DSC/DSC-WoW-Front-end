import React from "react";
import "./styles/index.css";
import Tilt from "react-tilt";
import Lottie from "lottie-react-web";
import animation from "./lottie.json";

const Card = (props) => {
  // let classNames = "card__content Tilt ";
  // classNames += props.size;
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
          <div className="col-md-6 align-items-start">
            <div className="hackathon__title">Code Off Duty</div>
            <div className="hackathon__duration">48 Hours Hackathon</div>

            <a  href="#" target="_blank" rel="noopener" aria-disabled>
              <button class="buttonfx slideleft" disabled>Coming Soon!</button>
            </a>
          </div>
          {/* <div className="col-md-6 hackathon__lottie"> */}
          <img src="images/card/graphics.png" className="card__graphics" alt="DSC WOW" />
        </div>
      </div>
    </Tilt>
  );
};

export default Card;
