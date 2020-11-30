import React from "react";
import ReactFAQ from "react-faq-component";
import "./styles/index.css";

const Faq = () => {
  const data = {
    // title: "FAQ's",
    rows: [
      {
        title: "What does DSC WOW stand for?",
        content:
          'DSC WOW stands for "DSC Week of Wonders". It\'s the brainchild event of 100+ DSCs who have collaborated to bring an amazing week to your doorstep!',
      },
      {
        title: "What are the perks of attending DSC WOW?",
        content:
          'In addition to various sessions by the best speakers in their domains, there\'s a 48-hour hackathon called "CodeOffDuty" with amazing problem statements and prizes! There are also goodies and swags for some lucky people!',
      },
      {
        title: "Who all can attend DSC WOW?",
        content:
          "Students, Developers, Communities & Institutions are all encouraged to attend this event!",
      },
      {
        title: "Is DSC WOW free to attend?",
        content: "Yes, it's FREE! Just put on your learning caps and hop on!",
      },

      {
        title: "Will Participation Certificates be provided?",
        content:
          "Yes, participation certificates will be provided to all who attend the events.",
      },

      {
        title: "What if I don't know how to code?",
        content:
          "That is not a problem! A great way to learn how to code is by attending a hackathon. It's an event for like-minded people to share what they are interested in and teach each-other what they are passionate about, whether its coding, electronics or anything else you want to know about. You never know what new skill you might pick up! You can also ask specific questions to our mentors and in the Discord server, where people are there to help. Plus we have planned numerous workshops and talks for you guys to make the learning process better.",
      },
      {
        title: "Can the team members be from different colleges?",
        content:
          "Yes, we believe in healthy team spirit which will be ensured if you are allowed to work with the team of your choice",
      },
      {
        title: "Can I start working on my hack before the hackathon?",
        content:
          "No. In the interest of fairness, students should not be working on their projects before the hackathon begins",
      },
    ],
  };

  return (
    <section className="faq-section" id="faq-section">
      <div className="row section__header justify-content-center">
        <div className="col-md-10">Frequently Asked Questions</div>
      </div>
      <div className="row justify-content-center">
        <div className=" col-md-9">
          <div className="faq-container">
            <ReactFAQ
              data={data}
              styles={{
                // bgColor: "#f5f5f5",
                titleTextColor: "black",
                rowTitleColor: "black",
                rowTitleTextSize: "1.1rem",
                rowContentColor: "#5b5e5b",
                rowContentTextSize: "1rem",
                rowContentPaddingTop: "10px",
                rowContentPaddingBottom: "10px",
                arrowColor: "blue",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
