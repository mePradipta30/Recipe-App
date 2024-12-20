import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { includes } from 'lodash';
import { Heart,HeartPulse } from 'lucide-react';
import { useState ,useEffect} from 'react';

const RecipeCards = ({ recipe ,toggleFavorite}) => {
  if (!recipe) {
    return null;
  }

  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const favourites = JSON.parse(localStorage.getItem("favourites")) || [];
    setIsFav(favourites.some((fav) => fav === recipe.strMeal));
  }, [recipe.strMeal]);

  const addToFavs = () => {
    let favourites = JSON.parse(localStorage.getItem("favourites")) || [];
    const isPresent = favourites.some((fav) => fav === recipe.strMeal);

    if (isPresent) {
      favourites = favourites.filter((fav) => fav !== recipe.strMeal);
      setIsFav(false);
      
    } else {
      favourites.push(recipe.strMeal);
      setIsFav(true);
    }

    localStorage.setItem("favourites", JSON.stringify(favourites));
  };

  const { idMeal, strMeal, strMealThumb } = recipe;

  return (
    <div className="bg-slate-900 shadow-lg rounded-lg overflow-hidden flex flex-col items-center justify-center w-64">
      <img
        src={strMealThumb}
        alt={strMeal}
        className="rounded-lg h-[200px] md:h-[150px] w-full"
      />
      <div className="p-4">
        <h2 className="font-bold text-xl text-white">{strMeal}</h2>
        <div className="flex justify-between items-center">
          <Link
            to={`/recipe/${idMeal}`}
            className="text-blue-300 mt-4 inline-block text-sm"
          >
            View Recipe
          </Link>
          <button
            onClick={(e) => {e.preventDefault();
                addToFavs()
                toggleFavorite()
            }}
            
          >
            {isFav && (<Heart size={20} className='fill-red-500 text-red-500' />)}
            {!isFav && (<Heart size={20} className='hover:fill-red-500 hover:text-red-500'/>)}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCards;
