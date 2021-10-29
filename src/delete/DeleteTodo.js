import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAuth } from "firebase/auth";
import { updateSnackbar } from "../context/slices/SnackbarSlice";
import Button from "@material-ui/core/Button";
import { ENDPOINT } from "../config";

export default function DeleteTodo({ todoId, handleClose }) {
  const auth = getAuth();
  const userUid = auth.currentUser.uid;
  const history = useHistory();
  const dispatch = useDispatch();
  const handleDeleteTodo = (todoId) => {
    try {
      handleClose();
      fetch(`${ENDPOINT}/delete/${userUid}/${todoId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
      }).then((res) => {
        res.json().then((res) => {
          if (res.message === 200) {
            handleClose();
            dispatch(
              updateSnackbar({
                value: true,
                message: "Todo deleted!",
                severity: "success",
              })
            );
          } else if (res.message === 500) {
            handleClose();
            history.push("/error");
            dispatch(
              updateSnackbar({
                value: true,
                message: "Something went wrong: backend",
                severity: "error",
              })
            );
          }
        });
      });
    } catch (error) {
      history.push("/error");
      dispatch(
        updateSnackbar({
          value: true,
          message: "Something went wrong: frontend",
        })
      );
    }
  };

  return (
    <Button
      onClick={() => handleDeleteTodo(todoId)}
      autoFocus
      className="delete-button"
    >
      Delete
    </Button>
  );
}
