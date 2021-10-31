import { getAuth } from "firebase/auth";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import PersonIcon from "@mui/icons-material/Person";

export default function Account() {
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
      <Paper
        style={{
          padding: "40px 40px",
          height: "auto",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <div>
            <Avatar
              sx={{
                width: 200,
                height: 200,
              }}
            >
              <PersonIcon style={{ fontSize: "140px" }} />
            </Avatar>
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              Upload picture
            </div>
          </div>
          <div style={{ marginLeft: "40px" }}>
            <div>Name: {displayName}</div>
            <div>Email: {email}</div>
            <div>Edit</div>
          </div>
        </div>
      </Paper>
    </div>
  );
}
