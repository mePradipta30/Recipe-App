import React, { useEffect, useState } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import { useParams } from 'react-router-dom';
import SearchBar from './SearchBar';
import Button from './Button';
import RecipeCards from './RecipeCards';

const Recipes = () => {
    const [allRecipes, setAllRecipes] = useState([]); 
    const [recipes, setRecipes] = useState([]); 
    const [query, setQuery] = useState('vegan');
    const [limit, setLimit] = useState(30);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { type } = useParams();

 
    useEffect(() => {
        const searchQuery = type || query;
        setQuery(searchQuery);
        fetchRecipe(searchQuery);
    }, [type]);

   
    useEffect(() => {
        setRecipes(allRecipes.slice(0, limit));
    }, [allRecipes, limit]);

    const handleChange = (e) => setQuery(e.target.value);

  
    const handleSearchRecipe = (e) => {
        e.preventDefault();
        fetchRecipe(query);
    };

   
    const showMore = () => {
        setLimit((prev) => prev + 10);
    };

  
    const fetchRecipe = (searchQuery) => {
        setLoading(true);
        setError(null);
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.meals) {
                    setAllRecipes(data.meals); 
                } else {
                    setAllRecipes([]);
                    setError('No recipes found for your search query.');
                }
            })
            .catch(() => setError('Error fetching recipes, please try again later.'))
            .finally(() => setLoading(false));
    };

    return (
        <div className="w-full">
            {/* Search Bar */}
            <div className="w-full flex items-center justify-center pt-10 pb-5 px-0 md:px-10">
                <form className="w-full" onSubmit={handleSearchRecipe}>
                    <SearchBar
                        placeholder="eg. Cake, Vegan, Chicken"
                        handleInputChange={handleChange}
                        rightIcon={<BiSearchAlt2 className="text-gray-600" onClick={handleSearchRecipe} />}
                    />
                </form>
            </div>

            {/* Loading/Error */}
            {loading && <div className="text-center text-white py-10">Loading...</div>}
            {error && <div className="text-center text-red-500 py-10">{error}</div>}

            {/* Recipes */}
            {recipes.length > 0 ? (
                <>
                    <div className="w-full flex flex-wrap justify-center gap-10 px-0 lg:px-10 py-10">
                        {recipes.map((item, index) => (
                            <RecipeCards recipe={item} key={index} />
                        ))}
                    </div>
                    {/* Show More Button */}
                    {allRecipes.length > recipes.length && (
                        <div className="flex w-full items-center justify-center py-10">
                            <Button
                                title="Show More"
                                containerStyle="bg-green-800 text-white px-3 py-1 rounded-full text-sm"
                                handleClick={showMore}
                            />
                        </div>
                    )}
                </>
            ) : (
                !loading && (
                    <div className="text-white w-full items-center justify-center py-10">
                        <p className="text-center">No Recipe Found</p>
                    </div>
                )
            )}
        </div>
    );
};

export default Recipes;
