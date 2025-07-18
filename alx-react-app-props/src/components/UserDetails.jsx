// Import the useContext hook from React.
// This hook allows functional components to read context values.
import { useContext } from 'react';
// Import the UserContext that we created.
import UserContext from './UserContext';

// Define the UserDetails functional component.
// It no longer receives userData as a prop.
function UserDetails() {
  // Use the useContext hook to get the value from UserContext.
  // This value will be the userData object provided by the UserContext.Provider.
  const userData = useContext(UserContext);

  // Apply some inline styling for better presentation.
  const detailStyle = {
    border: '1px solid #e0e0e0',
    padding: '15px',
    margin: '10px 0',
    borderRadius: '8px',
    backgroundColor: '#f5f5f5',
    boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
  };

  const textStyle = {
    fontSize: '1.1em',
    color: '#333',
    marginBottom: '5px'
  };

  return (
    <div style={detailStyle}>
      <h3 style={{ color: '#007bff', marginBottom: '10px' }}>User Details (from Context)</h3>
      {/* Display user's name and email using data from the context. */}
      <p style={textStyle}>Name: <span style={{ fontWeight: 'bold' }}>{userData.name}</span></p>
      <p style={textStyle}>Email: <span style={{ fontStyle: 'italic' }}>{userData.email}</span></p>
    </div>
  );
}

// Export the UserDetails component.
export default UserDetails;
