import React from 'react';
// Import necessary components from react-router-dom for routing.
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import the Navbar component.
import Navbar from './components/Navbar';
// Import the Footer component.
import Footer from './components/Footer';

// Import all page components.
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './components/Contact';

// Define the main App functional component.
function App() {
  return (
    // BrowserRouter enables client-side routing.
    <BrowserRouter>
      {/* Navbar will appear on all pages as it's outside the Routes. */}
      <Navbar />

      {/* Main content area that will change based on the route. */}
      {/* Apply a flexbox style to ensure content pushes footer down */}
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {/* Routes defines the different paths and their corresponding components. */}
        <Routes>
          {/* Route for the Home page (default path '/'). */}
          <Route path="/" element={<Home />} />
          {/* Route for the About page. */}
          <Route path="/about" element={<About />} />
          {/* Route for the Services page. */}
          <Route path="/services" element={<Services />} />
          {/* Route for the Contact page. */}
          <Route path="/contact" element={<Contact />} />
          {/* Optional: A catch-all route for 404 Not Found pages */}
          <Route path="*" element={
            <div style={{ textAlign: 'center', padding: '50px', fontSize: '2em', color: '#dc3545', flexGrow: 1 }}>
              <h1>404 - Page Not Found</h1>
              <p>The page you are looking for does not exist.</p>
            </div>
          } />
        </Routes>
        {/* Footer will also appear on all pages. */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
