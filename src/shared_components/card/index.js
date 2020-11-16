import React from "react";
import "./styles/index.css";
import Tilt from 'react-tilt';
const Card = (props) => {
  let classNames = "card__content Tilt ";
  classNames+=props.size;
  return (
    <Tilt className={classNames} options={{ max : 4 }} >
      <div
        className="card__content__inner Tilt-inner"
        style={{backgroundColor:props.color,scale:1}}
      >
        <h1>{props.title}</h1>
      </div>
    </Tilt>
  );
};

export default Card;
