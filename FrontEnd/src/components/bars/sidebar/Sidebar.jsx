import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "../../Icons";
import logo from '../../../assets/ico-text.svg';
import "./sidebar.scss";

export default function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <Link to="/" className="item">
          <div className="icon">
            <Icon name="home" />
          </div>
          Home
        </Link>
        <Link to="search" className="item">
          <div className="icon">
            <Icon name="search" />
          </div>
          Search
        </Link>
      </div>
    </>
  );
}
