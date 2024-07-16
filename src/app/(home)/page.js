"use client";

import { Todo } from "@/components/Todo";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState("");
  const [editTodoId, setEditTodoId] = useState(null);
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  console.log(theme);

  useEffect(() => {
    if (editTodoId) {
      const todo = todos.find((item) => item.id === editTodoId);
      setTodoText(todo.title);
    }
  }, [editTodoId]);

  function addOrUpdateTodo() {
    if (!editTodoId) {
      const newTodo = {
        id: todos.length ? todos[todos.length - 1].id + 1 : 1,
        title: todoText,
        isCompleted: false,
      };
      setTodos([...todos, newTodo]);
    } else {
      setTodos(
        todos.map((item) =>
          item.id === editTodoId ? { ...item, title: todoText } : item
        )
      );
      setEditTodoId(null);
    }
    setTodoText("");
  }

  return (
    <div className="container">
      <h1 className="text-center text-lg">To Do List</h1>
      <input
        value={todoText}
        placeholder="enter a task"
        className="w-full border border-black"
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button className="border border-black" onClick={addOrUpdateTodo}>
        {!editTodoId ? "add" : "update"} task
      </button>
      <ul className="flex flex-col gap-y-3">
        {todos.map((todo) => (
          <Todo todo={todo} setTodos={setTodos} setEditTodoId={setEditTodoId} />
        ))}
      </ul>
    </div>
  );
}
