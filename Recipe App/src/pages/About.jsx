const About = () => {
    return (
        <div>
            <div className="flex flex-row w-[90%] h-1/2 overflow-hidden justify-between">
                <div className="flex justify-center items-center w-[65%]">
                    <h2 className="font-bold text-4xl sm:text-7xl text-center text-gray-800">
                        "Your culinary journey starts <span className="text-yellow-500">here</span>, with <span className="text-[#FF4343]">passion</span>, and <span className="duration-75 delay-75 opacity-65 hover:opacity-95">endless possibilities</span>."
                    </h2>
                </div>
                <img className="overflow-hidden w-[30%] duration-250 delay-75 hover:scale-110" src="public\images\chef.png" alt="" />
            </div>
            
            <div className="absolute bottom-20 left-[5%] max-w-md">
                <p className="text-lg text-gray-600 leading-relaxed">
                    <span className="font-semibold text-gray-800">RecipeYouNeed</span> is your ultimate cooking companion. 
                    Discover amazing recipes, create your own masterpieces, and share them with fellow food lovers. 
                    From quick weeknight dinners to weekend feast preparations - we've got everything you need.
                </p>
            </div>

            <h1 className="text-l sm:text-5xl font-montserrat italic opacity-50 absolute bottom-3 right-[2%] font-bold tracking-tight text-gray-900">
                <span className="text-yellow-600">Recipe</span>
                <span className="text-red-500">You</span>
                <span className="text-black">Need</span>
            </h1>
        </div>
    );
};

export default About;