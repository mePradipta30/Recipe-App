import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RecipeCards from './RecipeCards';

const RecipesByCategory = () => {
  const { category } = useParams(); // Extract category from the URL
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRecipes(category);
  }, [category]);

  const fetchRecipes = (category) => {
    setLoading(true);
    setError(null);

    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.meals) {
          setRecipes(data.meals);
        } else {
          setError(`No recipes found for category "${category}".`);
        }
      })
      .catch(() => setError('Error fetching recipes.'))
      .finally(() => setLoading(false));
  };

  if (loading) return <div className="text-center text-white py-10">Loading...</div>;
  if (error) return <div className="text-center text-red-500 py-10">{error}</div>;

  return (
    <div className="container mx-auto px-4 py-10 text-white ">
      <h1 className="text-3xl font-bold mb-6 text-center mt-[70px] ">Recipes in {category}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recipes.map((recipe) => (
          <RecipeCards recipe={recipe} key={recipe.idMeal} />
        ))}
      </div>
    </div>
  );
};

export default RecipesByCategory;
