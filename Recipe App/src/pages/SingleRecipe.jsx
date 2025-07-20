import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { recipecontext } from "../context/RecipeContext";
// import { useForm } from "react-hook-form";
// import { toast } from "react-toastify";


const SingleRecipe = () => {
    const { data, setdata } = useContext(recipecontext);
    const navigate = useNavigate();
    const params = useParams();
    const recipe = data.find((recipe) => params.id == recipe.id);
    const handleClick = () => {
        navigate(`/recipes/updater/${recipe.id}`); 
    };


    console.log(recipe)


    return recipe ? (
        <div className="w-full flex flex-col items-center">
            <div className="left w-4/5 p-2">
                <div className="flex flex-row justify-between pb-8">
                    <h1 className="text-5xl font-normal">{recipe.title}</h1>
                    <h1 className="flex items-end align-bottom text-[#FF4343]">~ {recipe.chef}</h1>
                </div>
                <div className="flex flex-row gap-5">
                    <img className="h-[50vh] rounded-2xl" src={recipe.image} alt="" />
                    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-sm">
                        {/* Instructions Section */}
                        <div className="mb-8">
                            <div className="flex items-center mb-4">
                                <div className="w-1 h-8 bg-[#FFBB00] mr-4"></div>
                                <h2 className="text-2xl font-semibold text-gray-800 uppercase tracking-wide">
                                    Instructions
                                </h2>
                            </div>
                            <div className="pl-5">
                                <p className="text-lg font-[500] leading-relaxed text-gray-700 whitespace-pre-line">
                                    {recipe.desc}
                                </p>
                            </div>
                        </div>

                        {/* Ingredients Section */}
                        <div className="mb-8">
                            <div className="flex items-center mb-4">
                                <div className="w-1 h-8 bg-red-500 mr-4"></div>
                                <h2 className="text-2xl font-semibold text-gray-800 uppercase tracking-wide">
                                    Ingredients
                                </h2>
                            </div>
                            <div className="pl-5">
                                <p className="text-lg font-[500] leading-relaxed text-gray-700 whitespace-pre-line">
                                    {recipe.
ingredients
}
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="p-2 w-4/5 flex justify-end">
            <button onClick={handleClick} className="pointerpointer-events-auto mt-5 block bg-blue-500 text-white px-4 py-2 rounded duration-150 hover:bg-blue-800">
                Update Recipe
            </button>
                
            </div>
        </div>
    ) : (
        "Loading..."
    );
};

export default SingleRecipe;
