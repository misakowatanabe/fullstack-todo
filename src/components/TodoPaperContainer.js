import { Box } from "@mui/system";

export default function TodoPaperContainer({ children }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: { xs: "center", sm: "flex-start" },
      }}
    >
      {children}
    </Box>
  );
}
