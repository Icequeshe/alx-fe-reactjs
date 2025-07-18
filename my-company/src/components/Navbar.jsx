import React from 'react';
// Import Link from react-router-dom for navigation.
import { Link } from 'react-router-dom';

// Define the Navbar functional component.
function Navbar() {
  // Inline styles for the navigation bar.
  const navStyle = {
    backgroundColor: '#333', // Dark background
    padding: '15px 20px',    // Padding
    display: 'flex',         // Use flexbox for layout
    justifyContent: 'center',// Center links horizontally
    alignItems: 'center',    // Center links vertically
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)', // Subtle shadow
    borderRadius: '0 0 8px 8px' // Rounded bottom corners
  };

  // Inline styles for individual navigation links.
  const linkStyle = {
    color: 'white',          // White text color
    textDecoration: 'none',  // Remove underline
    margin: '0 15px',        // Space between links
    fontSize: '1.1em',       // Font size
    fontWeight: 'bold',      // Bold text
    transition: 'color 0.3s ease, transform 0.2s ease', // Smooth transition for hover
    padding: '5px 0'         // Padding for click area
  };

  // Hover effect for links (applied via onMouseOver/onMouseOut)
  const linkHoverStyle = {
    color: '#007bff', // Blue on hover
    transform: 'scale(1.05)' // Slightly enlarge on hover
  };

  return (
    <nav style={navStyle}>
      {/* Link to the Home page */}
      <Link
        to="/"
        style={linkStyle}
        onMouseOver={e => Object.assign(e.currentTarget.style, linkHoverStyle)}
        onMouseOut={e => Object.assign(e.currentTarget.style, linkStyle)}
      >
        Home
      </Link>
      {/* Link to the About page */}
      <Link
        to="/about"
        style={linkStyle}
        onMouseOver={e => Object.assign(e.currentTarget.style, linkHoverStyle)}
        onMouseOut={e => Object.assign(e.currentTarget.style, linkStyle)}
      >
        About
      </Link>
      {/* Link to the Services page */}
      <Link
        to="/services"
        style={linkStyle}
        onMouseOver={e => Object.assign(e.currentTarget.style, linkHoverStyle)}
        onMouseOut={e => Object.assign(e.currentTarget.style, linkStyle)}
      >
        Services
      </Link>
      {/* Link to the Contact page */}
      <Link
        to="/contact"
        style={linkStyle}
        onMouseOver={e => Object.assign(e.currentTarget.style, linkHoverStyle)}
        onMouseOut={e => Object.assign(e.currentTarget.style, linkStyle)}
      >
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
