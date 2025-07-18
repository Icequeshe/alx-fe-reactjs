// Define a functional React component named UserProfile that accepts 'props'.
const UserProfile = (props) => {
  return (
    // Apply inline CSS styling to the main div container of the user profile.
    // This includes border, padding, margin, border-radius, and shadow for visual separation.
    <div style={{
        border: '1px solid #ddd',        // Light gray border
        padding: '20px',                 // Inner spacing
        margin: '15px auto',             // Center the div with auto horizontal margins
        maxWidth: '400px',               // Max width to keep it from stretching too wide
        borderRadius: '10px',            // Slightly more rounded corners
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)', // Subtle shadow for depth
        backgroundColor: '#f9f9f9',      // Light background color
        textAlign: 'left'                // Align text to the left
    }}>
      {/* Apply inline styling to the h2 tag for the user's name. */}
      <h2 style={{
          color: '#007bff',              // Blue color for the name
          fontSize: '1.8em',             // Larger font size
          marginBottom: '10px'           // Space below the name
      }}>{props.name}</h2>

      {/* Apply inline styling to the p tag for age. */}
      <p style={{
          fontSize: '1.1em',             // Slightly larger font size
          color: '#555',                 // Darker gray text color
          marginBottom: '5px'            // Small margin below
      }}>
        Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span> {/* Bold age value */}
      </p>

      {/* Apply inline styling to the p tag for bio. */}
      <p style={{
          fontSize: '1em',               // Standard font size
          color: '#666',                 // Gray text color
          lineHeight: '1.5'              // Improve readability for longer text
      }}>Bio: {props.bio}</p>
    </div>
  );
};

// Export the UserProfile component.
export default UserProfile;
