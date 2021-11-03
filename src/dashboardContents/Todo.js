import { useSelector } from "react-redux";
import { selectTodoData } from "../context/slices/TodoDataSlice";
import OpenTodo from "../open/OpenTodo";
import UpdateTodoLink from "../update/UpdateTodoLink";
import DeleteAlert from "../delete/DeleteTodoAlert";
import Preview from "./Preview";
import Paper from "@mui/material/Paper";

export default function Todo() {
  const data = useSelector(selectTodoData);

    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-start",
        }}
      >
        {data.map((todo, index) => (
          <Paper
            key={index}
            style={{
              margin: "10px",
              padding: "10px 20px",
              height: "200px",
              width: "350px",
              position: "relative",
            }}
          >
            <OpenTodo
              todoId={todo.todoId}
              title={todo.title}
              body={todo.body}
              createdAt={todo.createdAt}
              updatedAt={todo.updatedAt}
            />
            <UpdateTodoLink todoId={todo.todoId} />
            <DeleteAlert todoId={todo.todoId} title={todo.title} />
            <Preview
              title={todo.title}
              body={todo.body}
              createdAt={todo.createdAt}
              updatedAt={todo.updatedAt}
            />
          </Paper>
        ))}
      </div>
    );
}
