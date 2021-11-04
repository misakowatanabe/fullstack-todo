export default function Preview({ body, createdAt, updatedAt }) {
  return (
    <div>
      <div className="todo-createdAt">
        Create: {createdAt}
        {updatedAt && (
          <span className="todo-updatedAt">Update: {updatedAt}</span>
        )}
      </div>
      <div className="todo-body">{body}</div>
    </div>
  );
}
