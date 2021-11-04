import ProfileContainer from "../components/ProfileContainer";
import DeleteAccountContainer from "../components/DeleteAccountContainer";
import Skeleton from "@mui/material/Skeleton";
import Grid from "@mui/material/Grid";

export default function LoadingAccount() {
  return (
    <div>
      <ProfileContainer>
        <Grid item sx={{ padding: "10px" }}>
          <Skeleton variant="circular" width={200} height={200} />
        </Grid>
        <Grid item sx={{ padding: "10px" }}>
          <div>
            <div style={{ minWidth: "200px" }}>
              <Skeleton height={24} width="100%" />
              <Skeleton height={24} width="100%" />
              <Skeleton height={24} width="80%" />
            </div>
          </div>
        </Grid>
      </ProfileContainer>
      <DeleteAccountContainer>
        <div style={{ minWidth: "200px", padding: "4px 0px" }}>
          <Skeleton height={25} width="100%" />
        </div>
      </DeleteAccountContainer>
    </div>
  );
}
