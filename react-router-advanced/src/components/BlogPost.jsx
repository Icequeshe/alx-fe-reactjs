import { useParams } from "react-router-dom";

function BlogPost() {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Blog Post {id}</h2>
      <p className="mt-4">
        This is the content for blog post with ID: <strong>{id}</strong>.
      </p>
    </div>
  );
}

export default BlogPost;
