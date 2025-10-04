import { createContext, useEffect, useState } from "react";

export const recipecontext = createContext(null);

const RecipeContext = (props) => {
  const [data, setdata] = useState([]);

  useEffect(() => {
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
          image: "https://cdn.pixabay.com/photo/2020/06/21/20/44/chicken-5325974_960_720.jpg",
          chef: "Kruu Nagin"
        },
        {
          id: 5,
          title: "Veggie Pizza",
          ingredients: ["pizza base", "cheese", "bell peppers", "onions", "tomato sauce"],
          instructions: "Spread sauce on base, add veggies and cheese. Bake at 220°C for 15 minutes.",
          image: "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg",
          chef: "Carlos Mendoza"
        },
        {
          id: 6,
          title: "Pancakes",
          ingredients: ["flour", "milk", "eggs", "baking powder", "sugar"],
          instructions: "Mix all ingredients into a smooth batter. Pour on a hot griddle and cook both sides.",
          image: "https://cdn.pixabay.com/photo/2017/05/07/08/56/pancake-2291908_960_720.jpg",
          chef: "Sophia Nguyen"
        },
        {
          id: 7,
          title: "Caesar Salad",
          ingredients: ["lettuce", "croutons", "parmesan", "Caesar dressing", "chicken (optional)"],
          instructions: "Toss all ingredients with dressing and top with grated parmesan.",
          image: "https://cdn.pixabay.com/photo/2016/03/05/19/02/appetite-1238614_960_720.jpg",
          chef: "Daniel Thompson"
        },
        {
          id: 8,
          title: "Chole Bhature",
          ingredients: ["chickpeas", "onions", "tomatoes", "bhature dough", "spices"],
          instructions: "Cook chickpeas with spices and masala. Fry bhature and serve hot with chole.",
          image: "https://cdn.pixabay.com/photo/2021/10/28/14/19/chole-bhature-6750311_960_720.jpg",
          chef: "Neha Joshi"
        },
        {
          id: 9,
          title: "Mango Smoothie",
          ingredients: ["mango", "yogurt", "milk", "honey"],
          instructions: "Blend all ingredients until smooth. Serve chilled.",
          image: "https://cdn.pixabay.com/photo/2021/05/30/06/53/mango-smoothie-6295830_960_720.jpg",
          chef: "Oliver Bennett"
        },
        {
          id: 10,
          title: "Chocolate Brownies",
          ingredients: ["cocoa powder", "flour", "sugar", "butter", "eggs"],
          instructions: "Mix ingredients, pour into a tray, and bake at 180°C for 25 minutes.",
          image: "https://cdn.pixabay.com/photo/2016/03/05/19/02/appetite-1238613_960_720.jpg",
          chef: "Isha Malhotra"
        }
      ];


      localStorage.setItem("recipes", JSON.stringify(demoRecipes));
      setdata(demoRecipes);
    } else {
      setdata(localData);
    }
  }, []);

  return (
    <recipecontext.Provider value={{ data, setdata }}>
      {props.children}
    </recipecontext.Provider>
  );
};

export default RecipeContext;
