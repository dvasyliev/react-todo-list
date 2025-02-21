export function TodoForm() {
  return (
    <section>
      <h3>New To-Do</h3>

      <form>
        <input
          type="text"
          aria-label="Name*"
          placeholder="Name*"
          name="name"
          autoComplete="off"
        />

        <textarea
          aria-label="Description"
          placeholder="Description"
          name="description"
          rows="3"
        />

        <label htmlFor="deadline">Deadline</label>
        <input type="date" id="deadline" name="deadline" />

        <label htmlFor="priority">Priority</label>
        <select defaultValue="none" id="priority" name="priority">
          <option value="none">None</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <input type="submit" value="Add" />
      </form>
    </section>
  );
}
