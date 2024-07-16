export function Todo({ todo, setTodos, setEditTodoId }) {
  const { id, title, isCompleted } = todo;

  function toggleComplete() {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isCompleted: !isCompleted } : item
      )
    );
  }

  function deleteTodo() {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <div
      className="flex items-center justify-between bg-gray-300"
      onDoubleClick={toggleComplete}
    >
      <h1 className={isCompleted && "line-through"}>{title}</h1>
      <div className="flex items-center gap-x-3">
        <button onClick={() => setEditTodoId(id)}>edit</button>
        <button onClick={deleteTodo}>delete</button>
      </div>
    </div>
  );
}
