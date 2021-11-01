import TextField from "@mui/material/TextField";

export default function CreateTodoTitle({
  titleErrorMessage,
  titleLetters,
  setTitleLetters,
}) {
  return (
    <div>
      <div className="title">
        Title:<span className="error-message">{titleErrorMessage}</span>
      </div>
      <div className="textfield-title">
        <TextField
          placeholder="Type here ..."
          variant="outlined"
          multiline
          rows={1}
          name="letter"
          style={{ width: "100%" }}
          value={titleLetters || ""}
          onChange={(e) => setTitleLetters(e.target.value)}
        />
      </div>
    </div>
  );
}
