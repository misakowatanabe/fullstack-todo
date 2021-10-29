import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => (
  <div
    style={{
      textAlign: "center",
      margin: "100px auto 100px auto",
      color: "#383838",
    }}
  >
    <h1>Sorry, something went wrong :(</h1>
    <NavLink to="/signin">Go Home</NavLink>
  </div>
);

export default Error;
