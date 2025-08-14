import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";

function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <header className="bg-white shadow">
          <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold text-center text-blue-600">
              Recipe Sharing Platform 🍲
            </h1>
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
          </Routes>
        </main>

        <footer className="bg-white shadow mt-6">
          <div className="container mx-auto p-4 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Recipe Sharing Platform. All rights
            reserved.
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
