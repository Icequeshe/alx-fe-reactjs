import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow">
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold text-center text-blue-600">
            Recipe Sharing Platform 🍲
          </h1>
        </div>
      </header>

      <main>
        <HomePage />
      </main>

      <footer className="bg-white shadow mt-6">
        <div className="container mx-auto p-4 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Recipe Sharing Platform. All rights
          reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
