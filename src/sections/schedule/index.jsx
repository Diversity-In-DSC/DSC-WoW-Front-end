import React from "react";
import Card from "../../shared_components/card/index";
import "./styles/index.css";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import EventCard from "./components/eventCard";

const Schedule = () => {
  return (
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
    document.querySelector(`.${tabID}`).scrollLeft -= 300;
  };

  const scrollForward = (index) => {
    const tabID = `tab-${index}`;
    document.querySelector(`.${tabID}`).scrollLeft += 300;
  };

  const scrollCheck = (index) => {
    const tabID = `tab-${index}`;
    const left = document.querySelector(`.${tabID}`).scrollLeft;
    const visible = document.querySelector(`.${tabID}`).clientWidth;
    const total = document.querySelector(`.${tabID}`).scrollWidth;

    if (left + visible >= total) {
      document.querySelector(".right-paddle").classList.add("hidden");
      document.querySelector(".left-paddle").classList.remove("hidden");
    } else if (left == 0) {
      document.querySelector(".right-paddle").classList.remove("hidden");
      document.querySelector(".left-paddle").classList.add("hidden");
    }
  };

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
          <Tab
            style={{ outline: "none", maxWidth: "8rem", minWidth: "7rem" }}
            label="Day 5"
            {...a11yProps(4)}
          />
          <Tab
            style={{ outline: "none", maxWidth: "8rem", minWidth: "7rem" }}
            label="Day 6"
            {...a11yProps(5)}
          />
          <Tab
            style={{ outline: "none", maxWidth: "8rem", minWidth: "7rem" }}
            label="Day 7"
            {...a11yProps(6)}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <div className="scrollarrows_wrapper">
          <h6 style={date}>Dec 7, 2020</h6>
          <div
            className="row scrollable__row tab-0"
            onScroll={() => scrollCheck(0)}
          >
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
          </div>
          <button className="left-paddle paddle" onClick={() => scrollBack(0)}>
            <i className="fas fa-arrow-left"></i>
          </button>
          <button
            className="right-paddle paddle"
            onClick={() => scrollForward(0)}
          >
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <h6 style={date}>Dec 8, 2020</h6>
        <div className="row scrollable__row">
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <button className="left-paddle paddle hidden">{"<"}</button>
          <button className="right-paddle paddle">{">"}</button>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <h6 style={date}>Dec 9, 2020</h6>
        <div className="row scrollable__row">
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />

          <button className="left-paddle paddle hidden">{"<"}</button>
          <button className="right-paddle paddle">{">"}</button>
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <h6 style={date}>Dec 10, 2020</h6>
        <div className="row scrollable__row">
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </TabPanel>
      <TabPanel value={value} index={4}>
        Day 5
      </TabPanel>
      <TabPanel value={value} index={5}>
        Day 6
      </TabPanel>
      <TabPanel value={value} index={6}>
        Day 7
      </TabPanel>
    </div>
  );
}

const date = {
  padding: "10px 0 0 15px",
  marginBottom: 0,
  fontSize: "1.8rem",
  color: "#6c757d",
};
