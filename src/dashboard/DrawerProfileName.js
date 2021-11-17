import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";


export default function DrawerProfileName({ displayName }) {
  return (
    <ListItem style={{ padding: "10px 20px", textAlign: "center" }}>
      <ListItemText primary={displayName} />
    </ListItem>
  );
}
