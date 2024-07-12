import React from "react";
import "./sidebar.scss";

export default function Sidebar() {
  const logo = "./ico-text.svg";

  return (
    <>
      <div className="container">
        <img src={logo} alt="logo" />
      </div>
    </>
  );
}
