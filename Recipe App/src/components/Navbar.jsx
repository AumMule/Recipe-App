import { NavLink,useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const logoHandler=()=>{
        navigate("/");
    }
    return (
        <div className="flex flex-row justify-between max-md:flex-col ">
            <div>
                
                    <p className="text-2xl font-montserrat font-bold" onClick={logoHandler}>RYN.</p>
                
                {/* <small className="font-light text-gray-400">Recipe You Need...</small> */}
            </div>
            <div className="flex items-center justify-center gap-x-10 text-xl mb-10">
                <NavLink
                    className={(e) => (e.isActive ? "text-[#FFBB00]" : "")}
                    to="/"
                >
                    Home
                </NavLink>
                <NavLink
                    className={(e) => (e.isActive ? "text-[#FFBB00]" : "")}
                    to="/recipes"
                >
                    Recipes
                </NavLink>
                <NavLink
                    className={(e) => (e.isActive ? "text-[#FFBB00]" : "")}
                    to="/about"
                >
                    About
                </NavLink>
                <NavLink
                    className={(e) => (e.isActive ? "text-[#FFBB00]" : "")}
                    to="/create-recipe"
                >
                    Create Recipe
                </NavLink>
            </div>
            <div>
                <button className=" hover:bg-[#b38400] bg-[#ffbb00] rounded px-2 py-1 max-md:none" >Profile</button>
            </div>
        </div>
    );
};

export default Navbar;
