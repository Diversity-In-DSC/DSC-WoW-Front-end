import React from "react";
import "./styles/index.css";

const Footer = () => {
  return (
    <section className="row footer__wrapper justify-content-center">
      <div className="col-md-9">
        <div className="row">
          <div className="col-md-6">
            <div className="dsc__wow__footer">
              DSC WOW
              
            </div>
            <div className="wow__footer__links">
              <div className="wow__footer__link">
                <a href="#" rel="noopener" target="_blank">
                  Code Of Conduct
                </a>
              </div>
              <div className="wow__footer__link">
                <a href="#" rel="noopener" target="_blank">
                  Community Guidelines
                </a>
              </div>
            </div>

            <div className="copyright">
                © DSC WOW 2020. All Rights Reserved.
              </div>
          </div>
          {/* <div className="col-md-6 justify-content-end align-content-end">Made with 💖 by</div> */}
        </div>
      </div>
    </section>
  );
};

export default Footer;
