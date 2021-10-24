import Paper from "@mui/material/Paper";
import Skeleton from "@mui/material/Skeleton";

export default function LoadingProfile() {
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
            <Skeleton
              variant="circular"
              width={200}
              height={200}
              style={{ marginBottom: "40px" }}
            />
          </div>
          <div style={{ marginLeft: "40px" }}>
            <div style={{ minWidth: "200px" }}>
              <Skeleton height={20} width="100%" />
              <Skeleton height={20} width="100%" />
              <Skeleton height={20} width="80%" />
            </div>
          </div>
        </div>
      </Paper>
    </div>
  );
}
