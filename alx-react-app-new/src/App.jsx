// Import necessary React hooks and assets.
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// Import all previously created components.
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
// Import the new Counter component.
import Counter from './components/Counter';

// Define the main App functional component.
function App() {
  // The 'count' state from the default Vite template is now redundant as we have a dedicated Counter component.
  // We can remove it or keep it if other parts of the app still use it, but for this exercise,
  // the focus is on the new Counter component.
  const [appCount, setAppCount] = useState(0); // Renamed to avoid conflict, if kept.

  return (
    // Using a React Fragment to group multiple elements.
    <>
      {/* Render the Header component. */}
      <Header />

      {/* Render the MainContent component. */}
      <MainContent />

      {/* Render the Counter component here. */}
      <Counter />

      {/* Render UserProfile components. */}
      <UserProfile
        name="Alice"
        age={25}
        bio="Loves hiking and photography"
      />
      <UserProfile
        name="Bob"
        age={30}
        bio="Software engineer and avid reader"
      />
      <UserProfile
        name="Charlie"
        age={22}
        bio="Student passionate about coding and music"
      />

      {/* Render the Footer component. */}
      <Footer />

      {/* Default Vite/React template elements (can be kept or removed based on preference). */}
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
