import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";

export default function ProfileContainer({ children }) {
  return (
    <div>
      <Paper
        sx={{
          padding: { xs: "20px 20px", sm: "30px 30px" },
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
