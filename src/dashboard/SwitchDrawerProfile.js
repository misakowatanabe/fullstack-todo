import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectProfileData } from "../context/slices/ProfileDataSlice";
import { selectProfileImageData } from "../context/slices/ProfileImageDataSlice";
import { selectIsLoadingData } from "../context/slices/IsLoadingDataSlice";
import DrawerProfileSkelton from "./DrawerProfileSkelton";
import DrawerProfileImage from "./DrawerProfileImage";
import DrawerProfileName from "./DrawerProfileName";

export default function SwitchDrawerProfile() {
  const profileImageData = useSelector(selectProfileImageData);
  const isLoadingData = useSelector(selectIsLoadingData);
  const profileData = useSelector(selectProfileData);
  const [displayName, setDisplayName] = useState(null);

  useEffect(() => {
    if (profileData) {
      setDisplayName(profileData.name);
    }
  }, [profileData]);

  if (
    isLoadingData ||
    profileImageData === null ||
    displayName === null ||
    displayName === undefined
  ) {
    return <DrawerProfileSkelton />;
  } else {
    return (
      <div>
        <DrawerProfileImage />
        <DrawerProfileName displayName={displayName} />
      </div>
    );
  }
}
