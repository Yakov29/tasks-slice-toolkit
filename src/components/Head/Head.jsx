import { useState } from "react";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { addTask, removeTask, filterTask } from "../../redux/actions";

import "./Head.css"

const Head = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    const title = inputValue.trim();
    if (!title) return;

    dispatch(addTask({ id: nanoid(), title, completed: false }));
    setInputValue("");
  };

  const handleRemove = (taskId) => {
    dispatch(removeTask(taskId));
  };

  const handleSend = (e) => {
    e.preventDefault()
    const value = e.target.text.value
    dispatch(filterTask(value))

  }

  return (
    <header className="header">
      <input
      className="header__input"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Назва таску"
      />
      <button onClick={handleAdd}>Додати</button>

      <form onSubmit={handleSend}>
        <h3>Фiльтер</h3>
        <input type="text" placeholder="text" name="text" />
        <button type="submit">Фiльтрувати</button>
      </form>

      <div>
        {tasks.map((task) => (
          <div
            key={task.id}
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
          >
            <span>{task.title}</span>
            <button onClick={() => handleRemove(task.id)}>✖️</button>
          </div>
        ))}
      </div>
    </header>
  );
};

export default Head;
