import React from "react";
import about from './about.jpg';
import "./styles/index.css";
// import Lottie from "lottie-react-web";
// import animation from "./about.json";
import Typed from 'react-typed';

const About = () => {
  return(
    <section className="my-md-5 mt-0">
      <div className="row justify-content-center pb-5">
        <div className="col-md-6 col-sm-10 about-img">
          <img src={about} alt="DSC WOW About"
            className="img-fluid"
          />
          {/* <Lottie
            options={{
              animationData: animation,
            }}
          /> */}
        </div>
        <div className="col-md-5 col-sm-8 about-content mt-5">
          <h3>
            Developer Student Clubs
          </h3>
          <div className="font-italic mb-2">
            Helping students bridge the gap between <u>theory</u> and <u>practice</u>.
          </div>
          <div className="typed-content mt-3 mb-3">
          <Typed
              className = 'h3'
              style={{wordSpacing: '13px', letterSpacing: '5px'}}
              strings={[
                '<red>1 Country<red/>', 
                '<green>120+ DSCs</green>', 
                '<blue>7 Days</blue>'
              ]}
              typeSpeed={60}
              backSpeed={70}
              cursorChar={['_']}
              loop 
          />
          </div>
          <div className="about-text">
            <p className="mb-3">
              <span className="font-weight-bold">Developer Student Clubs</span> are 
              university based community groups for students 
              interested in Google developer technologies. Students from all undergraduate 
              or graduate programs with an interest in growing as a developer are welcome.
            </p>
            <p>
              By joining a DSC, students grow their knowledge in a 
              <span className="about-highlight"> peer-to-peer learning environment </span> 
              and <span className="text-danger"> build solutions </span> 
              for local businesses and their community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
