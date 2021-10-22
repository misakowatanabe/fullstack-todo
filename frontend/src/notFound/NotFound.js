import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => (
  <div
    style={{
      textAlign: "center",
      margin: "100px auto 100px auto",
      color: "#383838",
    }}
  >
    <h1>404 - Not Found :(</h1>
    <NavLink to="/signin">Go Home</NavLink>
  </div>
);

export default NotFound;
