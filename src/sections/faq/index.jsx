import React from "react";
import ReactFAQ from 'react-faq-component';
import './styles/index.css'


const Faq = () => {

  const data = {
    title: "FAQ's",
    rows: [
      {
        title: "What does DSC WOW stand for?",
        content: 'DSC WOW stands for "DSC Week of Wonders". It\'s the brainchild event of 121 DSCs who came together to bring an amazing week to your doorstep! '
      },
      {
        title: "What are the perks of attending DSC WOW?",
        content: "In addition to various sessions by the best speakers in their domains, there's a 48-hour hackathon called \"CodeOffDuty\" with amazing problem statements and prizes! There are also goodies and swags for some lucky people!"
      },
      {
        title: "Who all can attend DSC WOW?",
        content: "Students, Developers, Communities & Institutions are all encouraged to attend this event!"
      },
      {
        title: "Is DSC WOW free to attend?",
        content: "Yes, it's FREE! Just put on your learning caps and hop on!"
      },
  
      {
        title: "Will Participation Certificates be provided?",
        content: "Yes, participation certificates will be provided to all who attend the events."
      }]
  }

  return (
    <section className="faq-section">
      <div className="row">
      <div className="col-md-2"></div>
      <div className=" col-xs-9 col-md-8">
      <div className="faq-container">
      <ReactFAQ data={data} styles={{
        bgColor: "#f5f5f5",
        titleTextColor: "black",
        rowTitleColor: "black",
        rowTitleTextSize: '16px',
        rowContentColor: "#5b5e5b",
        rowContentTextSize: '15px',
        rowContentPaddingTop: '10px',
        rowContentPaddingBottom: '10px',
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
