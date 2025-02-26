import { useEffect, useState } from "react";
import { api } from "../api";

export function useTodos() {
  const [todos, setTodos] = useState([]);
  const [filters, setFilters] = useState({});
  const [errorMessage, setErrorMessage] = useState();

  async function fetchTodos() {
    try {
      const data = await api.todos.getAll(filters);
      setTodos(data);
    } catch (error) {
      setErrorMessage("Failed to get todo's. Please try again later.");
    }
  }

  useEffect(() => {
    fetchTodos();
  }, [filters]);

  async function handleCreate(newTodo) {
    try {
      await api.todos.create(newTodo);
      await fetchTodos();
    } catch (error) {
      setErrorMessage("Failed to create todo. Please try again later.");
    }
  }

  async function handleUpdate(id, newTodo) {
    try {
      await api.todos.update(0, newTodo);
      await fetchTodos();
    } catch (error) {
      setErrorMessage("Failed to update todo. Please try again later.");
    }
  }

  async function handleDelete(id) {
    try {
      await api.todos.delete(id);
      await fetchTodos();
    } catch (error) {
      setErrorMessage("Failed to delete todo. Please try again later.");
    }
  }

  return {
    data: todos,
    fetch: fetchTodos,
    filter: setFilters,
    create: handleCreate,
    update: handleUpdate,
    delete: handleDelete,
    error: {
      message: errorMessage,
      clear: () => setErrorMessage(),
    },
  };
}
