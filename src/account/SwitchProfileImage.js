import { useSelector } from "react-redux";
import { selectProfileImageData } from "../context/slices/ProfileImageDataSlice";
import Avatar from "@mui/material/Avatar";
import PersonIcon from "@mui/icons-material/Person";

export default function SwitchProfileImage() {
  const profileImageData = useSelector(selectProfileImageData);

  if (profileImageData === "") {
    return (
      <Avatar alt="Avatar" sx={{ width: 200, height: 200 }}>
        <PersonIcon style={{ fontSize: "140px" }} />
      </Avatar>
    );
  } else {
    return (
      <img
        src={profileImageData}
        alt="profile"
        width="200"
        height="200"
        style={{ borderRadius: "100px" }}
      />
    );
  }
}
