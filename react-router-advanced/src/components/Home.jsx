import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Home Page</h2>
      <nav className="flex gap-4">
        <Link to="/about">About</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/blog/101">Blog Post 101</Link>
      </nav>
    </div>
  );
}
