import React from "react";
import "./styles/index.css";

import { Link } from "react-router-dom";

import IconButton from "@material-ui/core/IconButton";
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";

const Map = () => {
  return (
    <div className="maps__wrapper">
      <nav className="topbar__wrapper">
        <Link to="/">
          <IconButton
            color="primary"
            aria-label="Go back"
            component="span"
            className="map__back"
          >
            <ArrowBackIos />
          </IconButton>
        </Link>

        <div className="topbar__logo">
          <a href="/" className="sidebar__item__link">
            <img
              src="favicon.png"
              alt="DSC WOW"
              className="topbar__logo__img"
            />
          </a>
        </div>
      </nav>

      <iframe
        src="https://www.google.com/maps/d/embed?mid=14PPtnaowpoAyKNwzowXXCh0zukhzYuL5"
        className="maps__iframe"
      ></iframe>
    </div>
  );
};

export default Map;
