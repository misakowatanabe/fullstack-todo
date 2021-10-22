import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";

export default function OpenTodo({
  todoId,
  title,
  body,
  createdAt,
  updatedAt,
}) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = useRef(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <Button
        onClick={handleClickOpen}
        className="preview-edit-delete-button"
        style={{ position: "absolute", right: "75px" }}
      >
        <OpenInFullIcon />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll="paper"
        fullWidth={true}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle className="title-dialog">{title}</DialogTitle>
        <DialogContent dividers={true}>
          <DialogContentText
            className="body-dialog"
            ref={descriptionElementRef}
            tabIndex={-1}
            component={"div"}
          >
            {body}
            <div className="created-dialog">
              Created: {createdAt}
              {updatedAt && (
                <span className="updated-dialog">Updated: {updatedAt}</span>
              )}
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <NavLink to={`/update/${todoId}`}>
            <Button onClick={handleClose}>Modify</Button>
          </NavLink>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
