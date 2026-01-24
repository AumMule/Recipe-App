import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { recipecontext } from "../context/RecipeContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const RecipeUpdater = () => {
  const { data, setdata } = useContext(recipecontext);
  const navigate = useNavigate();
  const params = useParams();
  const [isAuthorized, setIsAuthorized] = useState(false);

  const recipe = data.find((r) => r.id == params.id);

  useEffect(() => {
    // Check if user is authorized to update recipes
    const profile = localStorage.getItem("userProfile");
    if (profile) {
      try {
        const { username, chiefName } = JSON.parse(profile);
        if (username === "name" && chiefName === "name") {
          setIsAuthorized(true);
        } else {
          setIsAuthorized(false);
          toast.error("You don't have permission to update recipes!");
        }
      } catch (e) {
        setIsAuthorized(false);
        toast.error("Invalid profile data. Please set your profile first.");
      }
    } else {
      setIsAuthorized(false);
      toast.error("Please set your profile to update recipes!");
    }
  }, []);

  const {
    register,
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      title: recipe?.title || "",
      chef: recipe?.chef || "",
      image: recipe?.image || "",
      inst: recipe?.inst || "",
      desc: recipe?.desc || "",
      ingr: recipe?.ingr || "",
      category: recipe?.category || "breakfast",
    },
  });

  const SubmitHandler = (updatedRecipe) => {
    if (!isAuthorized) {
      toast.error("You don't have permission to update recipes!");
      return;
    }

    const index = data.findIndex((r) => r.id == params.id);


    const copydata = [...data];
    copydata.push(recipe);
    setdata(copydata);

    copydata[index] = { ...copydata[index], ...updatedRecipe };

    localStorage.setItem("recipes", JSON.stringify(copydata))
    navigate("/recipes");
    toast.success("Recipe updated!");
  };

  const DeleteHandler = () => {
    const filterdata = data.filter((r) => r.id != params.id);
    setdata(filterdata);
    localStorage.setItem("recipes", JSON.stringify(filterdata))
    toast.success("Recipe deleted!");
    navigate("/recipes");
  };

  return (
    <div className="min-h-screen py-6 px-4">
      <div className="max-w-xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm  p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Edit Recipe
          </h1>

          {!isAuthorized && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 text-sm">
                You don't have permission to update recipes. Only users with username and chief name as "name" can update recipes.
              </p>
            </div>
          )}

          <form className="space-y-5" onSubmit={handleSubmit(SubmitHandler)}>

            <div className="space-y-4">
              <input
                className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all placeholder-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
                {...register("title")}
                type="text"
                placeholder="🍴 Recipe Title"
                disabled={!isAuthorized}
              />

              <input
                className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all placeholder-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
                {...register("chef")}
                type="text"
                placeholder="👨‍🍳 Chef Name"
                disabled={!isAuthorized}
              />

              <input
                className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all placeholder-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
                {...register("image")}
                type="url"
                placeholder="📸 Image URL"
                disabled={!isAuthorized}
              />

              <select
                className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                {...register("category")}
                disabled={!isAuthorized}
              >
                <option value="">🗂️ Select Category</option>
                <option value="breakfast">🌅 Breakfast</option>
                <option value="lunch">☀️ Lunch</option>
                <option value="dinner">🌆 Dinner</option>
                <option value="supper">🌙 Supper</option>
              </select>

              <textarea
                className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all placeholder-gray-500 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                {...register("desc")}
                rows="3"
                placeholder="📝 Recipe description..."
                disabled={!isAuthorized}
              />

              <textarea
                className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all placeholder-gray-500 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                {...register("ingr")}
                rows="4"
                placeholder="🥕 Ingredients (comma separated)..."
                disabled={!isAuthorized}
              />

              <textarea
                className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all placeholder-gray-500 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                {...register("inst")}
                rows="5"
                placeholder="👨‍🍳 Instructions (comma separated)..."
                disabled={!isAuthorized}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button
                type="submit"
                disabled={!isAuthorized}
                className="sm:flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-600"
              >
                Update Recipe
              </button>

              <button
                type="button"
                onClick={DeleteHandler}
                disabled={!isAuthorized}
                className="sm:px-6 bg-red-600 hover:bg-red-700 text-white font-medium py-3 rounded-lg transition-colors duration-200 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RecipeUpdater;
