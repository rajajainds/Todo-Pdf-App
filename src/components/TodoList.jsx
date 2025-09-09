import "./TodoList.css";

function TodoList({ tasks,deleteTask }) {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <li key={task.id} >
           <span >{task.title}</span> 
          <button onClick={() => deleteTask(task.id)}>❌</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
