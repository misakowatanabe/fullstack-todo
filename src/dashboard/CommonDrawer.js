import { getAuth } from "firebase/auth";
import DrawerProfileImage from "./DrawerProfileImage";
import DrawerProfileName from "./DrawerProfileName";
import DrawerOthers from "./DrawerOthers";
import Signout from "./SignoutAlert";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";

export default function CommonDrawer() {
  const auth = getAuth();
  const user = auth.currentUser;
  var displayName = null;
  if (user !== null) {
    displayName = user.displayName;
  }

  const drawerWidth = 240;

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          <DrawerProfileImage displayName={displayName} />
          <DrawerProfileName displayName={displayName} />
        </List>
        <Divider />
        <List>
          <DrawerOthers />
          <Signout />
        </List>
      </Box>
    </Drawer>
  );
}
