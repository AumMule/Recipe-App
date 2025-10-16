import { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";

const Recipes = () => {
    const { data } = useContext(recipecontext);

    return (
        // Main container for centering, padding, and max-width
        <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8 text-center">
                Our Delicious Recipes
            </h1>

            {data && data.length > 0 ? (
                // Responsive grid layout is better than flex-wrap for card galleries
                // It provides control over columns and consistent spacing with 'gap'.
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
                    {data.map((recipe) => (
                        <RecipeCard key={recipe.id} recipe={recipe} />
                    ))}
                </div>
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