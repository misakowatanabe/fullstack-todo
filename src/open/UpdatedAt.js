import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function UpdatedAt({ updatedAt }) {
  const xs = useMediaQuery("(max-width:599px)");

  var update;
  if (updatedAt) {
    update = (
      <Typography
        className="updated-dialog"
        component={xs ? "div" : "span"}
        sx={{ paddingLeft: { sm: "15px" } }}
      >
        Updated: {updatedAt}
      </Typography>
    );
  } else {
    update = null;
  }

  return update;
}
