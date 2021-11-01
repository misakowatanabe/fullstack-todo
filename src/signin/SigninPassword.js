import React, { useState } from "react";
import PasswordToggleButton from "../components/PasswordToggleButton";
import TextField from "@mui/material/TextField";

export default function SigninPassword({ password, setPassword }) {
  const [passwordShown, setPasswordShown] = useState(false);

  return (
    <div>
      <div className="password-text-container">
        <div>Password</div>
        <PasswordToggleButton
          passwordShown={passwordShown}
          setPasswordShown={setPasswordShown}
        />
      </div>
      <div className="textfield-title">
        <TextField
          variant="outlined"
          name="password"
          type={passwordShown ? "text" : "password"}
          style={{ width: "100%" }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
    </div>
  );
}
