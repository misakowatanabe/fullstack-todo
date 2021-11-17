import { useState } from "react";
import SwitchDrawerProfile from "./SwitchDrawerProfile";
import DrawerOthers from "./DrawerOthers";
import Signout from "./SignoutAlert";
import CommonAppBar from "./CommonAppBar";
import CommonDrawer from "./CommonDrawer";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";

const drawerWidth = 240;

export default function Dashboard(props) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <SwitchDrawerProfile />
      </List>
      <Divider />
      <List>
        <DrawerOthers />
        <Signout />
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CommonAppBar handleDrawerToggle={handleDrawerToggle} />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <CommonDrawer
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
          drawer={drawer}
          props={props}
        />
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <div>{props.children}</div>
      </Box>
    </Box>
  );
}
