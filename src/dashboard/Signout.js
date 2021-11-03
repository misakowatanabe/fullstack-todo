import { useDispatch } from "react-redux";
import { updateTodoData } from "../context/slices/TodoDataSlice";
import { updateProfileData } from "../context/slices/ProfileDataSlice";
import { updateSnackbar } from "../context/slices/SnackbarSlice";
import { getAuth, signOut } from "firebase/auth";
import Button from "@mui/material/Button";

export default function Signout() {
  const auth = getAuth();
  const dispatch = useDispatch();
  const handleSignOut = () => {
    dispatch(updateTodoData([{ title: "", body: "" }]));
    dispatch(updateProfileData([{ firstName: "", lastName: "" }]));
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(
          updateSnackbar({
            value: true,
            message: "Sign out successful!",
            severity: "success",
          })
        );
      })
      .catch((error) => {
        // An error happened.
        dispatch(
          updateSnackbar({
            value: true,
            message: "Something went wrong with sign out",
            severity: "error",
          })
        );
      });
  };

  return (
    <Button onClick={handleSignOut} autoFocus className="signout-button">
      Sign out
    </Button>
  );
}
