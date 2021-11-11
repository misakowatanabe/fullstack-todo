import TextField from "@mui/material/TextField";

export default function ProfileNameEditForm({
  nameLettersUpdate,
  setNameLettersUpdate,
  nameErrorMessage,
}) {
  return (
    <div>
      <div className="title">
        Name:<span className="error-message">{nameErrorMessage}</span>
      </div>
      <div className="textfield-title">
        <TextField
          variant="outlined"
          multiline
          rows={1}
          name="title"
          style={{ width: "100%" }}
          value={nameLettersUpdate}
          onChange={(e) => setNameLettersUpdate(e.target.value)}
        />
      </div>
    </div>
  );
}
