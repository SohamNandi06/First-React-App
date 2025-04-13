import React, { useState } from 'react';
import './App.css'

function TodoApp() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === '') return;
    setTasks([...tasks, task]);
    setTask('');
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="todo-container">
  <h2 className="todo-header">📝 My To-Do List</h2>
  
  <div className="input-section">
    <input
      type="text"
      placeholder="Enter a task"
      value={task}
      onChange={(e) => setTask(e.target.value)}
    />
    <button onClick={addTask}>Add</button>
  </div>

  <ol className="task-list">
    {tasks.map((t, index) => (
      <li key={index} className="task-item">
        {t}
        <button onClick={() => deleteTask(index)}>❌</button>
        <input
          type="checkbox"
          onClick={() => deleteTask(index)}
        />
      </li>
    ))}
  </ol>
</div>

  );
}

export default TodoApp;
