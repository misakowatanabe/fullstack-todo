import React from "react";

export default function PasswordToggleButton({
  passwordShown,
  setPasswordShown,
}) {
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div
      onClick={togglePassword}
      type="button"
      className="password-toggle-button"
    >
      Show Password
    </div>
  );
}
