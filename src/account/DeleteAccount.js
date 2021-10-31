import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateTodoData } from "../context/slices/TodoDataSlice";
import { updateProfileData } from "../context/slices/ProfileDataSlice";
import { updateSnackbar } from "../context/slices/SnackbarSlice";
import { getAuth, signOut } from "firebase/auth";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import NoAccountsIcon from "@mui/icons-material/NoAccounts";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import { ENDPOINT } from "../config";

export default function DeleteAccount() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const auth = getAuth();
  const history = useHistory();
  const dispatch = useDispatch();
  const handleDeleteAccount = () => {
    const userUid = auth.currentUser.uid;
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
                message: "Something went wrong with deleting account: backend",
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

    try {
      fetch(`${ENDPOINT}/deleteCollection/${userUid}`, {
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

    dispatch(updateTodoData([{ title: "", body: "" }]));
    dispatch(updateProfileData([{ firstName: "", lastName: "" }]));
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("Sign-out successful.");
      })
      .catch((error) => {
        // An error happened.
        console.log(`Sign-out failed: ${error}`);
      });
  };

  return (
    <div>
      <Paper
        style={{
          padding: "40px 40px",
          height: "auto",
          position: "relative",
        }}
      >
        <ListItem
          button
          onClick={handleClickOpen}
          style={{ padding: "10px 15px" }}
        >
          <ListItemIcon>
            <NoAccountsIcon />
          </ListItemIcon>
          <ListItemText primary="Delete Account" />
        </ListItem>
      </Paper>
      <Dialog
        open={open}
        onClose={handleCancel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Confirm delete account"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you delete your account? <br />
            Your todos will be deleted once you delete your account.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button
            onClick={handleDeleteAccount}
            autoFocus
            className="signout-button"
          >
            Delete account
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}