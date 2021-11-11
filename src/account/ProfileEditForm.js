import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAuth, updateProfile, updateEmail } from "firebase/auth";
import { updateSnackbar } from "../context/slices/SnackbarSlice";
import ProfileNameEditForm from "./ProfileNameEditForm";
import ProfileEmailEditForm from "./ProfileEmailEditForm";
import Button3 from "../components/Button3";
import { ENDPOINT } from "../config";

export default function ProfileEditForm({
  editMode,
  setEditMode,
  nameLettersUpdate,
  setNameLettersUpdate,
  emailLettersUpdate,
  setEmailLettersUpdate,
  nameErrorMessage,
  setNameErrorMessage,
  emailErrorMessage,
  setEmailErrorMessage,
}) {
  const errorMessage = "Required";
  const auth = getAuth();
  const userUid = auth.currentUser.uid;

  let history = useHistory();
  const dispatch = useDispatch();

  function TryUpdateDatabaseName() {
    // Try updating database profile name
    try {
      fetch(`${ENDPOINT}/update-userInfo-name/${userUid}`, {
        method: "PUT",
        body: JSON.stringify({ name: nameLettersUpdate }),
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
      }).then((res) => {
        res.json().then((res) => {
          if (res.message === 200) {
            // Database name updated
            dispatch(
              updateSnackbar({
                value: true,
                message: "Updated profile!",
                severity: "success",
              })
            );
          } else if (res.message === 500) {
            history.push("/error");
            dispatch(
              updateSnackbar({
                value: true,
                message:
                  "Something went wrong with updating userInfo name: backend",
                severity: "error",
              })
            );
          }
        });
      });
    } catch (error) {
      history.push("/error");
      dispatch(
        updateSnackbar({
          value: true,
          message: "Something went wrong with updating userInfo name: frontend",
          severity: "error",
        })
      );
    }
  }

  function TryUpdateDatabaseEmail() {
    try {
      fetch(`${ENDPOINT}/update-userInfo-email/${userUid}`, {
        method: "PUT",
        body: JSON.stringify({ email: emailLettersUpdate }),
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
      }).then((res) => {
        res.json().then((res) => {
          if (res.message === 200) {
            // Database email updated
          } else if (res.message === 500) {
            history.push("/error");
            dispatch(
              updateSnackbar({
                value: true,
                message:
                  "Something went wrong with updating userInfo email: backend",
                severity: "error",
              })
            );
          }
        });
      });
    } catch (error) {
      history.push("/error");
      dispatch(
        updateSnackbar({
          value: true,
          message:
            "Something went wrong with updating userInfo email: frontend",
          severity: "error",
        })
      );
    }
  }

  const TryUpdateAuthName = () => {
    // Try updating auth profile name
    updateProfile(auth.currentUser, {
      displayName: nameLettersUpdate,
    })
      .then(() => {
        // Auth profile name updated
        TryUpdateDatabaseName();
      })
      .catch((error) => {
        setNameErrorMessage(error.code);
      });
  };

  const [authEmailStatus, setAuthEmailStatus] = useState(false);
  async function TryUpdateAuthEmail() {
    // Try updating auth email
    await updateEmail(auth.currentUser, emailLettersUpdate)
      .then(() => {
        // Auth email updated
        TryUpdateDatabaseEmail();
        TryUpdateAuthName();
      })
      .catch(async (error) => {
        await setEmailErrorMessage(error.code);
      });

    setAuthEmailStatus(true);
  }

  useEffect(() => {
    if (emailErrorMessage === "auth/invalid-email" && authEmailStatus) {
      setEditMode(true);
    } else if (
      emailErrorMessage === "auth/requires-recent-login" &&
      authEmailStatus
    ) {
      setEditMode(true);
    } else if (emailErrorMessage === "" && authEmailStatus) {
      setEditMode(false);
    }
  }, [emailErrorMessage, setEditMode, authEmailStatus]);

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    setAuthEmailStatus(false);
    setEmailErrorMessage("");
    if (nameLettersUpdate === "" && emailLettersUpdate === "") {
      setNameErrorMessage(errorMessage);
      setEmailErrorMessage(errorMessage);
    } else if (nameLettersUpdate === "") {
      setNameErrorMessage(errorMessage);
    } else if (emailLettersUpdate === "") {
      setEmailErrorMessage(errorMessage);
    } else {
      await TryUpdateAuthEmail();
    }
  };

  if (editMode === false) {
    return null;
  } else if (editMode === true) {
    return (
      <form
        noValidate
        autoComplete="off"
        onSubmit={handleUpdateSubmit}
      >
        <ProfileNameEditForm
          nameLettersUpdate={nameLettersUpdate}
          setNameLettersUpdate={setNameLettersUpdate}
          nameErrorMessage={nameErrorMessage}
        />
        <ProfileEmailEditForm
          emailErrorMessage={emailErrorMessage}
          emailLettersUpdate={emailLettersUpdate}
          setEmailLettersUpdate={setEmailLettersUpdate}
          setAuthEmailStatus={setAuthEmailStatus}
          setEmailErrorMessage={setEmailErrorMessage}
        />
        <Button3>Update</Button3>
      </form>
    );
  }
}
