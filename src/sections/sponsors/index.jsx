import React from "react";
import './styles/index.css'
import LazyLoad from 'react-lazyload';


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
<<<<<<< HEAD
    <section>

    <hr/>
    <div className="new-sponsors">

      <h1>Our Sponsors</h1>
      <br/>
 
      <div className="card">

      <div className="brochure">
        <div>
          <h4 className="">Want to be a sponsor of DSC WOW?</h4>
          <br/>
          <h4>Drop us an email at :</h4>
          <h4>sponsorship@codeoffduty.com</h4>

          <br/>
          <a href="mailto:sponsorship@codeoffduty.com">
          <button className="email-btn">Get in touch</button>
        </a>
        </div>
      </div>
     
    </div>
    <br/>

    </div>
    <hr/>




      <div className="our-sponsors">
        <div className="diamond-sponsors ">

          <div className="sponsor-tier-title">
            <h1>Diamond Sponsors</h1>
          </div>
          
          <LazyLoad>
          <div className="row sponsors">
            <div className="col-xs-6 col-md-5 sponsor-img-wrapper">
              <img src={devfolio} className="sponsor-img"  alt="devfolio"></img>
            </div>

            <div className="col-xs-6 col-md-5 sponsor-img-wrapper">
              
              <img src={digital} className="sponsor-img"  alt="devfolio"></img>
              
            </div>

            <div className="col-xs-6 col-md-5 sponsor-img-wrapper">
              <img src={echo} className="sponsor-img"  alt="devfolio"></img>
            </div>

            <div className="col-xs-6 col-md-5 sponsor-img-wrapper">
              <img src={give} className="sponsor-img"  alt="devfolio"></img>
            </div>

          </div>
          </LazyLoad>
          
        </div>

        <hr/>

        <div className="platinum-sponsors sponsor-tier">
          <h1 className="pb-4">Platinum Sponsors</h1>
          <div className="row sponsors">
            
            <div className="col-sm-6 col-md-3 sponsor-img-wrapper">
              <img src={give} className="sponsor-img"  alt="devfolio"></img>
            </div>

            <div className="col-sm-6 col-md-3 sponsor-img-wrapper">
              <img src={jetbrains} className="sponsor-img"  alt="devfolio"></img>
            </div>

            <div className="col-sm-6 col-md-3 sponsor-img-wrapper">
              <img src={jovian} className="sponsor-img"  alt="devfolio"></img>
            </div>

            <div className="col-sm-6 col-md-3 sponsor-img-wrapper">
              <img src={matic} className="sponsor-img"  alt="devfolio"></img>
            </div>

            <div className="col-sm-6 col-md-3 sponsor-img-wrapper">
              <img src={portis} className="sponsor-img"  alt="devfolio"></img>
            </div>


          </div>
        </div>

        <hr/>

        <div className="gold-sponsors sponsor-tier">
          <h1 className="pb-4">Gold Sponsors</h1>
          <div className="row sponsors">
            <div className="col-sm-6 col-md-3 sponsor-img-wrapper">
              <img src={devfolio} className="sponsor-img"  alt="devfolio"></img>
            </div>

            <div className="col-sm-6 col-md-3 sponsor-img-wrapper">
              <img src={digital} className="sponsor-img"  alt="digital"></img>
            </div>

            <div className="col-sm-6 col-md-3 sponsor-img-wrapper">
              <img src={echo} className="sponsor-img"  alt="echo"></img>
            </div>

            <div className="col-sm-6 col-md-3 sponsor-img-wrapper">
              <img src={fb} className="sponsor-img"  alt="devfolio"></img>
            </div>

            <div className="col-sm-6 col-md-3 sponsor-img-wrapper">
              <img src={fold} className="sponsor-img"  alt="devfolio"></img>
            </div>

            <div className="col-sm-6 col-md-3 sponsor-img-wrapper">
              <img src={gdgpune} className="sponsor-img"  alt="devfolio"></img>
            </div>

            <div className="col-sm-6 col-md-3 sponsor-img-wrapper">
              <img src={give} className="sponsor-img"  alt="devfolio"></img>
            </div>

            <div className="col-sm-6 col-md-3 sponsor-img-wrapper">
              <img src={jetbrains} className="sponsor-img"  alt="devfolio"></img>
            </div>

            <div className="col-sm-6 col-md-3 sponsor-img-wrapper">
              <img src={jovian} className="sponsor-img"  alt="devfolio"></img>
            </div>

            <div className="col-sm-6 col-md-3 sponsor-img-wrapper">
              <img src={matic} className="sponsor-img"  alt="devfolio"></img>
            </div>

            <div className="col-sm-6 col-md-3 sponsor-img-wrapper">
              <img src={portis} className="sponsor-img"  alt="devfolio"></img>
            </div>


          </div>
        </div>


        <hr/>
        
        <div className="platform-partners sponsor-tier">
          <h1 className="pb-4">Platform Partners</h1>

          <div className="row sponsors">
            <div className="col-sm-6 col-md-3 sponsor-img-wrapper">
              <img src={devfolio} className="sponsor-img"  alt="devfolio"></img>
            </div>

            <div className="col-sm-6 col-md-3 sponsor-img-wrapper">
              <img src={digital} className="sponsor-img"  alt="devfolio"></img>
            </div>

            <div className="col-sm-6 col-md-3 sponsor-img-wrapper">
              <img src={echo} className="sponsor-img"  alt="devfolio"></img>
            </div>

          </div>
        </div>

        <hr/>
        
        <div className="community-partners sponsor-tier">
          <h1  className="pb-4">Community Partners</h1>

          <div className="row sponsors">
            <div className="col-sm-6 col-md-3 sponsor-img-wrapper">
              <img src={gdgpune} className="sponsor-img"  alt="devfolio"></img>
            </div>

            <div className="col-sm-6 col-md-3 sponsor-img-wrapper">
              <img src={gdgpune} className="sponsor-img"  alt="devfolio"></img>
            </div>

            <div className="col-sm-6 col-md-3 sponsor-img-wrapper">
              <img src={gdgpune} className="sponsor-img"  alt="devfolio"></img>
            </div>

          </div>
        </div>

      </div>
      <br/>

      <hr/>
  
=======
    <section className="row about__wrapper">
      <div className="col-md-6 about__content">
        <span className="about__date">SPONSORS</span>
      </div>
>>>>>>> d8748e9988886ebbfe541ae79183a3404c5ffc7f
    </section>
  );
};

export default Sponsors;
