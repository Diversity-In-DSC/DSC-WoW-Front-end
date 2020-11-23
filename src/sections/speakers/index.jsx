import React from "react";
import SpeakerCard from "./components/speakercard";
import "./styles/index.css";

const Speakers = () => {
  return (
    <section className="speakers__wrapper" id="speakers-section">
      <div className="row section__header justify-content-center">
        <div className="col-md-10">Speakers</div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-9 col-xs-12 ">
          <div className="row">
            <SpeakerCard
              name="Sayak Paul"
              title="ML Expert"
              description="Deep Learning Associate at PyImageSearch | Co-author of Web-DL
                book (bit.ly/webdl-book)"
              linkedin="https://www.linkedin.com/in/sayak-paul/"
              image="images/speakers/sayak.jpg"
            />
            <SpeakerCard
              name="Mrinal Jain"
              title="Frontend Engineer"
              description="Tech Speaker | Community Lead - Facebook Developer Circles | Frontend Engineer -WittyFeed | Tech Evangelist- Mozilla"
              image="images/speakers/mrinal.jpg"
              linkedin="https://www.linkedin.com/in/mrinaljain/"
            />
            <SpeakerCard
              name="Sanskar Tiwari"
              image="images/speakers/sanskar.jpg"
              description="SDE @ PuStack, Educator at Youtube Blog @ flutternerd.com"
              linkedin="https://www.linkedin.com/in/lamsanskar/"
              twitter="https://twitter.com/Theindianappguy"
              title="Flutter Developer"
            />
            <SpeakerCard
              name="Koren Grinshpoon"
              title="echoAR"
              description="Founder & COO at echoAR (Techstars '19)"
              image="images/speakers/koren.jpg"
              linkedin="https://www.linkedin.com/in/korengrinshpoon/"
            />
            <SpeakerCard
              name="Nikhil Madhusudan"
              title="Program Manager"
              image="images/speakers/nikhil.jpg"
              description="Program Manager at Google, Former CEO @JellyCone"
              linkedin="https://www.linkedin.com/in/nikhilraichur/"
            />
            <SpeakerCard
              title="Developer Advocate"
              name="Ada Rose Cannon"
              description="Developer Advocate/Staff Engineer at Samsung & Co-chair of the W3C Immersive Group"
              image="images/speakers/ada.jpg"
            />

            <SpeakerCard
              title="Program Manager"
              linkedin="https://www.linkedin.com/in/sidagarwal04"
              name="Siddhant Aggarwal"
              description="ACM's Distinguished Speaker | Developer Relations @ Google India | Tech Communities + Edu + Design + Startups"
              image="images/speakers/sid.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speakers;
