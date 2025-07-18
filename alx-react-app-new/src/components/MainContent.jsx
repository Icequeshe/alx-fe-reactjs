// Define a functional React component named MainContent.
function MainContent() {
    return (
        // Apply inline CSS styling to the <main> tag.
        <main style={{
            padding: '30px',                 // Generous inner spacing
            margin: '20px auto',             // Center the content
            maxWidth: '600px',               // Max width for readability
            backgroundColor: '#e0f7fa',      // Light blue background
            color: '#333',                   // Dark text color
            textAlign: 'center',             // Center align text
            borderRadius: '10px',            // Rounded corners
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)' // Subtle shadow
        }}>
            {/* Paragraph containing the main text content */}
            <p style={{ fontSize: '1.2em', lineHeight: '1.6' }}>
                I love to visit New York, Paris, and Tokyo. These cities offer unique experiences,
                from vibrant cultural scenes to breathtaking landmarks and delicious cuisine.
            </p>
        </main>
    );
}

// Export the MainContent component.
export default MainContent;

