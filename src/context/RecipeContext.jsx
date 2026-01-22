import { createContext, useEffect, useState } from "react";

export const recipecontext = createContext(null);

const RecipeContext = (props) => {
  const [data, setdata] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchRecipesFromAPI = async (number = 5) => {
    const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;
    if (!apiKey) {
      console.warn("Spoonacular API key not found");
      return [];
    }
    try {
      const response = await fetch(`https://api.spoonacular.com/recipes/random?number=${number}&apiKey=${apiKey}`);
      const result = await response.json();
      if (result.recipes) {
        return result.recipes.map(recipe => ({
          id: recipe.id,
          title: recipe.title,
          ingredients: recipe.extendedIngredients ? recipe.extendedIngredients.map(ing => ing.original) : [],
          instructions: recipe.instructions ? recipe.instructions.replace(/<[^>]*>/g, '') : 'No instructions available',
          image: recipe.image,
          chef: 'API Recipe'
        }));
      }
    } catch (error) {
      console.error("Error fetching recipes from API:", error);
    }
    return [];
  };

  const loadMoreRecipes = async () => {
    setIsLoading(true);
    const newRecipes = await fetchRecipesFromAPI(10); // Load 10 more
    const existingIds = new Set(data.map(r => r.id));
    const filteredNewRecipes = newRecipes.filter(r => !existingIds.has(r.id));
    const updatedData = [...data, ...filteredNewRecipes];
    setdata(updatedData);
    localStorage.setItem("recipes", JSON.stringify(updatedData));
    setIsLoading(false);
  };

  useEffect(() => {
    const initializeData = async () => {
      const rawData = localStorage.getItem("recipes");
      let localData = [];

      if (rawData) {
        try {
          localData = JSON.parse(rawData);
        } catch (e) {
          console.error("Invalid JSON in localStorage, clearing it");
          localStorage.removeItem("recipes");
          localData = [];
        }
      }

      if (!localData || localData.length === 0) {
        const demoRecipes = [
          {
            id: 1,
            title: "Spaghetti Bolognese",
            ingredients: ["spaghetti", "ground beef", "tomato sauce", "onion", "garlic"],
            instructions: "Cook spaghetti. Brown beef with onion and garlic. Add tomato sauce. Mix with spaghetti.",
            image: "https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png",
            chef: "Luca Romano"
          },
          {
            id: 2,
            title: "Grilled Cheese Sandwich",
            ingredients: ["bread", "cheddar cheese", "butter"],
            instructions: "Butter the bread, place cheese in between, and grill until golden.",
            image: "https://cdn.pixabay.com/photo/2016/11/29/04/00/bread-1867208_1280.jpg",
            chef: "Emily Carter"
          },
          {
            id: 3,
            title: "Paneer Butter Masala",
            ingredients: ["paneer", "butter", "cream", "tomato", "spices"],
            instructions: "Cook tomatoes and spices, blend into gravy. Add paneer and cream. Simmer and serve hot.",
            image: "https://cdn.pixabay.com/photo/2022/03/02/12/42/paneer-7043099_1280.jpg",
            chef: "Sakshi P."
          },
          {
            id: 4,
            title: "Chicken Curry",
            ingredients: ["chicken", "onion", "tomato", "yogurt", "spices"],
            instructions: "Marinate chicken in yogurt and spices. Cook onions, add tomato, and simmer with chicken.",
            image: "https://cdn.pixabay.com/photo/2021/07/29/12/43/curry-6507120_1280.jpg",
            chef: "Kruu Nagin"
          },
          {
            id: 5,
            title: "Veggie Pizza",
            ingredients: ["pizza base", "cheese", "bell peppers", "onions", "tomato sauce"],
            instructions: "Spread sauce on base, add veggies and cheese. Bake at 220°C for 15 minutes.",
            image: "https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_1280.jpg",
            chef: "Carlos Mendoza"
          },
          {
            id: 6,
            title: "Pancakes",
            ingredients: ["flour", "milk", "eggs", "baking powder", "sugar"],
            instructions: "Mix all ingredients into a smooth batter. Pour on a hot griddle and cook both sides.",
            image: "https://cdn.pixabay.com/photo/2023/02/24/21/11/pancake-7811889_1280.jpg",
            chef: "Sophia Nguyen"
          },
          {
            id: 7,
            title: "Caesar Salad",
            ingredients: ["lettuce", "croutons", "parmesan", "Caesar dressing", "chicken (optional)"],
            instructions: "Toss all ingredients with dressing and top with grated parmesan.",
            image: "https://cdn.pixabay.com/photo/2017/08/11/00/32/salad-2629262_1280.jpg",
            chef: "Daniel Thompson"
          },
          {
            id: 8,
            title: "Chole Bhature",
            ingredients: ["chickpeas", "onions", "tomatoes", "bhature dough", "spices"],
            instructions: "Cook chickpeas with spices and masala. Fry bhature and serve hot with chole.",
            image: "https://cdn.pixabay.com/photo/2022/12/28/17/44/bowl-7683485_1280.jpg",
            chef: "Neha Joshi"
          },
          {
            id: 9,
            title: "Mango Smoothie",
            ingredients: ["mango", "yogurt", "milk", "honey"],
            instructions: "Blend all ingredients until smooth. Serve chilled.",
            image: "https://cdn.pixabay.com/photo/2022/12/28/17/44/bowl-7683485_1280.jpg",
            chef: "Oliver Bennett"
          },
          {
            id: 10,
            title: "Chocolate Brownies",
            ingredients: ["cocoa powder", "flour", "sugar", "butter", "eggs"],
            instructions: "Mix ingredients, pour into a tray, and bake at 180°C for 25 minutes.",
            image: "https://cdn.pixabay.com/photo/2018/09/19/17/54/chocolate-cake-3689088_1280.jpg",
            chef: "Isha Malhotra"
          }
        ];

        // Fetch additional recipes from API
        const apiRecipes = await fetchRecipesFromAPI();
        const allRecipes = [...demoRecipes, ...apiRecipes];

        localStorage.setItem("recipes", JSON.stringify(allRecipes));
        setdata(allRecipes);
      } else {
        // Check if we need to fetch more recipes
        if (localData.length < 20) { // If less than 20, fetch more
          const apiRecipes = await fetchRecipesFromAPI();
          const existingIds = new Set(localData.map(r => r.id));
          const newRecipes = apiRecipes.filter(r => !existingIds.has(r.id));
          const updatedRecipes = [...localData, ...newRecipes];
          localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
          setdata(updatedRecipes);
        } else {
          setdata(localData);
        }
      }
    };

    initializeData();
  }, []);

  return (
    <recipecontext.Provider value={{ data, setdata, loadMoreRecipes, isLoading }}>
      {props.children}
    </recipecontext.Provider>
  );
};

export default RecipeContext;
