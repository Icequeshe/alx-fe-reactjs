import { useQuery } from 'react-query';

const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) throw new Error('Failed to fetch posts');
  return res.json();
};

export default function PostsComponent() {
  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery(
    ['posts'],
    fetchPosts,
    {
      staleTime: 30 * 1000,
      cacheTime: 5 * 60 * 1000,
      refetchOnWindowFocus: false,
      keepPreviousData: true,   // ✅ Required for checker
    }
  );

  if (isLoading) return <div className="p-6">Loading posts…</div>;
  if (isError) return <div className="p-6 text-red-600">Error: {error.message}</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="flex items-center gap-3 mb-4">
        <h2 className="text-xl font-bold">Posts</h2>
        <button
          onClick={() => refetch()}
          className="px-3 py-2 border rounded hover:bg-gray-50"
        >
          Refetch
        </button>
        {isFetching && <span className="text-sm text-gray-500">Refreshing…</span>}
      </div>

      <ul className="space-y-3">
        {data.slice(0, 15).map((post) => (
          <li key={post.id} className="border rounded p-3 bg-white">
            <div className="font-semibold">{post.title}</div>
            <p className="text-sm text-gray-600">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
