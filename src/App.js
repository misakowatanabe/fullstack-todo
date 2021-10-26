import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateTodoData } from "./context/slices/TodoDataSlice";
import { updateProfileData } from "./context/slices/ProfileDataSlice";
import { updateUserAuthData } from "./context/slices/UserAuthDataSlice";
import { updateIsLoadingData } from "./context/slices/IsLoadingDataSlice";
import "./style/App.css";
import socketIOClient from "socket.io-client";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase/firebase";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { HashRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from "./route/PrivateRoute";
import PublicRoute from "./route/PublicRoute";
import Signup from "./signup/Signup";
import Signin from "./signin/Signin";
import Todo from "./dashboard/Todo";
import Profile from "./profile/Profile";
import CreateTodo from "./create/CreateTodo";
import UpdateTodo from "./update/UpdateTodo";
import NotFound from "./notFound/NotFound";
import { ENDPOINT } from "./config";

export default function App() {
  initializeApp(firebaseConfig);
  const dispatch = useDispatch();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      let userSessionTimeout = null;

      if (user) {
        // User is signed in
        dispatch(updateUserAuthData(true));
        const uid = user.uid;
        const uidData = { uid: uid };
        console.log(`Auth OK, user logged in ${uid}`);

        const socketTodo = socketIOClient(ENDPOINT);
        socketTodo.on("newChangesInTodos", (todoList) => {
          dispatch(updateTodoData(todoList));
        });
        const socketProfile = socketIOClient(ENDPOINT);
        socketProfile.on("newChangesInProfile", (profileList) => {
          dispatch(updateProfileData(profileList));
          dispatch(updateIsLoadingData(false));
          console.log(`Loading OK`);
        });
        console.log("Socket opened");

        try {
          await fetch(`${ENDPOINT}/catch-user-uid`, {
            method: "POST",
            body: JSON.stringify(uidData),
            headers: {
              "Content-Type": "application/json",
            },
            mode: "cors",
          }).then((res) => {
            res.json().then((data) => {
              console.log(data);
            });
          });
        } catch (error) {
          console.log(error);
        }

        user.getIdTokenResult().then((idTokenResult) => {
          const authTime = idTokenResult.claims.auth_time * 1000;
          const sessionDurationInMilliseconds = 60 * 60 * 1000; // 60 min
          const expirationInMilliseconds =
            sessionDurationInMilliseconds - (Date.now() - authTime);
          userSessionTimeout = setTimeout(
            () =>
              signOut(auth)
                .then(() => {
                  // Sign-out successful.
                  console.log("Session timeout. Sign-out successful.");
                })
                .catch((error) => {
                  // An error happened.
                  console.log(`Session timeout. Sign-out failed: ${error}`);
                }),
            expirationInMilliseconds
          );
        });
      } else {
        // User is signed out
        dispatch(updateUserAuthData(false));
        dispatch(updateIsLoadingData(false));

        clearTimeout(userSessionTimeout);
        userSessionTimeout = null;
      }
    });
    return () => unsubscribe(() => {});
  }, [auth, dispatch]);

  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <PublicRoute exact path="/signup" component={Signup} />
          <PublicRoute exact path="/signin" component={Signin} />
          <PrivateRoute exact path="/dashboard" component={Todo} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <PrivateRoute exact path="/create" component={CreateTodo} />
          <PrivateRoute exact path="/update/:todoId" component={UpdateTodo} />
          <Route component={NotFound} />
        </Switch>
      </HashRouter>
    </div>
  );
}
