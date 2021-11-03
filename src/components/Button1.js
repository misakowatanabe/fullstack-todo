import Button from "@mui/material/Button";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function Button1({ children, disabled }) {
  return (
    <div style={{ margin: "0 auto", textAlign: "center" }}>
      <Button
        type="submit"
        variant="contained"
        disabled={disabled}
        style={
          disabled
            ? { padding: "10px 14px 10px 25px", borderRadius: "25px" }
            : {
                backgroundColor: "#1976d2",
                padding: "10px 14px 10px 25px",
                borderRadius: "25px",
              }
        }
      >
        {children}
        <KeyboardArrowRightIcon className="arrowIcon" />
      </Button>
    </div>
  );
}
