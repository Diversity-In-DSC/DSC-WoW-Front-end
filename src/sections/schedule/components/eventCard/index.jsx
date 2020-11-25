import React from "react";
import "./styles/index.css";

const EventCard = () => {
  return (
    <div className="event__card__wrapper col-lg-4 col-md-9 col-xs-11">
      <img
        className="event__image"
        alt="Tensorflow"
        src="images/events/day1/tf.png"
      />

      <div className="event__card__content">
      <div className="event__name">Keynote</div>
      <div className="event__timings">5:20 PM - 5:30 PM</div>

      <div className="watch__btn">
        <i class="fas fa-play-circle    "></i> Watch Now
      </div>
      </div>
    </div>
  );
};

export default EventCard;
