import React from "react";
import SpeakerCard from "./components/speakercard";
import "./styles/index.css";

const speakersData = [
  {
    name: "Rachel Hu",
    title: "Scientist",
    description:
      "Applied Scientist at AWS AI | Former Data Scientist at Ultimate Software",
    linkedin: "https://www.linkedin.com/in/rachelsonghu/",
    image: "images/speakers/rachel.jpg",
  },
  {
    name: "Koren Grinshpoon",
    title: "echoAR",
    description: "Founder & COO at echoAR (Techstars '19)",
    image: "images/speakers/koren.jpg",
    linkedin: "https://www.linkedin.com/in/korengrinshpoon/",
  },
  {
    name: "Miri Rodriguez",
    title: "Author",
    image: "images/speakers/miri.jpg",
    description: "Author: Brand Storytelling | Storyteller + Global Head of Internships at Microsoft ",
    linkedin: "https://www.linkedin.com/in/mirirod/",
  },
  {
    title: "Program Manager at Google",
    linkedin: "https://www.linkedin.com/in/hansonerica/",
    name: "Erica Hanson",
    description:
      "Developer Relations Senior Program Manager at Google (Global Lead for Developer Student Clubs Program)",
    image: "images/speakers/erica.jpg",
  },
  {
    title: "Program Manager",
    linkedin: "https://www.linkedin.com/in/sidagarwal04",
    name: "Siddhant Aggarwal",
    description:
      "ACM's Distinguished Speaker | Developer Relations at Google India | Tech Communities + Edu + Design + Startups",
    image: "images/speakers/sid.jpg",
  },
  {
    name: "Usha Rengaraju",
    title: "Data Scientist",
    description:
      "Principal Data Scientist | 2x Kaggle Grandmaster | Polymath | Corporate and Faculty Training Programs",
    linkedin: "https://www.linkedin.com/in/usha-rengaraju-b570b7a2/",
    image: "images/speakers/usha.jpg",
  },
  {
    name: "Rohan Mishra",
    title: "Product Designer",
    description:
      "Product Designer at Zomato | Maker of Match | UX Designer | UX Researcher | Founder, Design Sundays",
    image: "images/speakers/rohan.jpg",
    linkedin: "https://www.linkedin.com/in/iamrohanmishra/",
  },
  {
    name: "Charu Choudha",
    title: "UX Designer",
    description:
      "UX Designer at Google | Former UX Designer at Microsoft | Former Product Designer at Zomato",
    image: "images/speakers/charu.jpg",
    linkedin: "https://www.linkedin.com/in/charu-choudha-11725047/",
  },
  {
    name: "Sayak Paul",
    title: "Deep Learning Associate",
    description:
      "Deep Learning Associate at PyImageSearch | Co-author of Web-DL book",
    linkedin: "https://www.linkedin.com/in/sayak-paul/",
    image: "images/speakers/sayak.jpg",
  },
  {
    name: "Vrijraj Singh",
    title: "Google Developers Expert",
    description:
      "Organizer, GDG Jalandhar | Google Developers Expert for Firebase & Web Technologies",
    linkedin: "https://www.linkedin.com/in/vrijrajsingh/",
    image: "images/speakers/vrijraj.jpg",
  },
  {
    name: "Mrinal Jain",
    title: "Frontend Engineer",
    description:
      "Tech Speaker | Community Lead - Facebook Developer Circles | Frontend Engineer -WittyFeed | Tech Evangelist- Mozilla",
    image: "images/speakers/mrinal.jpg",
    linkedin: "https://www.linkedin.com/in/mrinaljain/",
  },
  {
    name: "Sanskar Tiwari",
    image: "images/speakers/sanskar.jpg",
    description: "SDE at PuStack | Educator at Youtube Blog at flutternerd.com",
    linkedin: "https://www.linkedin.com/in/lamsanskar/",
    twitter: "https://twitter.com/Theindianappguy",
    title: "Flutter Developer",
  },
  {
    name: "Pranay Chauhan",
    title: "Blockchain",
    image: "images/speakers/pranay.jpg",
    description: "BlockChain | Cyber Security | Virtualization",
    linkedin: "https://www.linkedin.com/in/pranay-singh-chauhan-00581b64/",
  },
  {
    title: "Developer Advocate",
    name: "Ada Rose Cannon",
    linkedin: "https://uk.linkedin.com/in/adarose",
    description:
      "Developer Advocate/Staff Engineer at Samsung & Co-chair of the W3C Immersive Group",
    image: "images/speakers/ada.jpg",
  },
  {
    name: "Nikhil Raichur",
    title: "Program Manager",
    image: "images/speakers/nikhil.jpg",
    description: "Program Manager at Google | Former CEO @JellyCone",
    linkedin: "https://www.linkedin.com/in/nikhilraichur/",
  },
  {
    name: "Nikita Gandhi",
    title: "Program Manager",
    image: "images/speakers/nikita.jpg",
    description: "Community Manager at Google Developers",
    linkedin: "https://www.linkedin.com/in/nikita-gandhi01/",
  }
 
  
  
];

const Speakers = () => {
  return (
    <section className="speakers__wrapper" id="speakers-section">
      <div className="row section__header justify-content-center">
        <div className="col-md-10">Speakers</div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-9 col-xs-12 ">
          <div className="row">
            {speakersData.map((e) => (
              <SpeakerCard
                key={e.linkedin}
                title={e.title}
                linkedin={e.linkedin}
                name={e.name}
                description={e.description}
                image={e.image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speakers;
