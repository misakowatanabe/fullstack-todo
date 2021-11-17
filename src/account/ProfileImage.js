import { useState } from "react";
import { useHistory } from "react-router-dom";
import { getAuth } from "firebase/auth";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { useDispatch } from "react-redux";
import { updateSnackbar } from "../context/slices/SnackbarSlice";
import { updateProfileImageData } from "../context/slices/ProfileImageDataSlice";
import SwitchProfileImage from "./SwitchProfileImage";
import Button from "@mui/material/Button";

export default function ProfileImage() {
  const storage = getStorage();
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();
  const auth = getAuth();
  const userUid = auth.currentUser.uid;
  const imagesRef = ref(storage, `profileImages/${userUid}`);

  const handleUpload = () => {
    if (image == null) return;
    uploadBytes(imagesRef, image).then(() => {
      getDownloadURL(imagesRef)
        .then((url) => {
          dispatch(updateProfileImageData(url));
        })
        .catch((error) => {
          switch (error.code) {
            case "storage/object-not-found":
              break;
            case "storage/unauthorized":
              break;
            case "storage/canceled":
              break;
            case "storage/unknown":
              break;
            default:
          }
        });
    });
  };

  let history = useHistory();
  const handleDelete = () => {
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
      });
  };

  return (
    <div>
      <SwitchProfileImage />
      <div>
        <input
          type="file"
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
        />
        <button onClick={handleUpload}>Upload</button>
      </div>
      <Button onClick={handleDelete}>Delete</Button>
    </div>
  );
}
