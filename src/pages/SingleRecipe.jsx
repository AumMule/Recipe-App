import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { recipecontext } from "../context/RecipeContext";

const SingleRecipe = () => {
    const { data } = useContext(recipecontext);
    const { id } = useParams(); // Destructuring for cleaner access
    const recipe = data.find((r) => r.id == id);
    const [showFullInstructions, setShowFullInstructions] = useState(false);

    const truncateText = (text, maxWords) => {
        const words = text.split(' ');
        if (words.length <= maxWords) return text;
        return words.slice(0, maxWords).join(' ') + '...';
    };

    const instructions = recipe?.instructions || '';
    const isLongInstructions = instructions.split(' ').length > 50;
    const displayedInstructions = showFullInstructions ? instructions : truncateText(instructions, 50);

    return recipe ? (
        // Main container: Centered with a max-width and responsive padding
        <div className="w-full max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 animate-fadeIn">
            {/* Header section with responsive typography */}
            <div className="mb-8">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800">{recipe.title}</h1>
                <p className="text-xl text-red-500 mt-2">~ {recipe.chef}</p>
            </div>

            {/* Content layout: Stacks vertically on mobile, row on large screens */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                {/* Image container: Takes a fraction of the width on large screens */}
                <div className="w-full lg:w-2/5">
                    <img
                        className="w-full h-auto max-h-[70vh] object-cover rounded-2xl shadow-lg"
                        src={recipe.image}
                        alt={recipe.title}
                    />
                </div>

                {/* Details container: Takes remaining width on large screens */}
                <div className="w-full lg:w-3/5">
                    {/* The white card now has a minimum height to keep its size constant */}
                    <div className="w-full p-6 bg-white rounded-lg shadow-md min-h-[400px] flex flex-col">
                        
                        {/* Instructions */}
                        <div className="mb-8">
                            <div className="flex items-center mb-4">
                                <div className="w-1 h-8 bg-[#FFBB00] mr-4"></div>
                                <h2 className="text-2xl font-semibold text-gray-800 uppercase tracking-wide">
                                    Instructions
                                </h2>
                            </div>
                            <div className="pl-5">
                                <p className="text-lg font-medium leading-relaxed text-gray-700 whitespace-pre-line">
                                    {displayedInstructions}
                                </p>
                                {isLongInstructions && (
                                    <button
                                        onClick={() => setShowFullInstructions(!showFullInstructions)}
                                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 font-medium"
                                    >
                                        {showFullInstructions ? 'Show Less' : 'Show More'}
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Ingredients */}
                        <div>
                            <div className="flex items-center mb-4">
                                <div className="w-1 h-8 bg-red-500 mr-4"></div>
                                <h2 className="text-2xl font-semibold text-gray-800 uppercase tracking-wide">
                                    Ingredients
                                </h2>
                            </div>
                            <div className="pl-5">
                                <ul className="list-disc pl-6 text-lg font-medium leading-relaxed text-gray-700 space-y-2">
                                    {Array.isArray(recipe.ingredients) && recipe.ingredients.length > 0 ? (
                                        recipe.ingredients.slice(0, 13).map((item, index) => <li key={index}>{item}</li>)
                                    ) : (
                                        <li className="list-none text-gray-500 italic">No ingredients available</li>
                                    )}
                                    {recipe.ingredients && recipe.ingredients.length > 13 && (
                                        <li className="list-none text-gray-500 italic">and {recipe.ingredients.length - 13} more...</li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <div className="text-center p-10 text-xl">Loading...</div>
    );
};

export default SingleRecipe;