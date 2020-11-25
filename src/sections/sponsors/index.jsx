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
import flutterchandigarh from "./assets/flutter-chandigarh.jpg";

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
                <div className="row sponsors justify-content-center">
                  <div className="col-md-4 sponsor-img-wrapper">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://devfolio.co"
                    >
                      <img
                        src="images/loader.gif"
                        data-src={devfolio}
                        className="sponsor-img lazy"
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
                        src="images/loader.gif"
                        data-src={digital}
                        className="sponsor-img lazy"
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
                      <img
                        src="images/loader.gif"
                        data-src={echo}
                        className="sponsor-img lazy"
                        alt="echo-ar"
                      ></img>
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
                        src="images/loader.gif"
                        data-src={jetbrains}
                        className="sponsor-img lazy jetbrains center"
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
                        src="images/loader.gif"
                        data-src={give}
                        className="sponsor-img lazy"
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
                      <img
                        src="images/loader.gif"
                        data-src={jovian}
                        className="sponsor-img lazy"
                        alt="jovian"
                      ></img>
                    </a>
                  </div>

                  <div className="col-md-4 sponsor-img-wrapper">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://matic.network/"
                    >
                      <img
                        src="images/loader.gif"
                        data-src={matic}
                        className="sponsor-img lazy"
                        alt="matic"
                      ></img>
                    </a>
                  </div>

                  <div className="col-md-4 sponsor-img-wrapper">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.portis.io/"
                    >
                      <img
                        src="images/loader.gif"
                        data-src={portis}
                        className="sponsor-img lazy"
                        alt="portis"
                      ></img>
                    </a>
                  </div>
                </div>
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
                <div className="row sponsors">
                  <div className="col-sm-6 col-md-4 sponsor-img-wrapper">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.facebook.com/groups/DevCIndore/"
                    >
                      <img
                        src="images/loader.gif"
                        data-src={fb}
                        className="sponsor-img lazy"
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
                        src="images/loader.gif"
                        data-src={gdgpune}
                        className="sponsor-img lazy"
                        alt="gdg-pune"
                      ></img>
                    </a>
                  </div>

                  <div className="col-sm-6 col-md-4 sponsor-img-wrapper">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://flutter-chandigarh.web.app/"
                    >
                      <img
                        src="images/loader.gif"
                        data-src={flutterchandigarh}
                        className="sponsor-img lazy"
                        alt="Flutter Chandigarh"
                      ></img>
                    </a>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <br />

      <br />
    </section>
  );
};

export default Sponsors;
