import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import SigninSignupContainer from "../components/SigninSignupContainer";
import SignupName from "./SignupName";
import SignupEmail from "./SignupEmail";
import SignupPassword from "./SignupPassword";
import Button1 from "../components/Button1";
import { nanoid } from "nanoid";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [responseData, setResponseData] = useState(null);

  function validateForm() {
    return name.length > 0 && email.length > 0 && password.length > 0;
  }

  var id = nanoid(8);
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

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
          var errorMessage = error.message;
          if (errorMessage === "Firebase: Error (auth/email-already-in-use).") {
            setResponseData("This email adress is already in use.");
          } else if (
            errorMessage ===
            "Firebase: Password should be at least 6 characters (auth/weak-password)."
          ) {
            setResponseData("Password should be at least 6 characters.");
          } else if (
            errorMessage === "Firebase: Error (auth/network-request-failed)."
          ) {
            setResponseData(
              "Something went wrong with network. Please check your internet connection."
            );
          } else {
            setResponseData(`${errorMessage} Please contact _______.`);
          }
        });
    } else {
      setResponseData("Your password and confirmation password do not match.");
    }
  }

  return (
    <SigninSignupContainer title={"Sign Up"}>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <div className="register-error-message">{responseData}</div>
        <SignupName name={name} setName={setName} />
        <SignupEmail email={email} setEmail={setEmail} />
        <SignupPassword
          password={password}
          setPassword={setPassword}
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
        />
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
    </SigninSignupContainer>
  );
}
