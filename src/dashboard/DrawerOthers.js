import { NavLink } from "react-router-dom";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AddIcon from "@mui/icons-material/Add";
import PersonIcon from "@mui/icons-material/Person";

export default function DrawerOthers() {
    const items = [
      { text: "Create Todo", link: "/create", icon: <AddIcon /> },
      { text: "Account", link: "/account", icon: <PersonIcon /> }
    ];

  return (
    <div>
      {items.map(({text, link, icon}) => (
        <NavLink to={`${link}`} key={`${text}`}>
          <ListItem button style={{ padding: "10px 30px" }}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        </NavLink>
      ))}
    </div>
  );
}
