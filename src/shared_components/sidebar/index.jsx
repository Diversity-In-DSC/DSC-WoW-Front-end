import React from "react";
import "./styles/index.css";

const Sidebar = () => {
  return (
    <nav className="sidebar__wrapper">
      <ul className="sidebar__nav">
        <li className="sidebar__item  sidebar__logo">
          <a href="#" className="sidebar__item__link">
            <img
              src="favicon.png"
              alt="DSC WOW"
              className="sidebar__logo__img"
            />
          </a>
          <span className="sidebar__text">Home</span>
        </li>

        <li className="sidebar__item">
          <a href="#" className="sidebar__item__link">
            <i class="fas fa-puzzle-piece"></i>
          </a>
          <span className="sidebar__text">About</span>
        </li>

        <li className="sidebar__item">
          <a href="#" className="sidebar__item__link">
            <i class="fas fa-calendar"></i>
          </a>
          <span className="sidebar__text">Schedule</span>
        </li>

        <li className="sidebar__item">
          <a href="#" className="sidebar__item__link">
            <i class="fas fa-headset"></i>
          </a>
          <span className="sidebar__text">Speakers</span>
        </li>

        <li className="sidebar__item">
          <a href="#" className="sidebar__item__link">
            <i class="far fa-handshake"></i>
          </a>
          <span className="sidebar__text">Sponsors</span>
        </li>

        <li className="sidebar__item">
          <a href="#" className="sidebar__item__link">
            <i class="fas fa-question"></i>
          </a>
          <span className="sidebar__text">FAQ</span>
        </li>

        <li className="sidebar__item">
          <a href="#" className="sidebar__item__link">
            <i className="fa fa-at"></i>
          </a>
          <span className="sidebar__text">Contact</span>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
