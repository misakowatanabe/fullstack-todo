import Paper from "@mui/material/Paper";

export default function TodoPaper({ children }) {
  return (
    <Paper
      sx={{
        margin: { xs: "10px 0px", sm: "10px" },
        padding: "10px 20px",
        height: "200px",
        width: { xs: "100%", sm: "350px" },
        minWidth: { sm: "292px" },
        position: "relative",
      }}
    >
      {children}
    </Paper>
  );
}
