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

import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import Snackbar from "@material-ui/core/Snackbar";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "100%",
    },
  },
}));

const useReferralStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "75%",
    marginTop: "0",
    marginBottom: "1.5rem",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
    outline: "none",
  },
}));
const RegisterModal = ({ isOpen, closeModal, setRegistered }) => {
  const classes = useStyles();
  const refClasses = useReferralStyles();

  const refId = new URLSearchParams(window.location.search).get("ref");

  const [isRegistered, setIsRegistered] = useState(false);
  const [refLink, setRefLink] = useState("");
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);
  const [ref, setRef] = useState(refId);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [snackMsg, setSnackMsg] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);

  const register = (e) => {
    e.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: name, email: email, ref: ref }),
    };
    setIsRegistering(true);
    fetch("https://api.dscwow.tech/api/user/register", requestOptions)
      .then((response) => response.json())
      .then((e) => {
        setIsRegistered(true);
        setIsRegistering(false);
        setRefLink(e.referralLink);
      })
      .catch((err) => {
        console.log(err);
        closeModal();
        setSnackMsg(err);
      });

    // setIsRegistered(true);
  };

  const showSnackbar = () => setIsSnackbarOpen(true);
  const hideSnackbar = () => setIsSnackbarOpen(false);

  return (
    <>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={isSnackbarOpen}
        autoHideDuration={6000}
        onClose={() => hideSnackbar}
        message={snackMsg}
      />
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
              Grab some nachos and be ready for the event day, We'll email you
              all the details.
            </p>
            {refLink !== "" && (
              <Paper
                className={refClasses.root}
                onSubmit={(e) => e.preventDefault()}
              >
                <InputBase
                  className={refClasses.input}
                  value={refLink}
                  disabled={true}
                />
                <IconButton
                  className={refClasses.iconButton}
                  style={{ outline: "none" }}
                  aria-label="Copy"
                  onClick={() => {
                    navigator.clipboard.writeText(refLink);
                    setSnackMsg("Referral Link Copied To Clipboard");
                    showSnackbar();
                  }}
                >
                  <FileCopyIcon />
                </IconButton>
              </Paper>
            )}

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
          <img
            className="register__bg"
            src="images/patterns/1.jpg"
            alt="Registration Abstract Background"
          />
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
                onChange={(e) => setName(e.target.value)}
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
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setRef(e.target.value)}
              />

              <Button
                type="submit"
                className="col-lg-4 col-md-6 col-xs-12"
                variant="contained"
                color="primary"
                disableElevation={true}
                disabled={!email || !name || isRegistering}
                onClick={register}
              >
                {isRegistering && <CircularProgress color="primary" />}

                {!isRegistering && "Register"}
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
    </>
  );
};

export default RegisterModal;
