import { NavLink } from "react-router-dom";
import Drawer from "./Drawer";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Common({ children }) {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
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
        <Drawer />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          {children}
        </Box>
      </Box>
    </div>
  );
}
