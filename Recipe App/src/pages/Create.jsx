import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipecontext } from "../context/RecipeContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const navigate = useNavigate();
    const { data, setdata } = useContext(recipecontext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const SubmitHandler = (recipe) => {
        recipe.id = nanoid();
        const copydata = [...data];
        copydata.push(recipe);
        setdata(copydata);
        localStorage.setItem("recipes",JSON.stringify(copydata))
        // setdata([...data, recipe]);
        toast.success("New recipe created!");
        reset();
        navigate("/recipes");
    };

    return (
        <div className="min-h-screen py-8 px-4">
            <div className="max-w-2xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Create New Recipe</h1>
                    <p className="text-gray-600">Share your culinary masterpiece with the world</p>
                </div>

                {/* Form Card */}
                <div className="bg-white rounded-xl shadow-sm p-8">
                    <form onSubmit={handleSubmit(SubmitHandler)} className="space-y-6">
                        
                        {/* Image URL */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Recipe Image</label>
                            <input
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400"
                                {...register("image", { 
                                    required: "Image URL is required",
                                    pattern: {
                                        value: /^https?:\/\/.+\..+/,
                                        message: "Please enter a valid URL"
                                    }
                                })}
                                type="url"
                                placeholder="https://example.com/recipe-image.jpg"
                            />
                            {errors.image && (
                                <small className="text-red-500 text-sm flex items-center">
                                    ⚠️ {errors.image.message}
                                </small>
                            )}
                        </div>

                        {/* Title and Chef */}
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Recipe Title</label>
                                <input
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400"
                                    {...register("title", { 
                                        required: "Recipe title is required",
                                        minLength: {
                                            value: 3,
                                            message: "Title must be at least 3 characters"
                                        }
                                    })}
                                    type="text"
                                    placeholder="e.g., Chocolate Chip Cookies"
                                />
                                {errors.title && (
                                    <small className="text-red-500 text-sm">⚠️ {errors.title.message}</small>
                                )}
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Chef Name</label>
                                <input
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400"
                                    {...register("chef", { 
                                        required: "Chef name is required" 
                                    })}
                                    type="text"
                                    placeholder="e.g., Gordon Ramsay"
                                />
                                {errors.chef && (
                                    <small className="text-red-500 text-sm">⚠️ {errors.chef.message}</small>
                                )}
                            </div>
                        </div>

                        {/* Category */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Category</label>
                            <select
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
                                {...register("category", { 
                                    required: "Please select a category" 
                                })}
                            >
                                <option value="">Select a category</option>
                                <option value="breakfast">🍳 Breakfast</option>
                                <option value="lunch">🥪 Lunch</option>
                                <option value="dinner">🍽️ Dinner</option>
                                <option value="supper">🌙 Supper</option>
                                <option value="dessert">🍰 Dessert</option>
                                <option value="snacks">🍿 Snacks</option>
                            </select>
                            {errors.category && (
                                <small className="text-red-500 text-sm">⚠️ {errors.category.message}</small>
                            )}
                        </div>

                        {/* Description */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Recipe Description</label>
                            <textarea
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400 resize-none"
                                {...register("desc", { 
                                    required: "Description is required",
                                    minLength: {
                                        value: 10,
                                        message: "Description must be at least 10 characters"
                                    }
                                })}
                                rows="4"
                                placeholder="Describe your recipe... What makes it special?"
                            />
                            {errors.desc && (
                                <small className="text-red-500 text-sm">⚠️ {errors.desc.message}</small>
                            )}
                        </div>

                        {/* Ingredients */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">
                                Ingredients
                                <span className="text-xs text-gray-500 ml-2">(separate each ingredient with a comma)</span>
                            </label>
                            <textarea
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400 resize-none"
                                {...register("ingr", { 
                                    required: "Ingredients are required" 
                                })}
                                rows="5"
                                placeholder="2 cups flour, 1 cup sugar, 3 eggs, 1 tsp vanilla extract..."
                            />
                            {errors.ingr && (
                                <small className="text-red-500 text-sm">⚠️ {errors.ingr.message}</small>
                            )}
                        </div>

                        {/* Instructions */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">
                                Instructions
                                <span className="text-xs text-gray-500 ml-2">(separate each step with a comma)</span>
                            </label>
                            <textarea
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400 resize-none"
                                {...register("inst", { 
                                    required: "Instructions are required" 
                                })}
                                rows="6"
                                placeholder="Preheat oven to 350°F, Mix dry ingredients in a bowl, Add wet ingredients and stir..."
                            />
                            {errors.inst && (
                                <small className="text-red-500 text-sm">⚠️ {errors.inst.message}</small>
                            )}
                        </div>

                        {/* Submit Button */}
                        <div className="pt-4">
                            <button 
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 focus:ring-4 focus:ring-blue-200 shadow-lg"
                            >
                                🍴 Create Recipe
                            </button>
                        </div>
                    </form>
                </div>

                {/* Help Text */}
                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-500">
                        💡 <strong>Tip:</strong> Use high-quality images and detailed instructions for the best results!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Create;