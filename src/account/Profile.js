import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectProfileData } from "../context/slices/ProfileDataSlice";
import ProfileContainer from "../components/ProfileContainer";
import ProfilePresentation from "./ProfilePresentation";
import ProfileEditForm from "./ProfileEditForm";
import Avatar from "@mui/material/Avatar";
import PersonIcon from "@mui/icons-material/Person";
import Grid from "@mui/material/Grid";
import Button2 from "../components/Button2";

export default function Profile() {
  const profileData = useSelector(selectProfileData);
  var displayName = profileData.name;
  var email = profileData.email;

  const [nameLettersUpdate, setNameLettersUpdate] = useState("");
  const [emailLettersUpdate, setEmailLettersUpdate] = useState("");
  const [nameErrorMessage, setNameErrorMessage] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [editMode, setEditMode] = useState(false);

  const handleEditMode = () => {
    setEditMode(!editMode);
  };

  useEffect(() => {
    if (editMode === false) {
      setNameLettersUpdate("");
      setEmailLettersUpdate("");
      setNameErrorMessage("");
      setEmailErrorMessage("");
    } else {
      setNameLettersUpdate(displayName);
      setEmailLettersUpdate(email);
    }
  }, [displayName, email, editMode]);

  return (
    <div>
      <ProfileContainer>
        <Grid item sx={{ margin: "10px" }}>
          <Avatar
            sx={{
              width: 200,
              height: 200,
            }}
          >
            <PersonIcon style={{ fontSize: "140px" }} />
          </Avatar>
        </Grid>
        <Grid item sx={{ margin: "10px" }}>
          <div>
            <ProfilePresentation
              editMode={editMode}
              displayName={displayName}
              email={email}
            />
            <ProfileEditForm
              editMode={editMode}
              setEditMode={setEditMode}
              nameLettersUpdate={nameLettersUpdate}
              setNameLettersUpdate={setNameLettersUpdate}
              emailLettersUpdate={emailLettersUpdate}
              setEmailLettersUpdate={setEmailLettersUpdate}
              nameErrorMessage={nameErrorMessage}
              setNameErrorMessage={setNameErrorMessage}
              emailErrorMessage={emailErrorMessage}
              setEmailErrorMessage={setEmailErrorMessage}
            />
            <Button2 onClick={handleEditMode}>Edit</Button2>
          </div>
        </Grid>
      </ProfileContainer>
    </div>
  );
}
