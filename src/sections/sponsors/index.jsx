import React from "react";
import "./styles/index.css";
import LazyLoad from "react-lazyload";

import devfolio from "./assets/devfolio.png";
import digital from "./assets/digital.png";
import echo from "./assets/echo.png";
import fb from "./assets/fb.png";
import fold from "./assets/fold.png";
import gdgpune from "./assets/gdgpune.png";
import give from "./assets/give.png";
import jetbrains from "./assets/jetbrains.png";
import jovian from "./assets/jovian.png";
import matic from "./assets/matic.png";
import portis from "./assets/portis.png";

const Sponsors = () => {
  return (
    <section id="sponsors-section">
      <div className="row section__header justify-content-center">
        <div className="col-md-10">Our Proud Sponsors</div>
      </div>

      <div className="our-sponsors">
        <div className="sponsor-tier">
          <div className="row justify-content-center">
            <div className="col-md-10">
            <LazyLoad>
            <div className="row sponsors justify-content-center">
              <div className="col-md-4 sponsor-img-wrapper">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://devfolio.co"
                >
                  <img
                    src={devfolio}
                    className="sponsor-img"
                    alt="devfolio"
                  ></img>
                </a>
              </div>

              <div className="col-md-4 sponsor-img-wrapper">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.digitalocean.com/"
                >
                  <img
                    src={digital}
                    className="sponsor-img"
                    alt="digital-ocean"
                  ></img>
                </a>
              </div>

              <div className="col-md-4 sponsor-img-wrapper">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.echoar.xyz/"
                >
                  <img src={echo} className="sponsor-img" alt="echo-ar"></img>
                </a>
              </div>

              <div className="col-md-4 sponsor-img-wrapper">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://fold.money/"
                >
                  <img src={fold} className="sponsor-img" alt="fold"></img>
                </a>
              </div>

              <div className="col-md-4 sponsor-img-wrapper">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.jetbrains.com/"
                >
                  <img
                    src={jetbrains}
                    className="sponsor-img jetbrains center"
                    alt="jetbrains"
                  ></img>
                </a>
              </div>

              <div className="col-md-4 sponsor-img-wrapper">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://givemycertificate.com/"
                >
                  <img
                    src={give}
                    className="sponsor-img"
                    alt="give-my-certificate"
                  ></img>
                </a>
              </div>

              <div className="col-md-4 sponsor-img-wrapper">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.jovian.ai/"
                >
                  <img src={jovian} className="sponsor-img" alt="jovian"></img>
                </a>
              </div>

              <div className="col-md-4 sponsor-img-wrapper">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://matic.network/"
                >
                  <img src={matic} className="sponsor-img" alt="matic"></img>
                </a>
              </div>

              <div className="col-md-4 sponsor-img-wrapper">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.portis.io/"
                >
                  <img src={portis} className="sponsor-img" alt="portis"></img>
                </a>
              </div>
            </div>
          </LazyLoad>
            </div>
          </div>
        </div>
      </div>

      <div className="row section__header justify-content-center">
        <div className="col-md-10">Our Community Partners</div>
      </div>

      <div className="our-sponsors">
        <div className="community-partners sponsor-tier ">
          <div className="row justify-content-center">
          <div className="col-md-9">
            <LazyLoad>
              <div className="row sponsors">
                <div className="col-sm-6 col-md-4 sponsor-img-wrapper">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/groups/DevCIndore/"
                  >
                    <img
                      src={fb}
                      className="sponsor-img"
                      alt="fb-developer-circles-indore"
                    ></img>
                  </a>
                </div>

                <div className="col-sm-6 col-md-4 sponsor-img-wrapper">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://gdg.community.dev/gdg-pune/"
                  >
                    <img
                      src={gdgpune}
                      className="sponsor-img"
                      alt="gdg-pune"
                    ></img>
                  </a>
                </div>
              </div>
            </LazyLoad>
          </div>
          </div>
        </div>
      </div>
      <br />

      <div className="card">
        <div className="brochure">
          <div>
            <h4 className="">Want to be a sponsor of DSC WOW?</h4>
            <br />
            <h5>Drop us an email at :</h5>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:wowdsc@gmail.com"
              className="mail"
            >
              <h5>wowdsc@gmail.com</h5>
            </a>

            <br />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:wowdsc@gmail.com"
            >
              <button className="email-btn">Get in touch</button>
            </a>
          </div>
        </div>
      </div>

      <br />
    </section>
  );
};

export default Sponsors;
