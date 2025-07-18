// Import necessary React hooks.
import { useState } from 'react';
// Import the UserContext we created.
import UserContext from './components/UserContext';
// Import the ProfilePage component.
import ProfilePage from './components/ProfilePage';

// You might still have other components from previous tasks,
// but for this specific refactoring, we focus on the user data flow.
// For a clean demonstration of Context API, I'm keeping App.jsx minimal
// as per the prompt's "Initial Code with Prop Drilling" structure.
// If you want to re-integrate Header, MainContent, Footer, Counter, etc.,
// you would add their imports and JSX here, outside the UserContext.Provider if they don't need user data,
// or inside if they do.

// Define the main App functional component.
function App() {
  // Define the user data that will be provided through the context.
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    // UserContext.Provider makes the 'value' prop available to all components
    // rendered within its tree, regardless of how deep they are.
    // The 'value' prop is the data that will be consumed by useContext(UserContext).
    <UserContext.Provider value={userData}>
      <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', padding: '20px' }}>
        <h1>Application Root</h1>
        {/* ProfilePage and its children will now access userData via Context */}
        <ProfilePage />
      </div>
    </UserContext.Provider>
  );
}

// Export the App component.
export default App;
