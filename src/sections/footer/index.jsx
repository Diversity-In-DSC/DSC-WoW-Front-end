import React from "react";
import "./styles/index.css";

const Footer = () => {
  return (
    <section className="row footer__wrapper justify-content-center">
      <div className="col-md-7">
        <div className="row">
          <div className="col-md-10">
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
      <table className="col-md-3 col-10 mt-3">
        <tr>
          <td>
            <a 
              href="https://twitter.com/DscWow/"
              target="_blank" rel="noreferrer"
            >
              <i class="fab fa-twitter text-twitter"></i>
            </a>
          </td>
          <td>
            <a 
              href="https://www.instagram.com/dsc.wow/"
              target="_blank" rel="noreferrer"
            >
              <i class="fab fa-instagram text-instagram rounded"></i>
            </a>
          </td>
          <td>
            <a 
              href="https://www.linkedin.com/company/dsc-wow"
              target="_blank" rel="noreferrer"
            >
              <i class="fab fa-linkedin text-linkedin"></i>
            </a>
          </td>
          <td>
            <a 
              href="https://www.youtube.com/c/DiversityInDSC"
              target="_blank" rel="noreferrer"
            >
              <i class="fab fa-youtube text-danger text-youtube"></i>
            </a>
          </td>
        </tr>
      </table>
    </section>
  );
};

export default Footer;
