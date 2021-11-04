import { useSelector } from "react-redux";
import { selectTodoData } from "../context/slices/TodoDataSlice";
import TodoPaper from "../components/TodoPaper";
import TodoPaperContainer from "../components/TodoPaperContainer";
import OpenTodo from "../open/OpenTodo";
import UpdateTodoLink from "../update/UpdateTodoLink";
import DeleteAlert from "../delete/DeleteTodoAlert";
import Preview from "./Preview";
import Grid from "@mui/material/Grid";

export default function Todo() {
  const data = useSelector(selectTodoData);

  return (
    <TodoPaperContainer>
      {data.map((todo, index) => (
        <TodoPaper key={index}>
          <Grid container>
            <Grid item xs={7}>
              <div className="todo-title">{todo.title}</div>
            </Grid>
            <Grid item>
              <OpenTodo
                todoId={todo.todoId}
                title={todo.title}
                body={todo.body}
                createdAt={todo.createdAt}
                updatedAt={todo.updatedAt}
              />
              <UpdateTodoLink todoId={todo.todoId} />
              <DeleteAlert todoId={todo.todoId} title={todo.title} />
            </Grid>
          </Grid>
          <Preview
            body={todo.body}
            createdAt={todo.createdAt}
            updatedAt={todo.updatedAt}
          />
        </TodoPaper>
      ))}
    </TodoPaperContainer>
  );
}
