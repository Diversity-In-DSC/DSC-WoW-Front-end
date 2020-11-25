import React from "react";
import NewSponsors from './components/newsponsors';
import "./styles/index.css";

const SponsorCard = () => {
  return (
    <section className="schedule__wrapper" id="#schedule">
      <div className="row justify-content-center">
        <NewSponsors  />
      </div>
    </section>
  );
};

export default SponsorCard;
