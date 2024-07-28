import React, { useState } from "react";
import { Link } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import AppleIcon from "@mui/icons-material/Apple";
import SLogo from "../../../assets/ico.svg";
import { Icon } from "../../Icons";
import "./register.scss";

export default function Register() {
  const logo = SLogo;
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const message = document.getElementById("alertMessage");

  const [isNextClicked, setNext] = useState(false);
  const [isNextClicked2, setNext2] = useState(false);

  const checkEmail = () => {
    if (document.getElementById("email").value !== "") {
      setNext(true);
    } else {
      emailInput.classList.add("email-alert-brd");
      message.classList.remove("hide");
    }
  };

  const checkPassword = () => {
    if (document.getElementById("password").value !== "") {
      setNext2(true);
    } else {
      passwordInput.classList.add("password-alert-brd");
      message.classList.remove("hide");
    }
  };

  const stepOut = () => {
    setNext(false);
  };

  return (
    <div className="register">
      <div className="reg-container">
        <img src={logo} alt="logo" />
        {isNextClicked ? (
          <>
            <div className="progress-brd">
              <div className="progress-perc"></div>
            </div>
            <div className="reg-progress-info">
              <button
                onClick={() => {
                  stepOut();
                }}
                className="back-btn"
              >
                <Icon name="back" color="lightgray" />
              </button>
              <div className="info">
                <div className="step">Step 1 in 3</div>
                <div className="step-info">Create password</div>
              </div>
            </div>
            <label htmlFor="password" className="password-text">
              Password
            </label>
            <div className="password">
              <input
                id="password"
                name="password"
                type="password"
                className="password-input"
              />
              <label className="alert hide" id="alertMessage">
                The password cannot be empty.
              </label>
            </div>
            <button
              onClick={() => {
                checkPassword();
              }}
              className="btn next stepf"
            >
              Next
            </button>
          </>
        ) : (
          <>
            <div className="title">Sign up to start listening</div>
            <label htmlFor="email" className="email-text">
              Email
            </label>
            <div className="email">
              <input
                id="email"
                name="email"
                type="text"
                className="email-input"
                placeholder="name@domain.com"
              />
              <label className="alert hide" id="alertMessage">
                The email address is invalid.{" "}
                <div>Use the example@email.com format</div>
              </label>
            </div>
            <button
              onClick={() => {
                checkEmail();
              }}
              className="btn next"
            >
              Next
            </button>
            <div className="upper-sep">
              <span className="abs">or</span>
            </div>
            <Link to="/login/google" className="btn other">
              <GoogleIcon />
              <span className="text">Authorize via Google</span>
            </Link>
            <Link to="/login/facebook" className="btn other">
              <FacebookRoundedIcon />
              <span className="text">Authorize via Facebook</span>
            </Link>
            <Link to="/login/apple" className="btn other">
              <AppleIcon />
              <span className="text">Authorize via Apple</span>
            </Link>
            <hr className="separator" />
            <div className="or">
              <span className="text">Already have an account?</span>
              <Link to="/login" className="href">
                Log in here
              </Link>
              <span className="text">.</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
