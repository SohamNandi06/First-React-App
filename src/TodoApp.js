import React, { useState } from 'react';
import './App.css'

function TodoApp() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [taskStatus, setTaskStatus] = useState([]);


  const addTask = () => {
    if (task.trim() === '') return;
    setTasks([...tasks, task]);
    setTaskStatus([...taskStatus, 'Not done']);
    setTask('');
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };
  const doneTask = (index) => {
    const newStatus = [...taskStatus];
    newStatus[index] = newStatus[index] === 'Not done' ? 'Done' : 'Not done'; // toggle
    setTaskStatus(newStatus);
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

  <div className="task-list">
    {tasks.map((t, index) => (
      
      <div key={index} className="task-item">
        <div>
        {t}
        </div>
        <div className='dlt'>
        <button className='delete-btn' onClick={() => deleteTask(index)}>Delete</button>
        </div>
        <div className='taskstatdiv'>
        <button className='taskstat' onClick={() => doneTask(index)}>{taskStatus[index]}</button>
        </div>
      </div>
    ))}
  </div>
</div>

  );
}

export default TodoApp;
