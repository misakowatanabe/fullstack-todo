import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectSnackbar,
  updateSnackbar,
} from "../context/slices/SnackbarSlice";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SimpleSnackbar() {
  const snackbar = useSelector(selectSnackbar);
  const dispatch = useDispatch();
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(
      updateSnackbar({ value: false, message: "", severity: snackbar.severity })
    );
  };

  return (
    <div>
      <Snackbar
        open={snackbar.value}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={`${snackbar.severity}`}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
}
