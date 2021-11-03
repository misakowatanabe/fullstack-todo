import { getAuth } from "firebase/auth";
import ListItem from "@mui/material/ListItem";
import PersonIcon from "@mui/icons-material/Person";
import Avatar from "@mui/material/Avatar";
import Skeleton from "@mui/material/Skeleton";

export default function DrawerProfileImage() {
  const auth = getAuth();
  const user = auth.currentUser;
  var displayName = null;
  if (user !== null) {
    displayName = user.displayName;
  }

  const Image = () => {
    var avatar;
    if (displayName === null) {
      avatar = <Skeleton variant="circular" width={100} height={100} />;
    } else {
      avatar = (
        <Avatar alt="Avatar" sx={{ width: 100, height: 100 }}>
          <PersonIcon style={{ fontSize: "70px" }} />
        </Avatar>
      );
    }
    return avatar;
  };

  return (
    <ListItem
      style={{
        padding: "30px 0px 0px 0px",
        display: "inline-flex",
        justifyContent: "center",
      }}
    >
      <Image />
    </ListItem>
  );
}
