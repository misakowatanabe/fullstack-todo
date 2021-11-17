import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserAuthData } from "../context/slices/UserAuthDataSlice";
import { selectIsLoadingData } from "../context/slices/IsLoadingDataSlice";
import { selectTodoData } from "../context/slices/TodoDataSlice";
import { selectProfileImageData } from "../context/slices/ProfileImageDataSlice";
import LoadingDashboard from "../loading/LoadingDashboard";
import LoadingProfile from "../loading/LoadingAccount";
import LoadingCreateUpdate from "../loading/LoadingCreateUpdate";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const userAuthData = useSelector(selectUserAuthData);
  const isLoadingData = useSelector(selectIsLoadingData);
  const todoData = useSelector(selectTodoData);
  const profileImageData = useSelector(selectProfileImageData);
  const [title, setTitle] = useState(null);

  useEffect(() => {
    const getName = () => {
      if (todoData[0]) {
        setTitle(todoData[0].title);
      }
    };
    getName();
  }, [todoData]);

  var currentPath;
  if (rest.path === "/dashboard") {
    currentPath = <LoadingDashboard />;
  } else if (rest.path === "/account") {
    currentPath = <LoadingProfile />;
  } else if (rest.path === "/create") {
    currentPath = <LoadingCreateUpdate />;
  } else if (rest.path === "/update/:todoId") {
    currentPath = <LoadingCreateUpdate />;
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoadingData ||
        (userAuthData && title === null) ||
        (userAuthData && profileImageData === null) ? (
          currentPath
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
