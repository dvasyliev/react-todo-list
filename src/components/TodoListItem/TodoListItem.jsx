import { useState } from "react";
import { PRIORITIES, PRIORITY_DEFAULT } from "../../constants/priorities";
import { TodoFormFields } from "../TodoFormFields/TodoFormFields";
import styles from "./TodoListItem.module.css";

export function TodoListItem({ todo, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleCompleted(event) {
    onUpdate(todo.id, { ...todo, completed: event.target.checked });
  }

  const viewingTemplate = (
    <div className={styles.Content}>
      <input
        type="checkbox"
        name="completed"
        checked={todo.completed}
        onChange={handleCompleted}
        className={styles.Status}
      />

      <div className={styles.Info}>
        {todo.name}

        {todo.description && (
          <span className={styles.Description}>{todo.description}</span>
        )}

        <div className={styles.AdditionalInfo}>
          {todo.deadline}{" "}
          {todo.priority !== PRIORITY_DEFAULT && (
            <span style={{ color: PRIORITIES[todo.priority].color }}>
              {PRIORITIES[todo.priority].label}
            </span>
          )}
        </div>
      </div>

      <div className={styles.Controls}>
        <button onClick={() => setIsEditing(true)}>📝</button>
      </div>
    </div>
  );

  const editingTemplate = (
    <form className={styles.Content} onReset={() => setIsEditing(false)}>
      <TodoFormFields todo={todo} />

      <div className={styles.Controls}>
        <input type="submit" value="💾" />
        <input type="reset" value="❌" />
      </div>
    </form>
  );

  return (
    <li className={styles.TodoListItem} data-completed={todo.completed}>
      {isEditing ? editingTemplate : viewingTemplate}
    </li>
  );
}
