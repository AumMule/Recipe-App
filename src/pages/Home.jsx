import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/recipes`); 
    };

    return <div>

        <div className="flex flex-row w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-6 justify-between max-md:flex-col">
            <div className="flex justify-center items-center w-full md:w-2/3 max-md:mt-8">
                <h2 className="font-bold text-3xl sm:text-6xl text-center text-gray-800">
                    "Find the perfect recipe  <span className="text-yellow-500">fast</span>, <span className="text-[#FF4343]">fresh</span>, and <span className=" duration-75 delay-75 opacity-65 hover:opacity-95">full of flavor</span>.”
                </h2>
            </div>
            <img className="overflow-hidden w-full md:w-1/3 duration-200 delay-75 hover:scale-105 max-md:w-full" src="/images/chef.png" alt="Chef Illustration" />

        </div>
        
        <div className="w-full flex justify-center mt-10 pb-10 px-4">
            <button onClick={handleClick} className="bg-yellow-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-yellow-600 transition">
                Explore Recipes
            </button>
        </div>
        
        <h1 className="text-xl sm:text-5xl font-montserrat italic opacity-50 fixed sm:absolute bottom-3 right-3 sm:right-[2%] font-bold tracking-tight text-gray-900" >
            <span className="text-yellow-600">Recipe</span>
            <span className="text-red-500">You</span>
            <span className="text-black">Need</span>
        </h1>
        <footer className="w-full text-center text-gray-500 text-sm py-4 px-4">
            © 2025 Recipe You Need. All rights reserved.
        </footer>
    </div>;
};

export default Home;
// we have to add fav functionality at last
