import CommonAppBar from "./CommonAppBar";
import CommonDrawer from "./CommonDrawer";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

export default function Dashboard({ children }) {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CommonAppBar />
        <CommonDrawer />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          {children}
        </Box>
      </Box>
    </div>
  );
}
