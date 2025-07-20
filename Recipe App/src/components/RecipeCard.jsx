import { Link } from "react-router-dom";

const RecipeCard = (props) => {
    const { id, image, title, desc, chef } = props.recipe;
    return (
        <Link
            to={`/recipes/details/${id}`}
            className="hover:shadow-2xl transition-shadow duration-300 mr-3 mb-3 block w-[20vw] rounded-2xl overflow-hidden shadow-lg bg-white"
        >
            <div className="p-4 ">
            <img className="rounded-lg shadow-xl object-cover w-full h-[24vh] hover:scale-105 duration-300 hover:shadow-2xl" src={image} alt="" />
            </div>
            <h1 className="px-4 font-mono text-2xl mb-2 leading-7 text-gray-800">{title}</h1>
            <p className="px-4 font-medium opacity-70 text-black">
                {desc.slice(0, 100)}...{" "}
                <small className="text-blue-400">more</small>
            </p>
            <div className="flex justify-end">
  <small className="px-4 text-[#FF4343]  pb-2">~ {chef}</small>
</div>
        </Link>
    );
};

export default RecipeCard;
