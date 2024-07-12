import React from "react";
import { Link } from "react-router-dom";
import { Icons } from "../../Icons";
import logo from '../../../assets/ico-text.svg';
import "./sidebar.scss";

export default function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <Link to="/">
          <Icons name="home" />
        </Link>
      </div>
    </>
  );
}
