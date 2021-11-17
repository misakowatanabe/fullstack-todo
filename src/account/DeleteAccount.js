import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAuth, signOut } from "firebase/auth";
import { getStorage, ref, deleteObject } from "firebase/storage";
import { updateSnackbar } from "../context/slices/SnackbarSlice";
import Button from "@mui/material/Button";
import { ENDPOINT } from "../config";

export default function DeleteAccount() {
  const auth = getAuth();
  const storage = getStorage();
  const history = useHistory();
  const dispatch = useDispatch();

  const handleDeleteAccount = async () => {
    const userUid = auth.currentUser.uid;

    try {
      const imageRef = ref(storage, `profileImages/${userUid}`);
      await deleteObject(imageRef).then(() => {
        // Profile image deleted successfully
      });
    } catch (error) {
      // An error occurred
      history.push("/error");
      dispatch(
        updateSnackbar({
          value: true,
          message: "Something went wrong with deleting profile image",
          severity: "error",
        })
      );
    }

    const deleteCollectionAndAccount = async () => {
      try {
        await fetch(`${ENDPOINT}/deleteCollection/${userUid}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          mode: "cors",
        }).then((res) => {
          res.json().then((res) => {
            if (res.message === 200) {
              return;
            } else if (res.message === 500) {
              history.push("/error");
              dispatch(
                updateSnackbar({
                  value: true,
                  message:
                    "Something went wrong with deleting your todo data: backend",
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
              "Something went wrong with deleting your todo data: frontend",
            severity: "error",
          })
        );
      }

      try {
        fetch(`${ENDPOINT}/deleteAccount/${userUid}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          mode: "cors",
        }).then((res) => {
          res.json().then((res) => {
            if (res.message === 200) {
              dispatch(
                updateSnackbar({
                  value: true,
                  message: "Account deleted!",
                  severity: "success",
                })
              );
            } else if (res.message === 500) {
              history.push("/error");
              dispatch(
                updateSnackbar({
                  value: true,
                  message:
                    "Something went wrong with deleting account: backend",
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
            message: "Something went wrong with deleting account: frontend",
            severity: "error",
          })
        );
      }
    };

    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("Sign-out successful.");
        deleteCollectionAndAccount();
      })
      .catch((error) => {
        // An error happened.
        console.log(`Sign-out failed: ${error}`);
      });
  };

  return (
    <Button onClick={handleDeleteAccount} autoFocus className="signout-button">
      Delete account
    </Button>
  );
}
