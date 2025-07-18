// Import the useState hook from React.
// This hook allows functional components to have state.
import { useState } from 'react';

// Define a functional React component named Counter.
function Counter() {
  // Initialize state using the useState hook.
  // 'count' is the current state value.
  // 'setCount' is the function used to update the 'count' state.
  // The initial value of 'count' is set to 0.
  const [count, setCount] = useState(0);

  // Define a style object for the container div to make it visually appealing.
  const counterContainerStyle = {
    border: '1px solid #ccc',
    padding: '20px',
    margin: '20px auto',
    maxWidth: '300px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
    textAlign: 'center'
  };

  // Define a style object for the buttons.
  const buttonStyle = {
    backgroundColor: '#007bff', // Blue background
    color: 'white',              // White text
    border: 'none',              // No border
    padding: '10px 15px',        // Padding inside buttons
    margin: '5px',               // Margin between buttons
    borderRadius: '5px',         // Rounded corners
    cursor: 'pointer',           // Pointer cursor on hover
    fontSize: '1em',             // Font size
    transition: 'background-color 0.3s ease' // Smooth transition for hover effect
  };

  // Define a style object for the display text.
  const countTextStyle = {
    fontSize: '2em',            // Larger font size for the count
    color: '#333',              // Dark text color
    marginBottom: '15px'        // Margin below the text
  };

  return (
    // The main container div for the counter, with inline styles applied.
    <div style={counterContainerStyle}>
      {/* Display the current count. */}
      <p style={countTextStyle}>Current Count: {count}</p>

      {/* Button to increment the count.
          When clicked, setCount is called with 'count + 1' to update the state. */}
      <button
        onClick={() => setCount(count + 1)}
        style={buttonStyle}
        onMouseOver={e => e.currentTarget.style.backgroundColor = '#0056b3'} // Darker blue on hover
        onMouseOut={e => e.currentTarget.style.backgroundColor = '#007bff'} // Original blue on mouse out
      >
        Increment
      </button>

      {/* Button to decrement the count.
          When clicked, setCount is called with 'count - 1'. */}
      <button
        onClick={() => setCount(count - 1)}
        style={buttonStyle}
        onMouseOver={e => e.currentTarget.style.backgroundColor = '#0056b3'}
        onMouseOut={e => e.currentTarget.style.backgroundColor = '#007bff'}
      >
        Decrement
      </button>

      {/* Button to reset the count to 0.
          When clicked, setCount is called with 0. */}
      <button
        onClick={() => setCount(0)}
        style={buttonStyle}
        onMouseOver={e => e.currentTarget.style.backgroundColor = '#0056b3'}
        onMouseOut={e => e.currentTarget.style.backgroundColor = '#007bff'}
      >
        Reset
      </button>
    </div>
  );
}

// Export the Counter component as the default export.
export default Counter;
