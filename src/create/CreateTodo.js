import { useState } from "react";
import { useHistory } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { nanoid } from "nanoid";
import Button1 from "../components/Button1";
import { useDispatch } from "react-redux";
import { updateSnackbar } from "../context/slices/SnackbarSlice";
import TextField from "@mui/material/TextField";
import { ENDPOINT } from "../config";

export default function CreateTodo() {
  const [titleLetters, setTitleLetters] = useState("");
  const [bodyLetters, setBodyLetters] = useState("");
  const [titleErrorMessage, setTitleErrorMessage] = useState("");
  const [bodyErrorMessage, setBodyErrorMessage] = useState("");
  const auth = getAuth();
  const userUid = auth.currentUser.uid;

  var id = nanoid(8);
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  const reactData = {
    userUid: userUid,
    todoId: id,
    title: titleLetters,
    body: bodyLetters,
    createdAt: date,
  };

  const errorMessage = "Please type something";
  const history = useHistory();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (titleLetters === "" && bodyLetters === "") {
      setTitleErrorMessage(errorMessage);
      setBodyErrorMessage(errorMessage);
    } else if (titleLetters === "") {
      setTitleErrorMessage(errorMessage);
    } else if (bodyLetters === "") {
      setBodyErrorMessage(errorMessage);
    } else {
      try {
        fetch(`${ENDPOINT}/push_data_to_db`, {
          method: "POST",
          body: JSON.stringify(reactData),
          headers: {
            "Content-Type": "application/json",
          },
          mode: "cors",
        }).then((res) => {
          res.json().then((res) => {
            if (res.message === 200) {
              history.push("/dashboard");
              dispatch(
                updateSnackbar({
                  value: true,
                  message: "New todo created!",
                  severity: "success",
                })
              );
            } else if (res.message === 500) {
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
        history.push("/error");
      }
    }
  };

  return (
    <div>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <div className="title">
          Title:<span className="error-message">{titleErrorMessage}</span>
        </div>
        <div className="textfield-title">
          <TextField
            placeholder="Type here ..."
            variant="outlined"
            multiline
            rows={1}
            name="letter"
            style={{ width: "100%" }}
            value={titleLetters || ""}
            onChange={(e) => setTitleLetters(e.target.value)}
          />
        </div>
        <div className="body">
          Body:<span className="error-message">{bodyErrorMessage}</span>
        </div>
        <div className="textfield-body">
          <TextField
            placeholder="Type here ..."
            variant="outlined"
            multiline
            rows={18}
            name="letter"
            style={{ width: "100%" }}
            value={bodyLetters || ""}
            onChange={(e) => setBodyLetters(e.target.value)}
          />
        </div>
        <Button1>Add</Button1>
      </form>
    </div>
  );
}
