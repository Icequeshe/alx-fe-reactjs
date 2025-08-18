import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { postId } = useParams();

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">Blog Post ID: {postId}</h2>
      <p>This is a dynamically routed blog post page.</p>
    </div>
  );
}
