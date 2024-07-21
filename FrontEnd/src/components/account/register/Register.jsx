import React from "react";
import { Link } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import AppleIcon from "@mui/icons-material/Apple";
import SLogo from "../../../assets/ico.svg";
import "./register.scss";

export default function Register() {
  const logo = SLogo;

  return (
    <div className="register">
      <div className="reg-container">
        <img src={logo} alt="logo" />
        <div className="title">Sign up to start listening</div>
        <label htmlFor="email" className="email-text">
          Email
        </label>
        <input
          name="email"
          type="text"
          className="email-input"
          placeholder="name@domain.com"
        />
        <button className="btn next">Next</button>
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
      </div>
    </div>
  );
}
