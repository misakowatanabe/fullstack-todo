import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectProfileData } from "../context/slices/ProfileDataSlice";
import { selectIsLoadingData } from "../context/slices/IsLoadingDataSlice";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Skeleton from "@mui/material/Skeleton";

export default function DrawerProfileName() {
  const profileData = useSelector(selectProfileData);
  const isLoadingData = useSelector(selectIsLoadingData);
  const [displayName, setDisplayName] = useState("");
  console.log(profileData);
  console.log(displayName);

  useEffect(() => {
    if (profileData) {
      setDisplayName(profileData.name);
    }
  }, [profileData]);

  const Name = () => {
    var userName;
    if (displayName === "" || displayName === undefined || isLoadingData) {
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
