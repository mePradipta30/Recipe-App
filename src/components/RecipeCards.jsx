import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCards = ({ recipe }) => {
  if (!recipe) {
    return null;
  }

  const { idMeal, strMeal, strMealThumb } = recipe;

  return (
    <div className="bg-slate-900 shadow-lg rounded-lg overflow-hidden flex flex-col items-center justify-center  w-64">
      <img
        src={strMealThumb}
        alt={strMeal}
        className="rounded-lg h-[200px] md:h-[150px] w-full"
      />
      <div className="p-4 ">
        <h2 className="font-bold text-xl text-white">{strMeal}</h2>
        <Link
          to={`/recipe/${idMeal}`}
          className="text-blue-300 mt-4 inline-block text-sm"
        >
          View Recipe
        </Link>
      </div>
    </div>
  );
};

export default RecipeCards;
