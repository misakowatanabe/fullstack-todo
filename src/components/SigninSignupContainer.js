import React from "react";
import LoginIcon from "../components/LoginIcon";
import { Box } from "@mui/system";

export default function SigninSignupContainer({ children, title }) {
  return (
    <div className="Login">
      <LoginIcon />
      <div className="login-title">{title}</div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {children}
      </Box>
    </div>
  );
}
