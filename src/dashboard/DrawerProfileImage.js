import { useSelector } from "react-redux";
import { selectProfileImageData } from "../context/slices/ProfileImageDataSlice";
import { selectIsLoadingData } from "../context/slices/IsLoadingDataSlice";
import ListItem from "@mui/material/ListItem";
import PersonIcon from "@mui/icons-material/Person";
import Avatar from "@mui/material/Avatar";
import Skeleton from "@mui/material/Skeleton";

export default function DrawerProfileImage() {
  const profileImageData = useSelector(selectProfileImageData);
  const isLoadingData = useSelector(selectIsLoadingData);

  const Image = () => {
    var avatar;
    if (isLoadingData) {
      avatar = <Skeleton variant="circular" width={100} height={100} />;
    } else if (profileImageData === null) {
      avatar = (
        <Avatar alt="Avatar" sx={{ width: 100, height: 100 }}>
          <PersonIcon style={{ fontSize: "70px" }} />
        </Avatar>
      );
    } else {
      avatar = (
        <img
          src={profileImageData}
          alt="profile"
          width="100"
          height="100"
          style={{ borderRadius: "50px" }}
        />
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
