import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";

export default function CommonAppBar() {
  return (
    <div>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        style={{ backgroundColor: "#1976d2", color: "#ffffff" }}
      >
        <Toolbar>
          <NavLink to="/dashboard">
            <Typography
              variant="h6"
              noWrap
              component="div"
              style={{ color: "#ffffff" }}
            >
              Todo List
            </Typography>
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}
