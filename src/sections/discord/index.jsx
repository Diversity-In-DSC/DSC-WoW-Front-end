import React from "react";
import DiscordCard from './components/discordCard';
import "./styles/index.css";

const Schedule = () => {
  return (
    <section className="schedule__wrapper" id="#schedule">
      <div className="row justify-content-center">
        <DiscordCard  />
      </div>
    </section>
  );
};

export default Schedule;
