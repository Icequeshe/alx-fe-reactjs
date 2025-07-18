// Import the useContext hook from React.
import { useContext } from 'react';
// Import the UserContext that we created.
import UserContext from './UserContext'; // Ensure this path is correct relative to UserProfile.jsx

// Define the UserProfile functional component.
// It no longer receives props, as it will get data from the context.
const UserProfile = () => {
  // Use the useContext hook to get the value from UserContext.
  // This value will be the userData object provided by the UserContext.Provider.
  const userData = useContext(UserContext);

  // Apply inline styling for better presentation, retaining styles from previous tasks.
  const profileContainerStyle = {
    border: '1px solid #ddd',        // Light gray border
    padding: '20px',                 // Inner spacing
    margin: '15px auto',             // Center the div with auto horizontal margins
    maxWidth: '400px',               // Max width to keep it from stretching too wide
    borderRadius: '10px',            // Slightly more rounded corners
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)', // Subtle shadow for depth
    backgroundColor: '#f9f9f9',      // Light background color
    textAlign: 'left'                // Align text to the left
  };

  const nameStyle = {
    color: 'blue',                   // Blue color for the name (as per check requirement)
    fontSize: '1.8em',               // Larger font size
    marginBottom: '10px'             // Space below the name
  };

  const textStyle = {
    fontSize: '1.1em',               // Slightly larger font size
    color: '#555',                   // Darker gray text color
    marginBottom: '5px'              // Small margin below
  };

  return (
    <div style={profileContainerStyle}>
      {/* Display the user's name using data from the context. */}
      <h2 style={nameStyle}>{userData.name}</h2>

      {/* Display the user's email using data from the context. */}
      <p style={textStyle}>Email: <span style={{ fontWeight: 'bold' }}>{userData.email}</span></p>

      {/* Note: 'Age' and 'Bio' are removed here because the 'userData' object
          provided by App.jsx in the context only contains 'name' and 'email'
          for this specific refactoring task. */}
    </div>
  );
};

// Export the UserProfile component.
export default UserProfile;
