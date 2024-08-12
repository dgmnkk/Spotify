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

  const [step1, setStep1] = useState(true);
  const [step2, setStep2] = useState(null);
  const [step3, setStep3] = useState(null);

  const checkEmail = () => {
    if (document.getElementById("email").value !== "") {
      setStep1(false);
      setStep2(true);
    } else {
      alert("Email cannot be empty. Example: name@domain.com");
    }
  };

  const checkPassword = () => {
    if (document.getElementById("password").value !== "") {
      setStep2(false);
      setStep3(true);
    } else {
      alert("Password cannot be empty.");
    }
  };

  const checkData = () => {
    if (document.getElementById("password").value !== "") {
      setStep3(false);
      setStep3(true);
    } else {
      alert("Password cannot be empty.");
    }
  };

  const step2Out = () => {
    setStep2(false);
    setStep1(true);
  };

  const step3Out = () => {
    setStep3(false);
    setStep2(true);
  };

  return (
    <div className="register">
      <div className="reg-container">
        <img src={logo} alt="logo" />
        {step1 ? (
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
        ) : (
          <></>
        )}

        {step2 ? (
          <>
            <div className="progress-brd">
              <div className="progress-perc33"></div>
            </div>
            <div className="reg-progress-info">
              <button
                onClick={() => {
                  step2Out();
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
          <></>
        )}

        {step3 ? (
          <>
            <div className="progress-brd">
              <div className="progress-perc67"></div>
            </div>
            <div className="reg-progress-info">
              <button
                onClick={() => {
                  step3Out();
                }}
                className="back-btn"
              >
                <Icon name="back" color="lightgray" />
              </button>
              <div className="info">
                <div className="step">Step 2 in 3</div>
                <div className="step-info">Tell about yourself</div>
              </div>
            </div>
            <form>
              <label className="label-text">Name</label>
              <input id="name" type="text" className="input" />

              <label className="label-text">Date of birth</label>
              <input className="input date" type="date" />

              <label className="label-text">Sex</label>
              <label className="input-container">
                Male
                <input type="radio" name="sex" value="male" />
                <span className="checkmark"></span>
              </label>
              <label className="input-container">
                Female
                <input type="radio" name="sex" value="female" />
                <span className="checkmark"></span>
              </label>
              <label className="input-container">
                Non-binary
                <input type="radio" name="sex" value="nonbinary" />
                <span className="checkmark"></span>
              </label>
              <label className="input-container">
                Other
                <input type="radio" name="sex" value="other" />
                <span className="checkmark"></span>
              </label>
              <label className="input-container">
                Don't want to specify
                <input type="radio" name="sex" value="unknown" />
                <span className="checkmark"></span>
              </label>

            </form>
            <button
              onClick={() => {
                checkData();
              }}
              className="btn next in-form"
            >
              Next
            </button>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
