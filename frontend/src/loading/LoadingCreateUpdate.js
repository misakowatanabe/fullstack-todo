import CircularProgress from "@mui/material/CircularProgress";

export default function LoadingCreateUpdate() {
  return (
    <div style={{ width: "100%", textAlign: "center", margin: "100px auto" }}>
      <CircularProgress />
    </div>
  );
}
