// Define a functional React component named Footer.
function Footer() {
    return (
        // Apply inline CSS styling to the <footer> tag.
        <footer style={{
            backgroundColor: '#333',         // Dark gray background
            color: 'white',                  // White text color
            textAlign: 'center',             // Center align text
            padding: '15px',                 // Inner spacing
            marginTop: '30px',               // Margin at the top to separate from content
            fontSize: '0.9em',               // Slightly smaller font size
            borderRadius: '8px',             // Rounded corners
            position: 'relative',            // For potential future positioning
            bottom: '0',                     // Stick to the bottom if content is short
            width: '100%'                    // Full width
        }}>
            {/* Paragraph containing copyright information */}
            <p>© 2023 City Lovers. All rights reserved.</p>
        </footer>
    );
}

// Export the Footer component.
export default Footer;
