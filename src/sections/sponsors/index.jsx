import React from "react";
import "./styles/index.css";
//import LazyLoad from "react-lazyload";

import devfolio from "./assets/devfolio.png";
import digital from "./assets/digital.png";
import echo from "./assets/echo.png";
import fb from "./assets/fb.png";
import fold from "./assets/fold.png";
import give from "./assets/give.png";
import jetbrains from "./assets/jetbrains.png";
import jovian from "./assets/jovian.png";
import matic from "./assets/matic.png";
import flutterchandigarh from "./assets/flutter-chandigarh.png";
import scaler from './assets/scaler.png';
import airmeet from './assets/airmeet.png';
import mysuru from './assets/mysuru.png';
import tezos from './assets/tezos.png';
import streamyard from './assets/streamyard.png';
import manning from './assets/manning.png';
import hattsoff from './assets/hattsoff.png';
import replit from './assets/replit.png';
import sketch from './assets/sketch.png';
import voiceflow from './assets/voiceflow.png';
import karnatakapolice from './assets/karnatakapolice.png';
import zulip from './assets/zulip.png';
//import goforce from './assets/goforce.png';
import progate from './assets/progate.png';
import gdgmysuru from './assets/gdgmysuru.png';
import tfmysuru from './assets/tfmysuru.png';
import googledev from './assets/googledev.png';
import portis from './assets/portis.png';

