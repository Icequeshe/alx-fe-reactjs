import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import recipesData from "../data.json";

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = recipesData.find(
      (item) => item.id === parseInt(id, 10)
    );
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return (
      <div className="container mx-auto p-6">
        <p className="text-center text-gray-500">Recipe not found.</p>
        <div className="text-center mt-4">
          <Link
            to="/"
            className="text-blue-500 hover:underline"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h2 className="text-3xl font-bold mb-4">{recipe.title}</h2>

          {/* Ingredients */}
          {recipe.ingredients && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Ingredients</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Instructions */}
          {recipe.instructions && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Instructions</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                {recipe.instructions.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
          )}

          <Link
            to="/"
            className="inline-block mt-4 text-blue-500 hover:underline"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
