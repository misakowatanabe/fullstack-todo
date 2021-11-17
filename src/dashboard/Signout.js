import { useDispatch } from "react-redux";
import { updateSnackbar } from "../context/slices/SnackbarSlice";
import { getAuth, signOut } from "firebase/auth";
import Button from "@mui/material/Button";

export default function Signout() {
  const auth = getAuth();
  const dispatch = useDispatch();
  const handleSignOut = () => {
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
