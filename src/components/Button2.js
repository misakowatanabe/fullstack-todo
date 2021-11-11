import Button from "@mui/material/Button";
import BuildIcon from "@mui/icons-material/Build";

export default function Button2({ children, disabled, onClick }) {
  return (
    <div style={{ margin: "20px 0px 0px 0px" }}>
      <Button
        onClick={onClick}
        variant="contained"
        disabled={disabled}
        style={
          disabled
            ? { padding: "10px 14px 10px 25px", borderRadius: "25px" }
            : {
                backgroundColor: "#9c9c9c",
                padding: "10px 14px 10px 25px",
                borderRadius: "25px",
                boxShadow: "none",
              }
        }
      >
        {children}
        <BuildIcon sx={{ fontSize: "20px", margin: "0px 5px 0px 11px" }} />
      </Button>
    </div>
  );
}
