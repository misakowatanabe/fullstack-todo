import TodoPaper from "../components/TodoPaper";
import TodoPaperContainer from "../components/TodoPaperContainer";
import Skeleton from "@mui/material/Skeleton";
import Button from "@mui/material/Button";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import EditIcon from "@mui/icons-material/Edit";
import ClearIcon from "@mui/icons-material/Clear";

export default function LoadingDashboard() {
  return (
    <TodoPaperContainer>
      {[1, 2].map((index) => (
        <TodoPaper key={index}>
          <Button
            className="preview-edit-delete-button"
            style={{ position: "absolute", right: "75px" }}
          >
            <OpenInFullIcon />
          </Button>
          <Button
            className="preview-edit-delete-button"
            style={{ position: "absolute", right: "42px" }}
          >
            <EditIcon />
          </Button>
          <Button
            className="preview-edit-delete-button"
            style={{ position: "absolute", right: "10px" }}
          >
            <ClearIcon />
          </Button>
          <Skeleton height={30} width="60%" />
          <Skeleton height={20} width="100%" style={{ marginTop: 17 }} />
          <Skeleton height={20} width="100%" />
          <Skeleton height={20} width="50%" />
          <Skeleton height={20} width="40%" style={{ marginTop: 45 }} />
        </TodoPaper>
      ))}
    </TodoPaperContainer>
  );
}
