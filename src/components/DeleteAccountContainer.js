import ListItem from "@mui/material/ListItem";
import Paper from "@mui/material/Paper";

export default function DeleteAccountContainer({ children, handleClickOpen }) {
  return (
    <Paper
      sx={{
        marginTop: "20px",
        padding: { xs: "20px 20px", sm: "40px 40px" },
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
