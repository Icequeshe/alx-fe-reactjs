// Define a functional React component named Header.
function Header() {
    return (
        // Apply inline CSS styling to the <header> tag.
        // Styles are passed as a JavaScript object where CSS properties are camelCased.
        <header style={{
            backgroundColor: '#282c34', // Dark background color
            color: 'white',            // White text color
            textAlign: 'center',       // Center align the text
            padding: '20px',           // Add some padding
            fontSize: '1.5em',         // Increase font size
            borderRadius: '8px',       // Rounded corners
            marginBottom: '20px'       // Margin at the bottom
        }}>
            {/* Main title for the header */}
            <h1>My Favorite Cities</h1>
        </header>
    );
}

// Export the Header component for use in other files.
export default Header;