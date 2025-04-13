import React, { useState } from 'react';
import './App.css';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="counter-wrapper">
  <div className="counter-container">
    <p className="count-text">Count: {count}</p>
    <button className="increment" onClick={increment}>Increment</button>
  </div>
</div>

  );
}

export default Counter;
