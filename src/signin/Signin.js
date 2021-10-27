import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import PasswordToggleButton from "../components/PasswordToggleButton";
import Button1 from "../components/Button1";
import LoginIcon from "../components/LoginIcon";
import TextField from "@mui/material/TextField";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  const [responseData, setResponseData] = useState(null);
  const auth = getAuth();
  async function handleSubmit(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        setResponseData(error.message);
      });
  }

  return (
    <div className="Login">
      <LoginIcon />
      <div className="login-title">Sign in</div>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <div className="register-error-message">{responseData}</div>
        <div className="title">Email</div>
        <div className="textfield-title">
          <TextField
            autoFocus
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
        <div className="login-button">
          <Button1 type="submit" disabled={!validateForm()}>
            Login
          </Button1>
        </div>
        <NavLink to={`/signup`}>
          <div className="toggle-signin-signup">
            Don't have an account? Sign up
          </div>
        </NavLink>
      </form>
    </div>
  );
}
