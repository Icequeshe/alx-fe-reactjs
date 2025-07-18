// Import necessary React hooks.
import { useState } from 'react';
// Import the UserContext we created.
import UserContext from './components/UserContext';
// Import the UserProfile component (now directly consuming context).
import UserProfile from './components/UserProfile';

// Import other components from previous tasks (Header, MainContent, Footer, Counter).
// These are kept for continuity but are not directly involved in this context refactoring.
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Counter from './components/Counter';

// Define the main App functional component.
function App() {
  // Define the user data that will be provided through the context.
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  // State for the app-level counter (kept for context from previous tasks).
  const [appCount, setAppCount] = useState(0);

  return (
    // Using a React Fragment to group multiple elements.
    <>
      {/* Render the Header component. */}
      <Header />

      {/* Render the MainContent component. */}
      <MainContent />

      {/* Render the Counter component. */}
      <Counter />

      {/* UserContext.Provider makes the 'value' prop (userData) available to all components
          rendered within its tree, including UserProfile. */}
      <UserContext.Provider value={userData}>
        <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', padding: '20px' }}>
          <h1>Application Root</h1>
          {/* UserProfile will now directly consume userData from the context */}
          <UserProfile />
        </div>
      </UserContext.Provider>

      {/* Render the Footer component. */}
      <Footer />

      {/* Default Vite/React template elements (kept for context). */}
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 style={{ textAlign: 'center' }}>Vite + React</h1>
      <div className="card" style={{ textAlign: 'center', margin: '0 auto', maxWidth: '300px' }}>
        <button onClick={() => setAppCount((appCount) => appCount + 1)}>
          App count is {appCount}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs" style={{ textAlign: 'center', marginTop: '20px' }}>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

// Export the App component.
export default App;
