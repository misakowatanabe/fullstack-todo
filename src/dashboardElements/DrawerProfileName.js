import { NavLink } from "react-router-dom";
import { getAuth } from "firebase/auth";
import DrawerProfileImage from "./DrawerProfileImage";
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

export default function DrawerProfileName({ displayName }) {
  const Name = () => {
    var userName;
    if (displayName === null) {
      userName = (
        <Skeleton
          variant="text"
          height={20}
          width="70%"
          style={{
            textAlign: "center",
            margin: "-2px auto 0px auto",
          }}
        />
      );
    } else {
      userName = <div>{displayName}</div>;
    }
    return userName;
  };

  return (
    <ListItem style={{ padding: "10px 20px", textAlign: "center" }}>
      <ListItemText primary={<Name />} />
    </ListItem>
  );
}
