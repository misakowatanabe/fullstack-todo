import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import EditIcon from "@mui/icons-material/Edit";

export default function UpdateTodoLink({ todoId }) {
  return (
    <NavLink to={`/update/${todoId}`}>
      <Button
        className="preview-edit-delete-button"
        style={{ position: "absolute", right: "42px" }}
      >
        <EditIcon />
      </Button>
    </NavLink>
  );
}
