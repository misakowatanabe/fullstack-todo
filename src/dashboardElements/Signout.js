import { useState } from "react";
import { useHistory } from "react-router-dom";
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

  const auth = getAuth();
  let history = useHistory();
  const handleClose = async () => {
    setOpen(false);
    history.push("/signin");
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
        <ListItemText primary="Logout" />
      </ListItem>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirm logout"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you logout?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Logout
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
