import React from 'react';

// Define the Footer functional component.
function Footer() {
  // Inline styles for the footer.
  const footerStyle = {
    backgroundColor: '#333', // Dark background
    color: 'white',          // White text
    textAlign: 'center',     // Center text
    padding: '20px',         // Padding
    marginTop: 'auto',       // Push footer to the bottom
    boxShadow: '0 -2px 5px rgba(0,0,0,0.2)', // Subtle shadow
    borderRadius: '8px 8px 0 0' // Rounded top corners
  };

  return (
    <footer style={footerStyle}>
      {/* Copyright information */}
      <p>&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
      <p style={{ fontSize: '0.9em', marginTop: '5px' }}>Designed with React and ❤️</p>
    </footer>
  );
}

export default Footer;
