import React from "react";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { updateSnackbar } from "../context/slices/SnackbarSlice";
import { selectTodoData } from "../context/slices/TodoDataSlice";
import Button1 from "../components/Button1";
import TextField from "@mui/material/TextField";
import { ENDPOINT } from "../config";

export default function UpdateTodo() {
  var { todoId } = useParams();
  const todoData = useSelector(selectTodoData);
  const [titleLettersUpdate, setTitleLettersUpdate] = useState("");
  const [bodyLettersUpdate, setBodyLettersUpdate] = useState("");

  useEffect(() => {
    const getThisItem = async () => {
      const thisItem = await todoData.find((prod) => prod.todoId === todoId);
      if (thisItem) {
        setTitleLettersUpdate(thisItem.title);
        setBodyLettersUpdate(thisItem.body);
      }
    };
    getThisItem();
  }, [todoData, todoId]);

  const [titleErrorMessage, setTitleErrorMessage] = useState("");
  const [bodyErrorMessage, setBodyErrorMessage] = useState("");
  const auth = getAuth();
  const userUid = auth.currentUser.uid;
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  const reactData = {
    userUid: userUid,
    title: titleLettersUpdate,
    body: bodyLettersUpdate,
    updatedAt: date,
  };

  // isLoadingData on when waiting for the update or create, then off func
  const errorMessage = "Please type something";
  let history = useHistory();
  const dispatch = useDispatch();
  const handleUpdateTodo = (e) => {
    e.preventDefault();
    if (titleLettersUpdate === "" && bodyLettersUpdate === "") {
      setTitleErrorMessage(errorMessage);
      setBodyErrorMessage(errorMessage);
    } else if (titleLettersUpdate === "") {
      setTitleErrorMessage(errorMessage);
    } else if (bodyLettersUpdate === "") {
      setBodyErrorMessage(errorMessage);
    } else {
      try {
        fetch(`${ENDPOINT}/update/${todoId}`, {
          method: "PUT",
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
                  message: "Todo updated!",
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
      }
    }
  };

  if (todoData) {
    return (
      <div>
        <form noValidate autoComplete="off" onSubmit={handleUpdateTodo}>
          <div className="title">
            Title:<span className="error-message">{titleErrorMessage}</span>
          </div>
          <div className="textfield-title">
            <TextField
              variant="outlined"
              multiline
              rows={1}
              name="title"
              style={{ width: "100%" }}
              value={titleLettersUpdate}
              onChange={(e) => setTitleLettersUpdate(e.target.value)}
            />
          </div>
          <div className="body">
            Body:<span className="error-message">{bodyErrorMessage}</span>
          </div>
          <div className="textfield-body">
            <TextField
              variant="outlined"
              multiline
              rows={18}
              name="body"
              style={{ width: "100%" }}
              value={bodyLettersUpdate}
              onChange={(e) => setBodyLettersUpdate(e.target.value)}
            />
          </div>
          <Button1>Update</Button1>
        </form>
      </div>
    );
  } else return null;
}
