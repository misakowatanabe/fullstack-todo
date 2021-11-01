import React from "react";
import TextField from "@mui/material/TextField";

export default function SigninEmail({email, setEmail}) {
  return (
    <div>
      <div className="title">Email</div>
      <div className="textfield-title">
        <TextField
          autoFocus
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
