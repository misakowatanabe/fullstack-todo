import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectProfileData } from "../context/slices/ProfileDataSlice";
import { selectIsLoadingData } from "../context/slices/IsLoadingDataSlice";
import { selectUserAuthData } from "../context/slices/UserAuthDataSlice";
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

export default function CommonDrawer() {
  const profileData = useSelector(selectProfileData);
  const isLoadingData = useSelector(selectIsLoadingData);
  const userAuthData = useSelector(selectUserAuthData);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    const getName = async () => {
      if (profileData) {
        setFirstName(profileData.firstName);
        setLastName(profileData.lastName);
      }
    };
    getName();
  }, [profileData]);

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
              {isLoadingData ||
              (userAuthData && firstName === "") ? (
                <Skeleton variant="circular" width={100} height={100} />
              ) : (
                <Avatar alt="Avatar" sx={{ width: 100, height: 100 }}></Avatar>
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
                isLoadingData ||
                (userAuthData && firstName === "") ? (
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
                  `${firstName} ${lastName}`
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
          <Signout
          // setFirstName={setFirstName}
          // setLastName={setLastName}
          // firstName={firstName}
          />
        </List>
      </Box>
    </Drawer>
  );
}
