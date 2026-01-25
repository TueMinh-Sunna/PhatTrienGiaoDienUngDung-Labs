import React, { useEffect, useState } from "react";

function TodoCrud() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch(() => setError("Load failed"));
  }, []);

  const addTodo = async (e) => {
    e.preventDefault();
    if (!title) return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, completed: false }),
      });

      if (!res.ok) throw new Error();
      const newTodo = await res.json();

      setTodos((prev) => [...prev, newTodo]);
      setTitle("");
    } catch {
      setError("Add failed");
    } finally {
      setLoading(false);
    }
  };

  const deleteTodo = async (id) => {
    const prev = todos;
    setTodos((t) => t.filter((todo) => todo.id !== id));

    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        { method: "DELETE" }
      );
      if (!res.ok) throw new Error();
    } catch {
      setTodos(prev);
      setError("Delete failed");
    }
  };

  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="New todo"
        />
        <button disabled={loading}>Add</button>
      </form>

      {error && <p>{error}</p>}

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <button onClick={() => deleteTodo(todo.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoCrud;
