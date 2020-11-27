import React from "react";
import "./styles/index.css";

const Footer = () => {
  return (
    <section className="row footer__wrapper justify-content-center">
      <div className="col-md-6 col-lg-8">
        <div className="row">
          <div className="col-md-12 justify-center">
            <div className="dsc__wow__footer">DSC WOW</div>
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
        </div>
      </div>

      <table className="col-lg-2 col-10 mt-3 social__links">
              <tr>
                <td>
                  <a
                    href="https://twitter.com/DscWow/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i class="fab fa-twitter "></i>
                  </a>
                </td>
                <td>
                  <a
                    href="https://www.instagram.com/dsc.wow/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i class="fab fa-instagram rounded"></i>
                  </a>
                </td>
                <td>
                  <a
                    href="https://www.linkedin.com/company/dsc-wow"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i class="fab fa-linkedin"></i>
                  </a>
                </td>
                <td>
                  <a
                    href="https://www.youtube.com/c/DiversityInDSC"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i class="fab fa-youtube"></i>
                  </a>
                </td>
              </tr>
            </table>
      {/* <div className="col-md-6 col-lg-4 justify-content-end align-content-end credits mt-2">
        Made with <span style={{ color: "red" }}>❤</span> by
        <div className="contributors__wrapper">
          <a
            rel="noopener"
            target="_blank"
            href="https://github.com/ishandeveloper"
          >
            <div class="creator__card">
              <div class="creator__img__wrapper">
                <img
                  src="/images/loader.gif"
                  data-src="https://avatars1.githubusercontent.com/u/54989142?s=460&u=4b787a0f50c1236b915d4766aa1a40c1b1d9f313&v=4"
                  alt="ishandeveloper"
                  className="creator__img lazy"
                />
              </div>
              <div class="creator-overlay"></div>
            </div>
          </a>
        </div>
      </div> */}
    </section>
  );
};

export default Footer;
