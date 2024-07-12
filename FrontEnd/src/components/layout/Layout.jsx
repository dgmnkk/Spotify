import React from "react";
import "./layout.scss";
// import SignUp from "../sing up message/SignUp";
// import { Outlet } from "react-router-dom";
import Navbar from "../bars/navbar/Navbar";
import Sidebar from "../bars/sidebar/Sidebar";

export default function Layout() {
  return (
    <div className="bg-backcolor container">
      <Sidebar />
      <Navbar />
      {/* <Outlet /> */}
    </div>
  );
}
