import React from 'react';

// Define the Home functional component.
function Home() {
  return (
    // Apply inline CSS for padding, text alignment, and a light background.
    <div style={{
      padding: '40px',
      textAlign: 'center',
      backgroundColor: '#f8f8f8',
      minHeight: 'calc(100vh - 120px)', // Adjust height to fill space, considering navbar and footer
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      {/* Main heading for the home page */}
      <h1 style={{ color: '#333', fontSize: '3em', marginBottom: '20px' }}>Welcome to Our Company</h1>
      {/* Paragraph with a welcome message */}
      <p style={{ color: '#555', fontSize: '1.2em', maxWidth: '600px' }}>
        We are dedicated to delivering excellence in all our services. Explore our site to learn more about what we offer.
      </p>
      {/* Optional: Add an image for visual appeal */}
      <img
        src="https://placehold.co/600x300/E0F7FA/007BFF?text=Company+Building"
        alt="Company Building"
        style={{ marginTop: '30px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x300/cccccc/333333?text=Image+Not+Found"; }}
      />
    </div>
  );
}

export default Home;
