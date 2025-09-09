// main application page compoonent
import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Quote from "./components/Quote";
import jsPDF from "jspdf";
import "./App.css";


// main app function
function App() {
  // setter for title of input box
  const [tasks, setTasks] = useState([]);

  // upadting task list by adding newly added task
  const addTask = (task) => setTasks([...tasks, task]);

  const deleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id));

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("My Todo List", 10, 10);
    tasks.forEach((task, i) => {
      doc.text(
        `${i + 1}. ${task.title}}`,
        10,
        20 + i * 10
      );
    });
    doc.save("todo-list.pdf");
  };

  return (
    <div className="container">
      <h1>📌 Todo Pdf App</h1>

      <Quote />

      <TodoForm addTask={addTask} />
      <TodoList tasks={tasks} deleteTask={deleteTask} />

      <button className="export-btn" onClick={exportPDF}>
        Export to PDF
      </button>
    </div>
  );
}

export default App;
