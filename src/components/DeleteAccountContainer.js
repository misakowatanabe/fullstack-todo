import ListItem from "@mui/material/ListItem";
import Paper from "@mui/material/Paper";

export default function DeleteAccountContainer({ children, handleClickOpen }) {
  return (
    <Paper
      style={{
        marginTop: "20px",
        padding: "40px 40px",
        height: "auto",
        position: "relative",
      }}
    >
      <ListItem
        button
        onClick={handleClickOpen}
        style={{ padding: "10px 15px" }}
      >
        {children}
      </ListItem>
    </Paper>
  );
}
