import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectProfileData } from "../context/slices/ProfileDataSlice";
import { selectIsLoadingData } from "../context/slices/IsLoadingDataSlice";
import Signout from "./Signout";
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

export default function Common() {
  const profileData = useSelector(selectProfileData);
  const isLoadingData = useSelector(selectIsLoadingData);

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
          <ListItem
            style={{
              padding: "30px 0px 0px 0px",
              display: "inline-flex",
              justifyContent: "center",
            }}
          >
            <div>
              {isLoadingData ? (
                <Skeleton variant="circular" width={100} height={100} />
              ) : (
                <Avatar alt="Avatar" sx={{ width: 100, height: 100 }}>
                  M
                </Avatar>
              )}
            </div>
          </ListItem>
        </List>
        <List>
          <ListItem
            button
            style={{ padding: "10px 20px", textAlign: "center" }}
          >
            <ListItemText
              primary={
                isLoadingData ? (
                  <Skeleton
                    variant="text"
                    height={20}
                    width="70%"
                    style={{
                      textAlign: "center",
                      margin: "-2px auto 0px auto",
                    }}
                  />
                ) : (
                  `${profileData.firstName} ${profileData.lastName}`
                )
              }
            />
          </ListItem>
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
          <NavLink to="/profile">
            <ListItem button style={{ padding: "10px 30px" }}>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItem>
          </NavLink>
          <Signout />
        </List>
      </Box>
    </Drawer>
  );
}
