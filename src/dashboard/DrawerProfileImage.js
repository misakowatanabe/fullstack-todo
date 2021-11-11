import { useSelector } from "react-redux";
import { selectProfileData } from "../context/slices/ProfileDataSlice";
import ListItem from "@mui/material/ListItem";
import PersonIcon from "@mui/icons-material/Person";
import Avatar from "@mui/material/Avatar";
import Skeleton from "@mui/material/Skeleton";

export default function DrawerProfileImage() {
 const profileData = useSelector(selectProfileData);
 var displayName = profileData.name;

  const Image = () => {
    var avatar;
    if (displayName === undefined) {
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
