import React from "react";
import './styles/index.css'
import devfolio from './assets/devfolio.png'
import digital from './assets/digital.png'
import echo from './assets/echo.png'
import fb from './assets/fb.png'
import fold from './assets/fold.png'
import gdgpune from './assets/gdgpune.png'
import give from './assets/give.png'
import jetbrains from './assets/jetbrains.png'
import jovian from './assets/jovian.png'
import matic from './assets/matic.png'
import portis from './assets/portis.png'

const Sponsors = () => {
  return (
    <section>
      <div className="new-sponsors">
        <h1>Want to be a sponsor of DSC WOW?</h1>
      </div>

      <div className="our-sponsors">
        <div className="diamond-sponsors sponsor-tier">
          <h1>Diamond Sponsors</h1>
          
          <div className="row">
            <div className="col-sm-6 col-md-4 sponsor-img-wrapper">
              <img src={devfolio} className="sponsor-img"  alt="devfolio"></img>
            </div>

            <div className="col-sm-6 col-md-4 sponsor-img-wrapper">
              <img src={digital} className="sponsor-img"  alt="devfolio"></img>
            </div>

            <div className="col-sm-6 col-md-4 sponsor-img-wrapper">
              <img src={echo} className="sponsor-img"  alt="devfolio"></img>
            </div>

          </div>
          
        </div>

        <div className="platinum-sponsors sponsor-tier">
          <h1 className="pb-4">Platinum Sponsors</h1>
          <div className="row">
            
            <div className="col-sm-6 col-md-4 sponsor-img-wrapper">
              <img src={give} className="sponsor-img"  alt="devfolio"></img>
            </div>

            <div className="col-sm-6 col-md-4 sponsor-img-wrapper">
              <img src={jetbrains} className="sponsor-img"  alt="devfolio"></img>
            </div>

            <div className="col-sm-6 col-md-4 sponsor-img-wrapper">
              <img src={jovian} className="sponsor-img"  alt="devfolio"></img>
            </div>

            <div className="col-sm-6 col-md-4 sponsor-img-wrapper">
              <img src={matic} className="sponsor-img"  alt="devfolio"></img>
            </div>

            <div className="col-sm-6 col-md-4 sponsor-img-wrapper">
              <img src={portis} className="sponsor-img"  alt="devfolio"></img>
            </div>


          </div>
        </div>

        <div className="gold-sponsors sponsor-tier">
          <h1 className="pb-4">Gold Sponsors</h1>
          <div className="row">
            <div className="col-sm-6 col-md-4 sponsor-img-wrapper">
              <img src={devfolio} className="sponsor-img"  alt="devfolio"></img>
            </div>

            <div className="col-sm-6 col-md-4 sponsor-img-wrapper">
              <img src={digital} className="sponsor-img"  alt="digital"></img>
            </div>

            <div className="col-sm-6 col-md-4 sponsor-img-wrapper">
              <img src={echo} className="sponsor-img"  alt="echo"></img>
            </div>

            <div className="col-sm-6 col-md-4 sponsor-img-wrapper">
              <img src={fb} className="sponsor-img"  alt="devfolio"></img>
            </div>

            <div className="col-sm-6 col-md-4 sponsor-img-wrapper">
              <img src={fold} className="sponsor-img"  alt="devfolio"></img>
            </div>

            <div className="col-sm-6 col-md-4 sponsor-img-wrapper">
              <img src={gdgpune} className="sponsor-img"  alt="devfolio"></img>
            </div>

            <div className="col-sm-6 col-md-4 sponsor-img-wrapper">
              <img src={give} className="sponsor-img"  alt="devfolio"></img>
            </div>

            <div className="col-sm-6 col-md-4 sponsor-img-wrapper">
              <img src={jetbrains} className="sponsor-img"  alt="devfolio"></img>
            </div>

            <div className="col-sm-6 col-md-4 sponsor-img-wrapper">
              <img src={jovian} className="sponsor-img"  alt="devfolio"></img>
            </div>

            <div className="col-sm-6 col-md-4 sponsor-img-wrapper">
              <img src={matic} className="sponsor-img"  alt="devfolio"></img>
            </div>

            <div className="col-sm-6 col-md-4 sponsor-img-wrapper">
              <img src={portis} className="sponsor-img"  alt="devfolio"></img>
            </div>


          </div>
        </div>
        
        <div className="platform-partners sponsor-tier">
          <h1 className="pb-4">Platform Partners</h1>

          <div className="row">
            <div className="col-sm-6 col-md-4 sponsor-img-wrapper">
              <img src={devfolio} className="sponsor-img"  alt="devfolio"></img>
            </div>

            <div className="col-sm-6 col-md-4 sponsor-img-wrapper">
              <img src={digital} className="sponsor-img"  alt="devfolio"></img>
            </div>

            <div className="col-sm-6 col-md-4 sponsor-img-wrapper">
              <img src={echo} className="sponsor-img"  alt="devfolio"></img>
            </div>

          </div>
        </div>
        
        <div className="community-partners sponsor-tier">
          <h1  className="pb-4">Community Partners</h1>

          <div className="row">
            <div className="col-sm-6 col-md-4 sponsor-img-wrapper">
              <img src={gdgpune} className="sponsor-img"  alt="devfolio"></img>
            </div>

            <div className="col-sm-6 col-md-4 sponsor-img-wrapper">
              <img src={gdgpune} className="sponsor-img"  alt="devfolio"></img>
            </div>

            <div className="col-sm-6 col-md-4 sponsor-img-wrapper">
              <img src={gdgpune} className="sponsor-img"  alt="devfolio"></img>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Sponsors;
