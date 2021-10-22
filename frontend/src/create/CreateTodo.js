import { useState } from "react";
import { useHistory } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { nanoid } from "nanoid";
import Button1 from "../components/Button1";
import TextField from "@mui/material/TextField";
const ENDPOINT = "http://localhost:3001";

export default function CreateTodo() {
  const [titleLetters, setTitleLetters] = useState("");
  const [bodyLetters, setBodyLetters] = useState("");
  const [titleErrorMessage, setTitleErrorMessage] = useState("");
  const [bodyErrorMessage, setBodyErrorMessage] = useState("");
  const auth = getAuth();
  const userUid = auth.currentUser.uid;
  console.log(userUid);
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

  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (titleLetters === "" && bodyLetters === "") {
      setTitleErrorMessage("Please type something");
      setBodyErrorMessage("Please type something");
    } else if (titleLetters === "") {
      setTitleErrorMessage("Please type something");
    } else if (bodyLetters === "") {
      setBodyErrorMessage("Please type something");
    } else {
      try {
        fetch(`${ENDPOINT}/push_data_to_db`, {
          method: "POST",
          body: JSON.stringify(reactData),
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log("Success");
        setTitleLetters("");
        setBodyLetters("");
        setTitleErrorMessage("");
        setBodyErrorMessage("");
        history.push("/dashboard");
      } catch (error) {
        console.log(error);
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
