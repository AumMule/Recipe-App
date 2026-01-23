import { useContext, useState } from "react";
import { recipecontext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";

const Recipes = () => {
    const { data, loadMoreRecipes, isLoading } = useContext(recipecontext);

    return (
        // Main container for centering, padding, and max-width
        <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8 text-center">
                Our Delicious Recipes
            </h1>

            {data && data.length > 0 ? (
                <>
                    {/* Responsive grid layout is better than flex-wrap for card galleries */}
                    {/* It provides control over columns and consistent spacing with 'gap'. */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 animate-fadeIn">
                        {data.map((recipe) => (
                            <RecipeCard key={recipe.id} recipe={recipe} />
                        ))}
                    </div>

                    {/* Load More Button */}
                    <div className="flex justify-center mt-8">
                        <button
                            onClick={loadMoreRecipes}
                            disabled={isLoading}
                            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                        >
                            {isLoading ? (
                                <div className="flex items-center space-x-2">
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin-custom"></div>
                                    <span>Loading...</span>
                                </div>
                            ) : (
                                "Load More Recipes"
                            )}
                        </button>
                    </div>
                </>
            ) : (
                // A styled message for when there are no recipes
                <p className="text-center text-xl text-gray-500 mt-10">
                    No recipes found!
                </p>
            )}
        </div>
    );
};

export default Recipes;