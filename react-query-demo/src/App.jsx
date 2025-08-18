import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import PostsComponent from './components/PostsComponent';

const queryClient = new QueryClient();

function About() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-xl font-bold mb-2">About</h2>
      <p className="text-gray-700 text-sm">
        Navigate back to Posts to see cached data load instantly if it’s still fresh.
      </p>
    </div>
  );
}

export default function App() {
  const [route, setRoute] = useState('posts');

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-100">
        <header className="p-4 border-b bg-white">
          <nav className="flex gap-2">
            <button
              onClick={() => setRoute('posts')}
              className={`px-3 py-2 rounded border ${route === 'posts' ? 'bg-gray-50' : ''}`}
            >
              Posts
            </button>
            <button
              onClick={() => setRoute('about')}
              className={`px-3 py-2 rounded border ${route === 'about' ? 'bg-gray-50' : ''}`}
            >
              About
            </button>
          </nav>
        </header>

        {route === 'posts' ? <PostsComponent /> : <About />}
      </div>
    </QueryClientProvider>
  );
}
