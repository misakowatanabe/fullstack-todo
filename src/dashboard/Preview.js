export default function Preview({ title, body, createdAt, updatedAt }) {
  return (
    <div>
      <div className="todo-createdAt">Created: {createdAt}</div>
      {updatedAt && (
        <div className="todo-updatedAt">Updated: {updatedAt}</div>
      )}
      <div className="todo-title">{title}</div>
      <div className="todo-body">{body}</div>
    </div>
  );
}
