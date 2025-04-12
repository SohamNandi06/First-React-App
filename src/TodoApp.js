import React, { useState } from 'react';

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
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h2>📝 My To-Do List</h2>
      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={{ width: '70%' }}
      />
      <button onClick={addTask} style={{ marginLeft: '10px' }}>
        Add
      </button>

      <ul>
        {tasks.map((t, index) => (
          <li key={index} style={{ margin: '8px 0' }}>
            {t}{' '}
            <button onClick={() => deleteTask(index)} style={{ marginLeft: '10px' }}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
