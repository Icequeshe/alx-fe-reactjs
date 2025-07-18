import React from 'react';

// Define the About functional component.
function About() {
  return (
    // Apply inline CSS for padding, text alignment, and a slightly different background.
    <div style={{
      padding: '40px',
      textAlign: 'center',
      backgroundColor: '#e0f7fa',
      minHeight: 'calc(100vh - 120px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      {/* Main heading for the about page */}
      <h1 style={{ color: '#007bff', fontSize: '2.8em', marginBottom: '20px' }}>About Us</h1>
      {/* Paragraph with company information */}
      <p style={{ color: '#333', fontSize: '1.1em', lineHeight: '1.6', maxWidth: '700px' }}>
        Our company has been providing top-notch services since 1990. We specialize in various fields including technology, marketing, and consultancy.
        Our mission is to empower businesses with innovative solutions and unparalleled support, fostering growth and success in a rapidly evolving market.
      </p>
      {/* Optional: Add another image */}
      <img
        src="https://placehold.co/500x250/B2EBF2/007BFF?text=Our+Team"
        alt="Our Team"
        style={{ marginTop: '30px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/500x250/cccccc/333333?text=Image+Not+Found"; }}
      />
    </div>
  );
}

export default About;
