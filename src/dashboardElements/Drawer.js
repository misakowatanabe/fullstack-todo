import { NavLink } from "react-router-dom";
import { getAuth } from "firebase/auth";
import DrawerProfileImage from "./DrawerProfileImage";
import DrawerProfileName from "./DrawerProfileName";
import Signout from "./SignoutAlert";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AddIcon from "@mui/icons-material/Add";
import PersonIcon from "@mui/icons-material/Person";
import Avatar from "@mui/material/Avatar";
import Skeleton from "@mui/material/Skeleton";

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
          <NavLink to="/create">
            <ListItem button style={{ padding: "10px 30px" }}>
              <ListItemIcon>
                <AddIcon />
              </ListItemIcon>
              <ListItemText primary="Create Todo" />
            </ListItem>
          </NavLink>
          <NavLink to="/account">
            <ListItem button style={{ padding: "10px 30px" }}>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="Account" />
            </ListItem>
          </NavLink>
          <Signout />
        </List>
      </Box>
    </Drawer>
  );
}
