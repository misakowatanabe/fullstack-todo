import React from "react";
import TextField from "@mui/material/TextField";

export default function UpdateTodoBody({
  bodyErrorMessage,
  bodyLettersUpdate,
  setBodyLettersUpdate,
}) {
  return (
    <div>
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
    </div>
  );
}
