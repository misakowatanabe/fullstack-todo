import { getAuth } from "firebase/auth";
import ProfileContainer from "../components/ProfileContainer";
import Avatar from "@mui/material/Avatar";
import PersonIcon from "@mui/icons-material/Person";
import Grid from "@mui/material/Grid";

export default function Profile() {
  const auth = getAuth();
  const user = auth.currentUser;
  var displayName = null;
  var email = null;
  if (user !== null) {
    displayName = user.displayName;
    email = user.email;
  }

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
            <div>Name: {displayName}</div>
            <div>Email: {email}</div>
            <div>Edit</div>
          </div>
        </Grid>
      </ProfileContainer>
    </div>
  );
}
