import React from "react";
import TextField from "@mui/material/TextField";

export default function UpdateTodoTitle({
  titleErrorMessage,
  titleLettersUpdate,
  setTitleLettersUpdate,
}) {
  return (
    <div>
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
    </div>
  );
}
