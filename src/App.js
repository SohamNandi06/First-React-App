import React, { useState } from 'react';
import TodoApp from './TodoApp';
import Counter from './Counter';
import NameForm from './NameForm';

function App() {
  const [activeComponent, setActiveComponent] = useState(null); // no component shown at start

  const renderComponent = () => {
    switch (activeComponent) {
      case 'counter':
        return <Counter />;
      case 'form':
        return <NameForm />;
      case 'todo':
        return <TodoApp />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div style={{ marginBottom: '1rem' }}>
        <button onClick={() => setActiveComponent('counter')}>Show Counter</button>
        <button onClick={() => setActiveComponent('form')}>Show Name Form</button>
        <button onClick={() => setActiveComponent('todo')}>Show Todo App</button>
      </div>
      {renderComponent()}
    </div>
  );
}

export default App;

