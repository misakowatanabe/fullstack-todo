import React from "react";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { useSelector } from "react-redux";
import { selectTodoData } from "../context/slices/TodoDataSlice";
import Button1 from "../components/Button1";
import TextField from "@mui/material/TextField";
const ENDPOINT = "https://fullstack-todo-backend-misako.herokuapp.com";

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

  let history = useHistory();
  const handleUpdateTodo = (e) => {
    e.preventDefault();
    if (titleLettersUpdate === "" && bodyLettersUpdate === "") {
      setTitleErrorMessage("Please type something");
      setBodyErrorMessage("Please type something");
    } else if (titleLettersUpdate === "") {
      setTitleErrorMessage("Please type something");
      history.push(`/update/${todoId}`);
    } else if (bodyLettersUpdate === "") {
      setBodyErrorMessage("Please type something");
    } else {
      try {
        fetch(`${ENDPOINT}/update/${todoId}`, {
          method: "PUT",
          body: JSON.stringify(reactData),
          headers: {
            "Content-Type": "application/json",
          },
          mode: "cors",
        });
      } catch (error) {
        console.log(error);
      } finally {
        history.push("/dashboard");
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
