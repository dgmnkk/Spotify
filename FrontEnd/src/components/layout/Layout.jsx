import React from "react";
import "./layout.scss";
import SignUp from "../sing up message/SignUp";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Outlet />
      <SignUp />
    </>
  );
}
