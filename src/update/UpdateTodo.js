import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { updateSnackbar } from "../context/slices/SnackbarSlice";
import { selectTodoData } from "../context/slices/TodoDataSlice";
import UpdateTodoTitle from "./UpdateTodoTitle";
import UpdateTodoBody from "./UpdateTodoBody";
import Button1 from "../components/Button1";
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
            severity: "error",
          })
        );
      }
    }
  };

  return (
    <div>
      <form noValidate autoComplete="off" onSubmit={handleUpdateTodo}>
        <UpdateTodoTitle
          titleErrorMessage={titleErrorMessage}
          titleLettersUpdate={titleLettersUpdate}
          setTitleLettersUpdate={setTitleLettersUpdate}
        />
        <UpdateTodoBody
          bodyErrorMessage={bodyErrorMessage}
          bodyLettersUpdate={bodyLettersUpdate}
          setBodyLettersUpdate={setBodyLettersUpdate}
        />
        <Button1>Update</Button1>
      </form>
    </div>
  );
}
