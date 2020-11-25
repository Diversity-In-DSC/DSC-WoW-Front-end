import React, { useState } from "react";
import Modal from "react-modal";
import "./styles/index.css";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import Lottie from "lottie-react-web";
import animation from "./lottie.json";

// Icons
import EmailIcon from "@material-ui/icons/Email";
import PersonIcon from "@material-ui/icons/Person";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "100%",
    },
  },
}));

const RegisterModal = ({ isOpen, closeModal, setRegistered }) => {
  const classes = useStyles();

  const refId = (new URLSearchParams(window.location.search)).get("ref");

  const [isRegistered, setIsRegistered] = useState(false);
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);
  const [ref, setRef] = useState(refId);

  const register = (e) => {
    e.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name, email: email, ref: ref })
    };

    fetch('https://api.dscwow.tech/api/user/register', requestOptions)
      .then((response) => {
        console.log(response);
        // Add success alert here.
      })
      .catch((err) => {
        console.log(err);
        // Add error alert here.
      })

    // setIsRegistered(true);
  }

  return (
    <Modal
      isOpen={isOpen}
      //   onAfterOpen={afterOpenModal}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      onRequestClose={closeModal}
    >
      {isRegistered && (
        <div className="registered__content" style={{ maxWidth: "450px" }}>
          <div className="register__lottie">
            <Lottie
              options={{
                animationData: animation,
                loop: false,
              }}
            />
          </div>
          <h3>You're all set!</h3>
          <p>
            Grab some nachos and be ready for the event day, We'll email you all
            the details before the event.
          </p>

          <Button
            className="col-lg-4 col-md-6 col-xs-12 registered__close"
            variant="contained"
            color="secondary"
            disableElevation={true}
            onClick={setRegistered}
            style={{ outline: "none" }}
          >
            Close
          </Button>
        </div>
      )}
      {!isRegistered && (
        <img className="register__bg" src="images/patterns/1.jpg" />
      )}

      {!isRegistered && (
        <div className="register__content">
          <h2>Registration</h2>
          <h4>
            Your doorway to the "
            <span style={{ color: "red" }}>Week Of Wonders</span>"
          </h4>

          <form
            className={`${classes.root} register__form`}
            autoComplete="off"
          >
            <TextField
              id="name"
              type="text"
              label="Name"
              variant="outlined"
              required={true}
              value={name}
              onChange={e => setName(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              id="email"
              type="email"
              label="Email Address"
              variant="outlined"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required={true}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              id="ref"
              type="text"
              label="Referral Code (Optional)"
              variant="filled"
              required={false}
              value={ref}
              onChange={e => setRef(e.target.value)}
            />

            <Button
              type="submit"
              className="col-lg-4 col-md-6 col-xs-12"
              variant="contained"
              color="primary"
              disableElevation={true}
              disabled={!email || !name}
              onClick={register}
            >
              Register
            </Button>
          </form>
        </div>
      )}

      {!isRegistered && (
        <button className="register__close" onClick={closeModal}>
          X
        </button>
      )}
    </Modal>
  );
};

export default RegisterModal;
