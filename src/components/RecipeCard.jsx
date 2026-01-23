import { Link } from "react-router-dom";

const RecipeCard = (props) => {
    const { id, image, title, desc, chef } = props.recipe;
    return (
        <Link
            to={`/recipes/details/${id}`}
            className="block rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-all duration-300 w-full transform hover:scale-105"
        >
            <div className="p-4">
                <img className="rounded-lg shadow-xl object-cover w-full aspect-[4/3] hover:scale-105 transition-transform duration-300 hover:shadow-2xl" src={image} alt={title} />
            </div>
            <div className="px-4 pb-4">
                <h1 className="font-mono text-xl sm:text-2xl mb-2 leading-7 text-gray-800 font-semibold">{title}</h1>
                <p className="font-medium opacity-70 text-black mb-2">
                    {/* {desc.slice(0, 100)}...{" "} */}
                    <small className="text-blue-500 hover:text-blue-700 transition-colors">View Details</small>
                </p>
                <div className="flex justify-end">
                    <small className="text-[#FF4343] font-medium">~ {chef || 'Unknown Chef'}</small>
                </div>
            </div>
        </Link>
    );
};

export default RecipeCard;
