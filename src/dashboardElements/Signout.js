import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTodoData } from "../context/slices/TodoDataSlice";
import { updateProfileData } from "../context/slices/ProfileDataSlice";
import { getAuth, signOut } from "firebase/auth";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import LogoutIcon from "@mui/icons-material/Logout";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

export default function Signout() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const auth = getAuth();
  const dispatch = useDispatch();
  const handleSignOut = async () => {
    dispatch(updateTodoData([{ title: "", body: "" }]));
    dispatch(updateProfileData([{ firstName: "", lastName: "" }]));
    await signOut(auth)
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
      <ListItem
        button
        onClick={handleClickOpen}
        style={{ padding: "10px 30px" }}
      >
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary="Sign out" />
      </ListItem>
      <Dialog
        open={open}
        onClose={handleCancel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirm sign out"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you sign out?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button onClick={handleSignOut} autoFocus className="signout-button">
            Sign out
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
