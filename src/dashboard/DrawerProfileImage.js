import { useSelector } from "react-redux";
import { selectProfileImageData } from "../context/slices/ProfileImageDataSlice";
import ListItem from "@mui/material/ListItem";
import PersonIcon from "@mui/icons-material/Person";
import Avatar from "@mui/material/Avatar";

export default function DrawerProfileImage() {
  const profileImageData = useSelector(selectProfileImageData);

  const Image = () => {
    if (profileImageData === "") {
      return (
        <Avatar alt="Avatar" sx={{ width: 100, height: 100 }}>
          <PersonIcon style={{ fontSize: "70px" }} />
        </Avatar>
      );
    } else {
      return (
        <img
          src={profileImageData}
          alt="profile"
          width="100"
          height="100"
          style={{ borderRadius: "50px" }}
        />
      );
    }
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
