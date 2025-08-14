import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";
import AddRecipeForm from "./components/AddRecipeForm";

function App() {
  return (
    <Router>
      {/* Simple Navigation */}
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <nav className="max-w-6xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-lg font-bold hover:underline">
            Recipe Sharing Platform
          </Link>
          <div className="space-x-4">
            <Link
              to="/"
              className="px-3 py-2 rounded hover:bg-blue-500 transition"
            >
              Home
            </Link>
            <Link
              to="/add"
              className="px-3 py-2 bg-green-500 rounded hover:bg-green-600 transition"
            >
              Add Recipe
            </Link>
          </div>
        </nav>
      </header>

      {/* Page Content */}
      <main className="max-w-6xl mx-auto p-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/add" element={<AddRecipeForm />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
