import TextField from "@mui/material/TextField";

export default function ProfileEmailEditForm({
  emailErrorMessage,
  emailLettersUpdate,
  setEmailLettersUpdate,
  setAuthEmailStatus,
  setEmailErrorMessage,
}) {
  const handleChangeEmailletters = (e) => {
    setEmailLettersUpdate(e.target.value);
    setAuthEmailStatus(false);
    setEmailErrorMessage("");
  };

  return (
    <div>
      <div className="body">
        Email:<span className="error-message">{emailErrorMessage}</span>
      </div>
      <div className="textfield-body">
        <TextField
          variant="outlined"
          multiline
          rows={1}
          name="body"
          style={{ width: "100%" }}
          value={emailLettersUpdate}
          onChange={handleChangeEmailletters}
        />
      </div>
    </div>
  );
}
