const About = () => {
    return (
        <div>
            <div className="flex flex-row w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-6 justify-between max-md:flex-col">
                <div className="flex justify-center items-center w-full md:w-2/3">
                    <h2 className="font-bold text-3xl sm:text-6xl text-center text-gray-800">
                        "Your culinary journey starts <span className="text-yellow-500">here</span>, with <span className="text-[#FF4343]">passion</span>, and <span className="duration-75 delay-75 opacity-65 hover:opacity-95">endless possibilities</span>."
                    </h2>
                </div>
                <img className="overflow-hidden w-full md:w-1/3 duration-200 delay-75 hover:scale-105" src="/images/chef.png" alt="Chef Illustration" />
            </div>
            
            <div className="relative sm:absolute bottom-20 sm:left-[5%] max-w-md px-4 sm:px-0 mt-6 sm:mt-0">
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                    <span className="font-semibold text-gray-800">RecipeYouNeed</span> is your ultimate cooking companion. 
                    Discover amazing recipes, create your own masterpieces, and share them with fellow food lovers. 
                    From quick weeknight dinners to weekend feast preparations - we've got everything you need.
                </p>
            </div>

            <h1 className="text-xl sm:text-5xl font-montserrat italic opacity-50 fixed sm:absolute bottom-3 right-3 sm:right-[2%] font-bold tracking-tight text-gray-900">
                <span className="text-yellow-600">Recipe</span>
                <span className="text-red-500">You</span>
                <span className="text-black">Need</span>
            </h1>
        </div>
    );
};

export default About;