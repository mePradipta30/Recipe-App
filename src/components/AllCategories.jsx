import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = () => {
    setLoading(true);
    setError(null);

    fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      .then((res) => res.json())
      .then((data) => {
        if (data.categories) {
          setCategories(data.categories);
        } else {
          setError('No categories found.');
        }
      })
      .catch(() => setError('Error fetching categories.'))
      .finally(() => setLoading(false));
  };

  if (loading) return <div className="text-center text-white py-10">Loading...</div>;
  if (error) return <div className="text-center text-red-500 py-10">{error}</div>;

  return (
    <div className="container mx-auto px-4 py-10 text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">Meal Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div
            key={category.idCategory}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={category.strCategoryThumb}
              alt={category.strCategory}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 text-center">
              <h2 className="text-lg font-bold mb-2">{category.strCategory}</h2>
              <p className="text-sm text-gray-400 mb-4">
                {category.strCategoryDescription.slice(0, 80)}...
              </p>
              <Link
                to={`/recipes/${category.strCategory}`}
                className="inline-block bg-green-700 text-white px-4 py-2 rounded-md text-sm"
              >
                View Recipes
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCategories;