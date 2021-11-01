import React from "react";
import TextField from "@mui/material/TextField";

export default function SignupEmail({ email, setEmail }) {
  return (
    <div>
      <div className="body">Email</div>
      <div className="textfield-title">
        <TextField
          variant="outlined"
          name="email"
          style={{ width: "100%" }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
    </div>
  );
}
