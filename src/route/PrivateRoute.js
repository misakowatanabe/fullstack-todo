import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserAuthData } from "../context/slices/UserAuthDataSlice";
import { selectIsLoadingData } from "../context/slices/IsLoadingDataSlice";
import LoadingDashboard from "../loading/LoadingDashboard";
import LoadingProfile from "../loading/LoadingAccount";
import LoadingCreateUpdate from "../loading/LoadingCreateUpdate";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const userAuthData = useSelector(selectUserAuthData);
  const isLoadingData = useSelector(selectIsLoadingData);

  const CurrentPathSkeleton = () => {
    if (rest.path === "/dashboard") {
      return <LoadingDashboard />;
    } else if (rest.path === "/account") {
      return <LoadingProfile />;
    } else if (rest.path === "/create") {
      return <LoadingCreateUpdate />;
    } else if (rest.path === "/update/:todoId") {
      return <LoadingCreateUpdate />;
    }
  };

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoadingData ? (
          <CurrentPathSkeleton />
        ) : userAuthData ? (
          <Component {...props} />
        ) : (
          <Redirect to="/signin" />
        )
      }
    />
  );
};
export default PrivateRoute;
