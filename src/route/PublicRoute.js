import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserAuthData } from "../context/slices/UserAuthDataSlice";

const PublicRoute = ({ component: Component, ...rest }) => {
  const userAuthData = useSelector(selectUserAuthData);

  return (
    <Route
      {...rest}
      render={(props) =>
        userAuthData ? <Redirect to="/dashboard" /> : <Component {...props} />
      }
    />
  );
};
export default PublicRoute;
