import { useState } from "react";
import DeleteAccount from "./DelertAccount";
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
          <DeleteAccount />
        </DialogActions>
      </Dialog>
    </div>
  );
}
