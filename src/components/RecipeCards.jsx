import React from 'react'
import { Link } from 'react-router-dom';


const RecipeCards = ({ recipe }) => {
    const {idMeal,strMeal,strMealThumb} = recipe
    console.log(recipe);
    
    return (
        <Link to={`/recipe/${idMeal}`} className=''>
        <div className=" bg-slate-900 shadow-lg rounded-lg overflow-hidden flex flex-col items-center justify-center  w-64">
            <img 
                src={recipe.strMealThumb} 
                alt={recipe.strMeal} 
                className="rounded-lg h-[200px] md:h-[150px] w-full"
            />
            <div className="p-4">
                <h3 className="font-bold text-xl text-white">{recipe.strMeal}</h3>
                <p className="text-green-600 text-sm mt-2 font-bold">{recipe.strArea} - {recipe.strCategory}</p>
                <p className="text-green-500 text-sm mt-2">{recipe.strInstructions.slice(0, 100)}...</p>
                <a 
                    href={recipe.strSource} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-300 mt-4 inline-block text-sm"
                >
                    View Recipe
                </a>
            </div>
        </div>
        </Link>
    );
}

export default RecipeCards
