import { Grid } from "@mui/material";
import "./sign-up.scss";
import React from "react";

export default function SignUp() {
  return (
    <Grid container spacing={2} columns={16} className="container">
      <Grid item xs={8} className="column">
        <button className="register-button">xs=8</button>
      </Grid>
      <Grid item xs={8} className="column">
        <button className="item">xs=8</button>
      </Grid>
    </Grid>
  );
}
