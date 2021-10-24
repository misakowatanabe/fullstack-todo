import { getAuth } from "firebase/auth";
import Button from "@material-ui/core/Button";
const ENDPOINT = "https://fullstack-todo-backend-misako.herokuapp.com";

export default function DeleteTodo({ todoId, setOpen }) {
  const handleClose = () => {
    setOpen(false);
  };
  const auth = getAuth();
  const userUid = auth.currentUser.uid;

  const handleDeleteTodo = (todoId) => {
    try {
      fetch(`${ENDPOINT}/delete/${userUid}/${todoId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
      });
      console.log("Success");
    } catch (error) {
      console.log(error);
    } finally {
      handleClose();
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
