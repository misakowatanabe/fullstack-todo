import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import PasswordToggleButton from "../components/PasswordToggleButton";
import "../style/App.css";
import Button1 from "../components/Button1";
import LoginIcon from "../components/LoginIcon";
import TextField from "@mui/material/TextField";
import { nanoid } from "nanoid";

export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);

  function validateForm() {
    return name.length > 0 && email.length > 0 && password.length > 0;
  }

  var id = nanoid(8);
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  const [responseData, setResponseData] = useState(null);
  const auth = getAuth();
  const db = getFirestore();
  const history = useHistory();
  function handleSubmit(e) {
    e.preventDefault();
    if (password === confirmPassword) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(`user ${user.uid} is created`);

          await updateProfile(auth.currentUser, {
            displayName: name,
            uid: user.uid,
          }).catch((error) => {
            // An error occurred
            history.push(`/error`);
          });

          try {
            await setDoc(doc(db, user.uid, "userInfo"), {
              userUid: user.uid,
              name: name,
              email: user.email,
            });

            await setDoc(doc(db, user.uid, "todos", "active", id), {
              todoId: id,
              title: "Test",
              body: "This is where you can write contents.",
              createdAt: date,
            });
          } catch (error) {
            history.push(`/error`);
          }
        })
        .catch((error) => {
          const errorMessage = error.message;
          setResponseData(errorMessage);
        });
    } else {
      setResponseData("Your password and confirmation password do not match.");
    }
  }

  return (
    <div className="Login">
      <LoginIcon />
      <div className="login-title">Sign up</div>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <div className="register-error-message">{responseData}</div>
        <div className="title">User Name</div>
        <div className="textfield-title">
          <TextField
            autoFocus
            variant="outlined"
            name="name"
            style={{ width: "100%" }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="body">Email</div>
        <div className="textfield-title">
          <TextField
            variant="outlined"
            name="email"
            style={{ width: "100%" }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="password-text-container">
          <div>Password</div>
          <PasswordToggleButton
            passwordShown={passwordShown}
            setPasswordShown={setPasswordShown}
          />
        </div>
        <div className="textfield-title">
          <TextField
            variant="outlined"
            name="password"
            type={passwordShown ? "text" : "password"}
            style={{ width: "100%" }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="password-text-container">
          <div>Confirm Password</div>
          <PasswordToggleButton
            passwordShown={confirmPasswordShown}
            setPasswordShown={setConfirmPasswordShown}
          />
        </div>
        <div className="textfield-title">
          <TextField
            variant="outlined"
            name="confirmPassword"
            type={confirmPasswordShown ? "text" : "password"}
            style={{ width: "100%" }}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="login-button">
          <Button1 type="submit" disabled={!validateForm()}>
            Signup
          </Button1>
        </div>
        <NavLink to={`/signin`}>
          <div className="toggle-signin-signup">
            Already have an account? Sign in
          </div>
        </NavLink>
      </form>
    </div>
  );
}
