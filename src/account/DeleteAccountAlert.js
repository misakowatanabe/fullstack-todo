import { useState } from "react";
import DeleteAccount from "./DeleteAccount";
import DeleteAccountContainer from "../components/DeleteAccountContainer";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import NoAccountsIcon from "@mui/icons-material/NoAccounts";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

export default function DeleteAccountAlert() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div>
      <DeleteAccountContainer handleClickOpen={handleClickOpen}>
        <ListItemIcon>
          <NoAccountsIcon />
        </ListItemIcon>
        <ListItemText primary="Delete Account" />
      </DeleteAccountContainer>
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
          <DeleteAccount />
        </DialogActions>
      </Dialog>
    </div>
  );
}
