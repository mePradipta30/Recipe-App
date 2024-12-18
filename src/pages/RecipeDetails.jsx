import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetails = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchRecipeDetail();
    }, [id]);

    const fetchRecipeDetail = () => {
        setLoading(true);
        setError(null);

        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.meals) {
                    setRecipe(data.meals[0]);
                } else {
                    setError('Recipe not found.');
                }
            })
            .catch(() => setError('Error fetching recipe details.'))
            .finally(() => setLoading(false));
    };

    if (loading) return <div className="text-center text-white py-10">Loading...</div>;
    if (error) return <div className="text-center text-red-500 py-10">{error}</div>;

    return recipe ? (
        <div className="container mx-auto px-4 py-10 text-gray-900">
            {/* Rounded Recipe Image */}
            <div className="flex flex-col items-center m-8">
                <img
                    src={recipe.strMealThumb}
                    alt={recipe.strMeal}
                    className="w-48 h-48 rounded-full shadow-lg object-cover mt-[60px] mb-4"
                />
                {/* Recipe Name */}
                <h1 className="text-2xl font-bold text-white">{recipe.strMeal}</h1>
            </div>

            {/* Ingredients Section */}
            <div className='w-full flex gap-4 '>
            <div className="w-1/2 text-black border-2 bg-emerald-300 border-emerald-900 p-4 rounded-lg mb-6 shadow-md">
                <h2 className="text-lg font-bold mb-4 text-gray-900">Ingredients</h2>
                <ul className="list-disc pl-6 text-gray-900">
                    {Array.from({ length: 20 }).map((_, i) => {
                        const ingredient = recipe[`strIngredient${i + 1}`];
                        return (
                            ingredient && (
                                <li key={i} className="mb-2">
                                    {ingredient}
                                </li>
                            )
                        );
                    })}
                </ul>
            </div>

            {/* Measures Section */}
            <div className="w-1/2 bg-emerald-500 border-2 border-emerald-800 text-black p-4 rounded-lg mb-6 shadow-md">
                <h2 className="text-lg font-bold mb-4 text-gray-950">Measures for the Ingredients</h2>
                <ul className="list-disc pl-6 text-gray-900">
                    {Array.from({ length: 20 }).map((_, i) => {
                        const measure = recipe[`strMeasure${i + 1}`];
                        return (
                            measure && (
                                <li key={i} className="mb-2">
                                    {measure}
                                </li>
                            )
                        );
                    })}
                </ul>
            </div>
            </div>

            {/* Instructions Section */}
            <div className="bg-emerald-200 border-2 border-gray-100 p-4 rounded-lg mb-6 shadow-md">
                <h2 className="text-lg font-bold mb-4 text-gray-900">Instructions</h2>
                <p className="leading-relaxed text-gray-800">{recipe.strInstructions}</p>
            </div>

            {/* YouTube Link */}
            {recipe.strYoutube && (
                <div className="mb-8 text-center">
                    <h2 className="text-xl m-7 font-bold mb-4 text-gray-500 hover:text-gray-700 ">YouTube Link</h2>
                    <a
                        href={recipe.strYoutube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-red-600 text-white px-4 py-2 rounded-lg shadow hover:bg-red-700 transition"
                    >
                        Watch on YouTube
                    </a>
                </div>
            )}
        </div>
    ) : null;
};

export default RecipeDetails;
