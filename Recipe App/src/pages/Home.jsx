import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/recipes`); 
    };

    return <div>

        <div className="flex flex-row w-[90%] h-1/2 overflow-hidden justify-between max-md:flex-col">
            <div className="flex justify-center items-center w-[65%] max-md:w-full max-md:mt-10">
                <h2 className="font-bold text-4xl sm:text-7xl text-center text-gray-800">
                    "Find the perfect recipe  <span className="text-yellow-500">fast</span>, <span className="text-[#FF4343]">fresh</span>, and <span className=" duration-75 delay-75 opacity-65 hover:opacity-95">full of flavor</span>.”
                </h2>
            </div>
            <img className="overflow-hidden w-[30%] duration-250 delay-75 hover:scale-110 max-md:w-full" src="\images\chef.png" alt="" />

        </div>
        
        <div className="w-full flex justify-center mt-10 pb-10">
            <button onClick={handleClick} className="bg-yellow-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-yellow-600 transition">
                Explore Recipes
            </button>
        </div>
        

        <h1 className="text-l sm:text-5xl font-montserrat italic opacity-50 absolute bottom-3 right-[2%] font-bold tracking-tight text-gray-900" >
            <span className="text-yellow-600">Recipe</span>
            <span className="text-red-500">You</span>
            <span className="text-black">Need</span>
        </h1>
        <footer className="w-full text-center text-gray-500 text-sm py-4">
            © 2025 Recipe You Need. All rights reserved.
        </footer>
    </div>;
};

export default Home;
// we have to add fav functionality at last