const Sponsors = () => {
  return (
    <section id="sponsors-section">
      <div className="row section__header justify-content-center">
        <div className="col-md-10">Our Proud Sponsors</div>
      </div>

      <div className="our-sponsors">
      <div className="sponsor-tier">
          <div className="sponsor-tier-title">Title Sponsors</div>
          <div className="row justify-content-center">
            <div className="col-md-10">
                <div className="row sponsors justify-content-center">
                  <div className="col-md-4 sponsor-img-wrapper">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.scaler.com/edge/?utm_source=dsc_channels&utm_medium=social&utm_campaign=dsc_wow"
                    >
                      <img
                        src="images/loader.gif"
                        data-src={scaler}
                        className="sponsor-img lazy"
                        alt="scaler"
                      ></img>
                    </a>
                  </div>
                </div>
            </div>
          </div>
     </div>
     <br/>

     <div className="sponsor-tier">
          <div className="sponsor-tier-title">Platinum Sponsors</div>
          <div className="row justify-content-center">
            <div className="col-md-10">
                <div className="row sponsors justify-content-center">
                  <div className="col-md-4 sponsor-img-wrapper">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.airmeet.com/"
                    >
                      <img
                        src="images/loader.gif"
                        data-src={airmeet}
                        className="sponsor-img lazy"
                        alt="airmeet"
                      ></img>
                    </a>
                  </div>
                  <div className="col-md-4 sponsor-img-wrapper">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://devfolio.co/"
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
                      href="https://developers.google.com/"
                    >
                      <img
                        src="images/loader.gif"
                        data-src={googledev}
                        className="sponsor-img lazy"
                        alt="googledev"
                        style={{padding: "0"}}
                      ></img>
                    </a>
                  </div>
                  <div className="col-md-4 sponsor-img-wrapper">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.instagram.com/mysuru/"
                    >
                      <img
                        src="images/loader.gif"
                        data-src={mysuru}
                        className="sponsor-img lazy"
                        alt="mysuru"
                        style={{padding: "0"}}
                      ></img>
                    </a>
                  </div>
                </div>
            </div>
          </div>
     </div>
     <br/>

     <div className="sponsor-tier">
          <div className="sponsor-tier-title">Gold Sponsors</div>
          <div className="row justify-content-center">
            <div className="col-md-10">
                <div className="row sponsors justify-content-center">
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
                        alt="echoar"
                        style={{padding: "0"}}
                      ></img>
                    </a>
                  </div>
                  <div className="col-md-4 sponsor-img-wrapper">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://tezos.com/"
                    >
                      <img
                        src="images/loader.gif"
                        data-src={tezos}
                        className="sponsor-img lazy"
                        alt="tezos"
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
                  <div className="col-md-4 sponsor-img-wrapper">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://fold.money/"
                    >
                      <img
                        src="images/loader.gif"
                        data-src={fold}
                        className="sponsor-img lazy"
                        alt="fold"
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
                      href="https://www.digitalocean.com/"
                    >
                      <img
                        src="images/loader.gif"
                        data-src={digital}
                        className="sponsor-img lazy"
                        alt="digitalocean"
                      ></img>
                    </a>
                  </div>
                  <div className="col-md-4 sponsor-img-wrapper">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://streamyard.com/"
                    >
                      <img
                        src="images/loader.gif"
                        data-src={streamyard}
                        className="sponsor-img lazy"
                        alt="streamyard"
                        style={{padding: "0"}}
                      ></img>
                    </a>
                  </div>
                  <div className="col-md-4 sponsor-img-wrapper">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.manning.com/"
                    >
                      <img
                        src="images/loader.gif"
                        data-src={manning}
                        className="sponsor-img lazy"
                        alt="manning"
                        style={{padding: "0"}}
                      ></img>
                    </a>
                  </div>
                </div>
            </div>
          </div>
     </div>
     <br/>

     <div className="sponsor-tier">
     <div className="sponsor-tier-title">Silver Sponsors</div>
     <div className="row justify-content-center">
       <div className="col-md-10">
           <div className="row sponsors justify-content-center">
             <div className="col-md-4 sponsor-img-wrapper">
               <a
                 target="_blank"
                 rel="noopener noreferrer"
                 href="https://www.hattsoffstore.com/"
               >
                 <img
                   src="images/loader.gif"
                   data-src={hattsoff}
                   className="sponsor-img lazy"
                   alt="hattsoff"
                   style={{padding: "0"}}
                 ></img>
               </a>
             </div>
             <div className="col-md-4 sponsor-img-wrapper">
               <a
                 target="_blank"
                 rel="noopener noreferrer"
                 href="https://repl.it/"
               >
                 <img
                   src="images/loader.gif"
                   data-src={replit}
                   className="sponsor-img lazy"
                   alt="replit"
                   style={{padding: "0"}}
                 ></img>
               </a>
             </div>
             <div className="col-md-4 sponsor-img-wrapper">
               <a
                 target="_blank"
                 rel="noopener noreferrer"
                 href="https://www.sketch.com/"
               >
                 <img
                   src="images/loader.gif"
                   data-src={sketch}
                   className="sponsor-img lazy"
                   alt="sketch"
                   style={{padding: "0"}}
                 ></img>
               </a>
             </div>
             <div className="col-md-4 sponsor-img-wrapper">
               <a
                 target="_blank"
                 rel="noopener noreferrer"
                 href="https://www.voiceflow.com/"
               >
                 <img
                   src="images/loader.gif"
                   data-src={voiceflow}
                   className="sponsor-img lazy"
                   alt="voiceflow"
                 ></img>
               </a>
             </div>
             <div className="col-md-4 sponsor-img-wrapper">
               <a
                 target="_blank"
                 rel="noopener noreferrer"
                 href="https://www.manning.com/"
               >
                 <img
                   src="images/loader.gif"
                   data-src={manning}
                   className="sponsor-img lazy"
                   alt="manning"
                   style={{padding: "0"}}
                 ></img>
               </a>
             </div>
             <div className="col-md-4 sponsor-img-wrapper">
               <a
                 target="_blank"
                 rel="noopener noreferrer"
                 href="https://zulip.com/"
               >
                 <img
                   src="images/loader.gif"
                   data-src={zulip}
                   className="sponsor-img lazy"
                   alt="zulip"
                 ></img>
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
                   className="sponsor-img lazy"
                   alt="jetbrains"
                 ></img>
               </a>
             </div>
             <div className="col-md-4 sponsor-img-wrapper">
               <a
                 target="_blank"
                 rel="noopener noreferrer"
                 href="https://www.facebook.com/groups/DevCIndore/"
               >
                 <img
                   src="images/loader.gif"
                   data-src={fb}
                   className="sponsor-img lazy"
                   alt="fbdevcircleindore"
                   
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
                   alt="givemycertificate"
                   style={{padding: "0"}}
                 ></img>
               </a>
             </div>
           </div>
       </div>
     </div>
</div>
<br/>

     <div className="sponsor-tier">
     <div className="sponsor-tier-title">Education Partners</div>
     <div className="row justify-content-center">
       <div className="col-md-10">
           <div className="row sponsors justify-content-center">
             
             <div className="col-md-4 sponsor-img-wrapper">
               <a
                 target="_blank"
                 rel="noopener noreferrer"
                 href="https://progate.com/"
               >
                 <img
                   src="images/loader.gif"
                   data-src={progate}
                   className="sponsor-img lazy"
                   alt="progate"
                   style={{padding: "0"}}
                 ></img>
               </a>
             </div>
           </div>
       </div>
     </div>
</div>
<br/>

<div className="sponsor-tier">
<div className="sponsor-tier-title">Community Partners</div>
<div className="row justify-content-center">
  <div className="col-md-10">
      <div className="row sponsors justify-content-center">
      <div className="col-md-4 sponsor-img-wrapper">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://flutterchandigarh.github.io/#/"
          >
            <img
              src="images/loader.gif"
              data-src={flutterchandigarh}
              className="sponsor-img lazy"
              alt="flutterchandigarh"
              style={{padding: "0"}}
            ></img>
          </a>
        </div>
        <div className="col-md-4 sponsor-img-wrapper">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.meetup.com/Google-Developers-group-Mysuru/"
          >
            <img
              src="images/loader.gif"
              data-src={gdgmysuru}
              className="sponsor-img lazy"
              alt="gdgmysuru"
              style={{padding: "0"}}
            ></img>
          </a>
        </div>
        <div className="col-md-4 sponsor-img-wrapper">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.meetup.com/TFUG-Mysuru/"
          >
            <img
              src="images/loader.gif"
              data-src={tfmysuru}
              className="sponsor-img lazy"
              alt="tfmysuru"
            ></img>
          </a>
        </div>
        <div className="col-md-4 sponsor-img-wrapper">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/groups/DevCIndore/"
          >
            <img
              src="images/loader.gif"
              data-src={fb}
              className="sponsor-img lazy"
              alt="fbdevcircleindore"
            ></img>
          </a>
        </div>
        <div className="col-md-4 sponsor-img-wrapper">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.ksp.gov.in/"
          >
            <img
              src="images/loader.gif"
              data-src={karnatakapolice}
              className="sponsor-img lazy"
              alt="karnatakapolice"
              style={{padding: "2rem"}}
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
