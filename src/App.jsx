import { useEffect, useState } from "react";
import { TodoForm } from "./components/TodoForm/TodoForm";
import { TodoList } from "./components/TodoList/TodoList";
import { TodoFilters } from "./components/TodoFilters/TodoFilters";
import styles from "./App.module.css";
import { api } from "./api";

function App() {
  const [todos, setTodos] = useState([]);
  const [filters, setFilters] = useState({});

  function fetchTodos() {
    api.todos.getAll(filters).then(setTodos);
  }

  useEffect(() => {
    fetchTodos();
  }, [filters]);

  function handleCreate(newTodo) {
    api.todos.create(newTodo).then(fetchTodos);
  }

  function handleUpdate(id, newTodo) {
    api.todos.update(id, newTodo).then(fetchTodos);
  }

  function handleDelete(id) {
    api.todos.delete(id).then(fetchTodos);
  }

  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <img className={styles.Logo} src="/to-do.png" />
        <h2 className={styles.Title}>To-Do App</h2>
      </header>

      <div className={styles.AppContainer}>
        <TodoForm onCreate={handleCreate} />
        <TodoFilters onFilter={setFilters} />
        <TodoList
          todos={todos}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default App;
