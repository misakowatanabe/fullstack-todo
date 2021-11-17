import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTodoData } from "./context/slices/TodoDataSlice";
import { updateProfileData } from "./context/slices/ProfileDataSlice";
import { updateUserAuthData } from "./context/slices/UserAuthDataSlice";
import { updateIsLoadingData } from "./context/slices/IsLoadingDataSlice";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import {
  updateProfileImageData,
  selectProfileImageData,
} from "./context/slices/ProfileImageDataSlice";
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
import Todo from "./dashboardContents/Todo";
import Account from "./account/Account";
import CreateTodo from "./create/CreateTodo";
import UpdateTodo from "./update/UpdateTodo";
import NotFound from "./errorPage/NotFound";
import Error from "./errorPage/Error";
import SnackBar from "./components/SnackBar";
import { ENDPOINT } from "./config";
import Dashboard from "./dashboard/Dashboard";

export default function App() {
  initializeApp(firebaseConfig);
  const dispatch = useDispatch();
  const auth = getAuth();
  const storage = getStorage();
  const profileImageData = useSelector(selectProfileImageData);

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

        const imagesDownloadRef = ref(storage, `profileImages/${uid}`);
        getDownloadURL(imagesDownloadRef)
          .then((url) => {
            dispatch(updateProfileImageData(url));
          })
          .catch((error) => {
            switch (error.code) {
              case "storage/object-not-found":
                dispatch(updateProfileImageData(""));
                break;
              case "storage/unauthorized":
                break;
              case "storage/canceled":
                break;
              case "storage/unknown":
                break;
              default:
            }
          })
          .finally(() => {
            dispatch(updateIsLoadingData(false));
            console.log(`Loading OK`);
          });

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
        dispatch(updateTodoData([{ title: null, body: null }]));
        dispatch(
          updateProfileData([{ name: null, email: null, userUid: null }])
        );
        dispatch(updateProfileImageData(null));

        clearTimeout(userSessionTimeout);
        userSessionTimeout = null;
      }
    });
    return () => unsubscribe(() => {});
  }, [auth, dispatch, storage, profileImageData]);

  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path={["/signup", "/signin"]}>
            <PublicRoute exact path="/signup" component={Signup} />
            <PublicRoute exact path="/signin" component={Signin} />
          </Route>
          <Route
            exact
            path={["/dashboard", "/account", "/create", "/update/:todoId"]}
          >
            <Dashboard>
              <PrivateRoute exact path="/dashboard" component={Todo} />
              <PrivateRoute exact path="/account" component={Account} />
              <PrivateRoute exact path="/create" component={CreateTodo} />
              <PrivateRoute
                exact
                path="/update/:todoId"
                component={UpdateTodo}
              />
            </Dashboard>
          </Route>
          <Route exact path="/error" component={Error} />
          <Route component={NotFound} />
        </Switch>
      </HashRouter>
      <SnackBar />
    </div>
  );
}
