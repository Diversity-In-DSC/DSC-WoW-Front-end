import React from "react";
import "./styles/index.css";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import LazyLoad from "react-lazyload";

const EventCard = ({ title, link = "", time, speaker, image }) => {
  return (
    <div className="event__card__wrapper col-lg-4 col-md-9 col-xs-11">
      <LazyLoad>
        <img
          className="event__image"
          alt="Tensorflow"
          // src="images/loader.gif"
          src={`images/events/${image}`}
        />
      </LazyLoad>
      <div className="event__card__content">
        <div className="event__name">{title}</div>
        <div className="event__timings">{time}</div>
        <div className="event__speaker">{speaker}</div>

        <a href={link} rel="noreferrer" target="_blank">
          <Tooltip title={link === "" ? "Stream link will be available a day before the event starts" : "Let's WOW !"} >
          <Button
            variant="outlined"
            color="primary"
            className="watch__btn"
            startIcon={<PlayCircleFilledIcon />}
            disabled={link === ""}
            style={link === "" ? { pointerEvents: "auto" } : {}}
          >
            Watch Now
          </Button>
        </Tooltip>
        </a>
      </div>
    </div>
  );
};

export default EventCard;
