# 🍳 RecipeYouNeed - Your Ultimate Culinary Companion

**RecipeYouNeed** is a modern, responsive web application designed for food enthusiasts who want to discover, search, and explore delicious recipes from around the world. Powered by **The Meal DB API**, it provides an intuitive interface to find your next favorite meal.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite)
![Tailwind](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwind-css)

---

## ✨ Key Features

- 🔍 **Real-time Search:** Instantly find recipes by name with our high-speed search functionality.
- 📂 **Categorized Discovery:** Browse through dozens of food categories like Seafood, Vegetarian, Desserts, and more.
- 🎲 **Random Inspiration:** Can't decide what to eat? Get a fresh set of random recipes with the "Load More" feature.
- 📱 **Fully Responsive:** Beautifully designed using Tailwind CSS, ensuring a seamless experience across desktop, tablet, and mobile devices.
- 🏗️ **Robust State Management:** Powered by React Context API for smooth data flow and efficient UI updates.

---

## 🚀 Tech Stack

- **Frontend:** [React.js 19](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Routing:** [React Router 7](https://reactrouter.com/)
- **API:** [The Meal DB](https://www.themealdb.com/api.php)
- **Utilities:** `nanoid`, `react-hook-form`, `react-toastify`

---

## 🛠️ Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AumMule/Recipe-App.git
   cd Recipe-App/Recipe\ App
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173` to view the app!

---

## 📁 Project Structure

```text
src/
├── api/            # MealDB API integration
├── components/     # Reusable UI components (Navbar, RecipeList, etc.)
├── context/        # React Context for global state management
├── routes/         # Application routing logic
├── App.jsx         # Main application entry component
├── index.css       # Global styles and Tailwind imports
└── main.jsx        # Root entry point
```

---

## 🌐 API Reference

This application utilizes [The Meal DB API](https://www.themealdb.com/api.php) to fetch recipe data. 

- `searchMealsByName`: Fetch meals matching a specific name.
- `listCategories`: Retrieve all available meal categories.
- `randomMeal`: Get a random recipe for inspiration.
- `filterByCategory`: Filter recipes based on their category.

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 📧 Contact

**Aum Mule**
GitHub: [@AumMule](https://github.com/AumMule)

<p align="center">Made with ❤️ for food lovers everywhere.</p>
