import { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getAuth } from "firebase/auth";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { useDispatch, useSelector } from "react-redux";
import { updateSnackbar } from "../context/slices/SnackbarSlice";
import {
  updateProfileImageData,
  selectProfileImageData,
} from "../context/slices/ProfileImageDataSlice";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import Avatar from "@mui/material/Avatar";
import PersonIcon from "@mui/icons-material/Person";
import CloseIcon from "@mui/icons-material/Close";

const Input = styled("input")({
  display: "none",
});

export default function OpenProfileImageEdit() {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const auth = getAuth();
  const userUid = auth.currentUser.uid;
  const storage = getStorage();
  const imagesRef = ref(storage, `profileImages/${userUid}`);
  const dispatch = useDispatch();
  const profileImageData = useSelector(selectProfileImageData);

  const handleClickOpen = () => {
    setOpen(true);
    setPreviewImage(profileImageData);
  };

  const handleClose = () => {
    setOpen(false);
    setImage(null);
    setPreviewImage(null);
  };

  const [previewImageSwitch, setPreviewImageSwitch] = useState(null);
  useEffect(() => {
    if (previewImage === "" || previewImage === null) {
      setPreviewImageSwitch(
        <Avatar alt="Avatar" sx={{ width: 200, height: 200 }}>
          <PersonIcon style={{ fontSize: "140px" }} />
        </Avatar>
      );
    } else {
      setPreviewImageSwitch(
        <img
          src={previewImage}
          alt="profile"
          width="200"
          height="200"
          style={{ borderRadius: "100px" }}
        />
      );
    }
  }, [previewImage]);

  const descriptionElementRef = useRef(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  let history = useHistory();
  const handleUpdate = () => {
    if (profileImageData !== "" && previewImage === "") {
      deleteObject(imagesRef)
        .then(() => {
          // File deleted successfully
          dispatch(updateProfileImageData(""));
        })
        .catch((error) => {
          // An error occurred
          history.push("/error");
          dispatch(
            updateSnackbar({
              value: true,
              message: "Something went wrong with deleting profile image",
              severity: "error",
            })
          );
        })
        .finally(() => handleClose());
    } else if (image !== null) {
      uploadBytes(imagesRef, image).then(() => {
        getDownloadURL(imagesRef)
          .then((url) => {
            dispatch(updateProfileImageData(url));
          })
          .catch((error) => {
            dispatch(updateProfileImageData(""));
          })
          .finally(() => handleClose());
      });
    } else {
      //   Nothing has changed
      handleClose();
    }
  };

  return (
    <div>
      <div>
        <Button
          onClick={handleClickOpen}
          sx={{
            backgroundColor: "#e5e5e5",
            "&:hover": { backgroundColor: "#d7d7d7" },
            marginLeft: "150px",
            padding: "10px",
            color: "#838383",
            minWidth: 0,
            borderRadius: "50%",
            border: "4px solid #ffffff",
            transition: "250ms",
            position: "absolute",
            zIndex: 1,
          }}
        >
          <PhotoCameraIcon />
        </Button>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll="paper"
        fullWidth={true}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle className="title-dialog">
          Edit profile image
          <Button
            onClick={handleClose}
            sx={{
              float: "right",
              color: "#5b5b5b",
              padding: "6px",
              minWidth: "0px",
              borderRadius: "30px",
              "&:hover": { backgroundColor: "#f3f6f4" },
            }}
          >
            <CloseIcon />
          </Button>
        </DialogTitle>
        <DialogContent dividers={true}>
          <DialogContentText
            className="body-dialog"
            ref={descriptionElementRef}
            tabIndex={-1}
            component={"div"}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              {previewImageSwitch}
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "flex-start" }}>
          <label htmlFor="contained-button-file">
            <Input
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
              onChange={(e) => {
                if (e.target.files[0]) {
                  setImage(e.target.files[0]);
                  const reader = new FileReader();
                  reader.addEventListener("load", () => {
                    setPreviewImage(reader.result);
                  });
                  reader.readAsDataURL(e.target.files[0]);
                }
              }}
            />
            <Button
              variant="contained"
              component="span"
              sx={{ margin: "0px 8px" }}
            >
              select
            </Button>
          </label>
          <Button
            variant="contained"
            onClick={() => {
              setPreviewImage("");
              setImage(null);
            }}
            disabled={previewImage === ""}
          >
            Delete
          </Button>
          <Button
            variant="contained"
            startIcon={<FileUploadIcon />}
            onClick={handleUpdate}
            component="span"
            sx={{ marginRight: "0px", marginLeft: "auto" }}
          >
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
