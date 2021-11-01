import TextField from "@mui/material/TextField";

export default function CreateTodoBody({
  bodyErrorMessage,
  bodyLetters,
  setBodyLetters,
}) {
  return (
    <div>
      <div className="body">
        Body:<span className="error-message">{bodyErrorMessage}</span>
      </div>
      <div className="textfield-body">
        <TextField
          placeholder="Type here ..."
          variant="outlined"
          multiline
          rows={18}
          name="letter"
          style={{ width: "100%" }}
          value={bodyLetters || ""}
          onChange={(e) => setBodyLetters(e.target.value)}
        />
      </div>
    </div>
  );
}
