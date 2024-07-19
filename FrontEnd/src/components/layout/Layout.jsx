import React from "react";
import "./layout.scss";
// import SignUp from "../sing up message/SignUp";
import Navbar from "../bars/navbar/Navbar";
import Sidebar from "../bars/sidebar/Sidebar";
import Library from "../bars/sidebar/Library";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const isAuth = true;

  return (
    <>
      {isAuth ? (
        <Outlet />
      ) : (
        <div className="layout">
          <div className="sidebar-container">
            <Sidebar />
            <Library />
          </div>
          <div className="main-container">
            <Navbar />
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
}
