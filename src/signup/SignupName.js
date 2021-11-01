import React from "react";
import TextField from "@mui/material/TextField";

export default function SignupName({ name, setName }) {
  return (
    <div>
      <div className="title">User Name</div>
      <div className="textfield-title">
        <TextField
          autoFocus
          variant="outlined"
          name="name"
          style={{ width: "100%" }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    </div>
  );
}
