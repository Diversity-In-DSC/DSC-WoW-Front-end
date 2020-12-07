import React from "react";
import Card from "../../shared_components/card/index";
import "./styles/index.css";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

import EventCard from "./components/eventCard";

const Schedule = () => {
  return (
    <>
      <section className="schedule__wrapper" id="#schedule">
        <div className="row section__header justify-content-center">
          <div className="col-md-10">Schedule</div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-9 col-md-12 col-xs-12 scrollable__row__content">
            <ScrollableTabsButtonAuto />
          </div>
        </div>
      </section>
      <section className="hackathon__card__section">
        <Card />
      </section>
    </>
  );
};

export default Schedule;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Typography>{children}</Typography>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const scrollBack = (index) => {
    const tabID = `tab-${index}`;
    document.querySelector(`.${tabID}`).scrollLeft -= 500;
  };

  const scrollForward = (index) => {
    const tabID = `tab-${index}`;
    document.querySelector(`.${tabID}`).scrollLeft += 500;
  };

  const scrollCheck = (index) => {
    const tabID = `tab-${index}`;
    const left = document.querySelector(`.${tabID}`).scrollLeft;
    const visible = document.querySelector(`.${tabID}`).clientWidth;
    const total = document.querySelector(`.${tabID}`).scrollWidth;

    if (left > 0) {
      // document.querySelector(".right-paddle").classList.add("hidden");
      document.querySelector(".left-paddle").classList.remove("hidden");
    } else if (left == 0) {
      document.querySelector(".right-paddle").classList.remove("hidden");
      document.querySelector(".left-paddle").classList.add("hidden");
    }

    if (left + visible + 10 > total) {
      document.querySelector(".right-paddle").classList.add("hidden");
    } else {
      document.querySelector(".right-paddle").classList.remove("hidden");
    }
  };

  const eventsScheduleData = [
    [
      {
        title: "Keynote",
        time: "5:00 PM - 5:30 PM",
        speaker: "Siddhant, Erica",
        hero: "day1/1.png",
        link: "https://bit.ly/dscwowday1",
      },
      {
        title: "Your first ML Project",
        time: "5:30 PM - 6:30 PM",
        speaker: "Sayak Paul",
        hero: "day1/3.png",
        link: "https://bit.ly/dscwowday1",
      },
      {
        title: "Quiz Time!",
        time: "6:30 PM - 6:45 PM",
        speaker: "",
        hero: "day1/4.jpg",
        link: "https://bit.ly/dscwowday1",
      },
      {
        title: "Lightning Talk",
        time: "6:45 PM - 7:25 PM",
        speaker: "Usha Rengaraju",
        hero: "day1/5.jpg",
        link: "https://bit.ly/dscwowday1",
      },
      {
        title: "Panel Discussion",
        time: "7:30 PM - 8:00 PM",
        speaker: "Rachel Hu",
        hero: "day1/6.png",
        link: "https://bit.ly/dscwowday1",
      },
    ],
    [
      {
        title: "Introduction to Blockchain",
        time: "5:00 PM - 5:50 PM",
        speaker: "Pranay Chauhan",
        hero: "day2/1.jpg",
        link: "",
      },
      {
        title: "Design Thinking",
        time: "6:00 PM - 6:30 PM",
        speaker: "Rohan Mishra, Charu Choudha",
        hero: "day2/2.jpg",
        link: "",
      },
      {
        title: "Quiz Time!",
        time: "6:30 PM - 6:45 PM",
        speaker: "",
        hero: "day2/3.jpg",
        link: "",
      },
      {
        title: "Community Building",
        time: "6:50 PM - 7:25 PM",
        speaker: "Nikhil Raichur",
        hero: "day2/4.png",
        link: "",
      },
      {
        title: "Building your personal brand",
        time: "7:30 PM - 8:00 PM",
        speaker: "Miri Rodriguez Hu",
        hero: "day2/5.png",
        link: "",
      },
    ],

    [
      {
        title: "Workshop on Flutter",
        time: "5:00 PM - 5:50 PM",
        speaker: "Mrinal Jain",
        hero: "day3/1.png",
        link: "",
      },
      {
        title: "Web Development / Designing",
        time: "6:00 PM - 6:40 PM",
        speaker: "Vrijraj Singh",
        hero: "day3/2.png",
        link: "",
      },
      {
        title: "Quiz Time!",
        time: "6:30 PM - 6:45 PM",
        speaker: "",
        hero: "day3/3.jpg",
        link: "",
      },
      {
        title: "Building Chat App with Flutter & Firebase",
        time: "7:00 PM - 7:50 PM",
        speaker: "Sanskar Tiwari",
        hero: "day3/4.png",
        link: "",
      },
    ],

    [
      {
        title: "Building AR/VR App in less than 20 min",
        time: "5:00 PM - 5:40 PM",
        speaker: "Koren Grishpoon",
        hero: "day4/1.png",
        link: "",
      },
      {
        title: "Building AR Apps on web",
        time: "6:00 PM - 6:50 PM",
        speaker: "Ada Rose Canon",
        hero: "day4/2.png",
        link: "",
      },
      {
        title: "Quiz Time!",
        time: "7:00 PM - 7:15 PM",
        speaker: "",
        hero: "day4/3.jpg",
        link: "",
      },
      {
        title: "How to manage work-life balance",
        time: "7:15 PM - 7:45 PM",
        speaker: "hear from Googlers",
        hero: "day4/4.png",
        link: "",
      },
    ],
  ];

  return (
    <div className={`${classes.root} col-md-12 col-lg-12 col-xs-12`}>
      <AppBar position="static" color="ffffff" elevation={0}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab
            style={{ outline: "none", maxWidth: "8rem", minWidth: "7rem" }}
            label="Day 1"
            {...a11yProps(0)}
          />
          <Tab
            style={{ outline: "none", maxWidth: "8rem", minWidth: "7rem" }}
            label="Day 2"
            {...a11yProps(1)}
          />
          <Tab
            style={{ outline: "none", maxWidth: "8rem", minWidth: "7rem" }}
            label="Day 3"
            {...a11yProps(2)}
          />
          <Tab
            style={{ outline: "none", maxWidth: "8rem", minWidth: "7rem" }}
            label="Day 4"
            {...a11yProps(3)}
          />
        </Tabs>
      </AppBar>

      {eventsScheduleData.map((events, index) => {
        return (
          <TabPanel value={value} index={index}>
            <div className="scrollarrows_wrapper">
              <div
                className={`row scrollable__row tab-${index}`}
                onScroll={() => scrollCheck(index)}
              >
                {events.map((event) => {
                  return (
                    <EventCard
                      title={event.title}
                      link={event.link}
                      image={event.hero}
                      time={event.time}
                      speaker={event.speaker}
                    />
                  );
                })}
              </div>
              <button
                className="left-paddle paddle hidden"
                onClick={() => scrollBack(index)}
              >
                <i className="fas fa-arrow-left"></i>
              </button>
              <button
                className="right-paddle paddle"
                onClick={() => scrollForward(index)}
              >
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </TabPanel>
        );
      })}
    </div>
  );
}
