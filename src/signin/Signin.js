import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import SigninEmail from "./SigninEmail";
import SigninPassword from "./SigninPassword";
import Button1 from "../components/Button1";
import LoginIcon from "../components/LoginIcon";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [responseData, setResponseData] = useState(null);

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

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
        <SigninEmail email={email} setEmail={setEmail} />
        <SigninPassword password={password} setPassword={setPassword} />
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
