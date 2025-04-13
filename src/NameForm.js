import React, { useState } from 'react';
import './App.css'
function NameForm() {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  // Handle input change
  const handleChange = (event) => {
    setName(event.target.value);  // Update the state with the input value
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    setGreeting(`Hello, ${name}!`); // Update the greeting message
  };

  return (
    <div>
    <div className='form-main'>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <div className='greet'>
      {greeting && <p>{greeting}</p>} {/* Display the greeting */}
      </div>
    </div>
    </div>
  );
}

export default NameForm;
