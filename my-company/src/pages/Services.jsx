import React from 'react';

// Define the Services functional component.
function Services() {
  return (
    // Apply inline CSS for padding, text alignment, and a background color.
    <div style={{
      padding: '40px',
      textAlign: 'center',
      backgroundColor: '#f0f4f8',
      minHeight: 'calc(100vh - 120px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      {/* Main heading for the services page */}
      <h1 style={{ color: '#28a745', fontSize: '2.8em', marginBottom: '25px' }}>Our Services</h1>
      {/* Unordered list of services with custom styling */}
      <ul style={{
        listStyle: 'none', // Remove default list bullets
        padding: '0',
        maxWidth: '500px',
        margin: '0 auto'
      }}>
        <li style={{
          backgroundColor: '#ffffff',
          margin: '10px 0',
          padding: '15px 20px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.08)',
          fontSize: '1.1em',
          color: '#333',
          textAlign: 'left'
        }}>
          <strong>Technology Consulting:</strong> Guiding your digital transformation.
        </li>
        <li style={{
          backgroundColor: '#ffffff',
          margin: '10px 0',
          padding: '15px 20px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.08)',
          fontSize: '1.1em',
          color: '#333',
          textAlign: 'left'
        }}>
          <strong>Market Analysis:</strong> Providing insights for strategic decisions.
        </li>
        <li style={{
          backgroundColor: '#ffffff',
          margin: '10px 0',
          padding: '15px 20px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.08)',
          fontSize: '1.1em',
          color: '#333',
          textAlign: 'left'
        }}>
          <strong>Product Development:</strong> Bringing your ideas to life.
        </li>
        <li style={{
          backgroundColor: '#ffffff',
          margin: '10px 0',
          padding: '15px 20px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.08)',
          fontSize: '1.1em',
          color: '#333',
          textAlign: 'left'
        }}>
          <strong>Digital Marketing:</strong> Expanding your online presence.
        </li>
      </ul>
    </div>
  );
}

export default Services;
