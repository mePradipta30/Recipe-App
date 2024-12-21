import React, { useEffect, useState } from 'react'
import RecipeCards from '../components/RecipeCards';
import { Link } from 'react-router-dom';
import image from '../images/404.png'

const FavoritesPage = () => {
  

  
   
    const favourites = JSON.parse(localStorage.getItem('favourites')) || [];
    


  const toggleFavorite = (recipe) => {
    const updatedFavorites = favourites.filter((fav) => fav !== recipe.strMeal);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="container mx-auto px-4 py-10 text-white">
      <h1 className="text-3xl font-bold mb-6 text-center mt-[70px]">Your Favorites</h1>
      {favourites.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favourites.map((recipe) => (
            <RecipeCards
              recipe={recipe}
              key={recipe.strMeal}
              toggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      ) : (
        <div className="h-[80vh] flex flex-col items-center gap-4">
          <img src={image} alt="" className="h-3/4" />

          <Link to={"/"}>
            <span className="font-bold hover:text-[#EE97BD]">
              Back to Home
            </span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
