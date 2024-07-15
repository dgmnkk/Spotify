import React from "react";
import "./layout.scss";
// import SignUp from "../sing up message/SignUp";
// import { Outlet } from "react-router-dom";
import Navbar from "../bars/navbar/Navbar";
import Sidebar from "../bars/sidebar/Sidebar";
import Library from "../bars/sidebar/Library";

export default function Layout() {
  return (
    <div className="layout">
      <div className="sidebar-container">
        <Sidebar />
        <Library />
      </div>
      <Navbar />
      {/* <Outlet /> */}
    </div>
  );
}
