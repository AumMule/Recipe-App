import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { recipecontext } from "../context/RecipeContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const RecipeUpdater = () => {
  const { data, setdata } = useContext(recipecontext);
  const navigate = useNavigate();
  const params = useParams();

  const recipe = data.find((r) => r.id == params.id);

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
    const index = data.findIndex((r) => r.id == params.id);

    
    const copydata = [...data];
    copydata.push(recipe);
    setdata(copydata);

    copydata[index] = { ...copydata[index], ...updatedRecipe };
    
    localStorage.setItem("recipes",JSON.stringify(copydata))
    navigate("/recipes");
    toast.success("Recipe updated!");
  };
  
  const DeleteHandler = () => {
    const filterdata = data.filter((r) => r.id != params.id);
    setdata(filterdata);
    localStorage.setItem("recipes",JSON.stringify(filterdata))
    toast.success("Recipe deleted!");
    navigate("/recipes");
  };

  return (
    <div className="min-h-screen  py-6 px-4">
  <div className="max-w-xl mx-auto">
    <div className="bg-white rounded-xl shadow-sm  p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Edit Recipe
      </h1>
      
      <form className="space-y-5" onSubmit={handleSubmit(SubmitHandler)}>
        
        <div className="space-y-4">
          <input
            className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all placeholder-gray-500"
            {...register("title")}
            type="text"
            placeholder="🍴 Recipe Title"
          />
          
          <input
            className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all placeholder-gray-500"
            {...register("chef")}
            type="text"
            placeholder="👨‍🍳 Chef Name"
          />
          
          <input
            className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all placeholder-gray-500"
            {...register("image")}
            type="url"
            placeholder="📸 Image URL"
          />
          
          <select
            className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all"
            {...register("category")}
          >
            <option value="">🗂️ Select Category</option>
            <option value="breakfast">🌅 Breakfast</option>
            <option value="lunch">☀️ Lunch</option>
            <option value="dinner">🌆 Dinner</option>
            <option value="supper">🌙 Supper</option>
          </select>
          
          <textarea
            className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all placeholder-gray-500 resize-none"
            {...register("desc")}
            rows="3"
            placeholder="📝 Recipe description..."
          />
          
          <textarea
            className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all placeholder-gray-500 resize-none"
            {...register("ingr")}
            rows="4"
            placeholder="🥕 Ingredients (comma separated)..."
          />
          
          <textarea
            className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all placeholder-gray-500 resize-none"
            {...register("inst")}
            rows="5"
            placeholder="👨‍🍳 Instructions (comma separated)..."
          />
        </div>

        <div className="flex gap-3 pt-4">
          <button 
            type="submit"
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 shadow-sm"
          >
            Update Recipe
          </button>
          
          <button
            type="button"
            onClick={DeleteHandler}
            className="px-6 bg-red-600 hover:bg-red-700 text-white font-medium py-3 rounded-lg transition-colors duration-200 shadow-sm"
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
