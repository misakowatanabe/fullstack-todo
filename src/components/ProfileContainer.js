import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";

export default function ProfileContainer({ children }) {
  return (
    <div>
      <Paper
        style={{
          padding: "40px 40px",
          height: "auto",
          position: "relative",
        }}
      >
        <Box>
          <Grid
            container
            sx={{
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            {children}
          </Grid>
        </Box>
      </Paper>
    </div>
  );
}
