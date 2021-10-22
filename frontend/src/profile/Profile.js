import { useSelector } from "react-redux";
import { selectProfileData } from "../context/slices/ProfileDataSlice";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";

export default function Profile() {
  const profileData = useSelector(selectProfileData);

  if (profileData)
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
                alt="Avatar"
                sx={{
                  width: 200,
                  height: 200,
                }}
              >
                M
              </Avatar>
              <div style={{ textAlign: "center", marginTop: "20px" }}>
                Upload picture
              </div>
            </div>
            <div style={{ marginLeft: "40px" }}>
              <div>First Name: {profileData.firstName}</div>
              <div>Last Name: {profileData.lastName}</div>
              <div>Email: {profileData.email}</div>
              <div>Edit</div>
            </div>
          </div>
        </Paper>
      </div>
    );
}
