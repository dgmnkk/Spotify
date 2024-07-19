import React from "react";
import { Link } from "react-router-dom";
import SLogo from "../../../assets/ico.svg";
import "./register.scss";

export default function Register() {
  const logo = SLogo;

  return (
    <div className="register">
      <img src={logo} alt="logo" />
      <div className="title">Sign up to start listening</div>
      <label htmlFor="email" className="email-text"></label>
      <input name="email" type="text" />
      <button>Next</button>
      <span className="or">Already have an account?</span>
      <Link to="/login" className="or-h">Log in here.</Link>
    </div>
  );
}
