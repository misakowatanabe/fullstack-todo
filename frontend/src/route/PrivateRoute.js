import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserAuthData } from "../context/slices/UserAuthDataSlice";
import { selectIsLoadingData } from "../context/slices/IsLoadingDataSlice";
import LoadingDashboard from "../loading/LoadingDashboard";
import LoadingProfile from "../loading/LoadingProfile";
import LoadingCreateUpdate from "../loading/LoadingCreateUpdate";
import Dashboard from "../dashboardElements/Common";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const userAuthData = useSelector(selectUserAuthData);
  const isLoadingData = useSelector(selectIsLoadingData);

  var currentPath;
  if (rest.path === "/dashboard") {
    currentPath = <LoadingDashboard />;
  } else if (rest.path === "/profile") {
    currentPath = <LoadingProfile />;
  } else if (rest.path === "/create") {
    currentPath = <LoadingCreateUpdate />;
  } else if (rest.path === "/update/:todoId") {
    currentPath = <LoadingCreateUpdate />;
  }

  return (
    <Dashboard>
      <Route
        {...rest}
        render={(props) =>
          isLoadingData ? (
            currentPath
          ) : userAuthData ? (
            <Component {...props} />
          ) : (
            <Redirect to="/signin" />
          )
        }
      />
    </Dashboard>
  );
};

export default PrivateRoute;
