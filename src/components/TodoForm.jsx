// component containing input field and add task button 
import { useState } from "react";
import Task from "../models/Task";
import "./TodoForm.css";


// default function component
function TodoForm({ addTask }) {
  const [title, setTitle] = useState("");
 

  // preventing default reload page on submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "") return;

    const newTask = new Task(Date.now(), title);
    addTask(newTask);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter a task..."
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
