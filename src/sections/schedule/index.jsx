import React from "react";
import Card from "../../shared_components/card/index";
import "./styles/index.css";

const Schedule = () => {
  return (
    <section className="schedule__wrapper" id="#schedule">
      <div className="row mb-5">
          <Card title="1" size="col-md-12" color="red" />
      </div>
      <div className="row mb-5">
        <Card title="2" size="col-md-6" color="green" />
        <Card title="3" size="col-md-6" color="blue" />
      </div>
    </section>
  );
};

export default Schedule;
