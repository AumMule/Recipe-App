import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    // State to manage whether the mobile menu is open or closed
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const logoHandler = () => {
        navigate("/");
        setIsMenuOpen(false); // Close menu on navigation
    };

    // A helper function for NavLink classes to keep the code DRY
    const navLinkClasses = ({ isActive }) =>
        isActive
            ? "text-[#FFBB00] font-semibold"
            : "text-gray-700 hover:text-[#FFBB00] transition-colors";

    return (
        <nav className="relative bg-white shadow-md p-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <p className="text-2xl font-montserrat cursor-pointer font-bold" onClick={logoHandler}>
                        RYN.
                    </p>
                </div>

                {/* Desktop Menu Links (Hidden on mobile) */}
                <div className="hidden md:flex items-center gap-x-8 text-lg">
                    <NavLink className={navLinkClasses} to="/">Home</NavLink>
                    <NavLink className={navLinkClasses} to="/recipes">Recipes</NavLink>
                    <NavLink className={navLinkClasses} to="/about">About</NavLink>
                    <NavLink className={navLinkClasses} to="/create-recipe">Create Recipe</NavLink>
                    <button className="bg-[#ffbb00] hover:bg-[#b38400] text-black font-semibold rounded px-4 py-2 transition-colors">
                        Profile
                    </button>
                </div>

                {/* Hamburger Menu Button (Visible only on mobile) */}
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800 focus:outline-none">
                        {isMenuOpen ? (
                            // Close Icon (X)
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            // Menu Icon (Hamburger)
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu (Dropdown Panel) */}
            {isMenuOpen && (
                <div className="md:hidden mt-4 bg-white rounded-lg shadow-xl flex flex-col items-center gap-y-4 p-4">
                    <NavLink onClick={() => setIsMenuOpen(false)} className={navLinkClasses} to="/">Home</NavLink>
                    <NavLink onClick={() => setIsMenuOpen(false)} className={navLinkClasses} to="/recipes">Recipes</NavLink>
                    <NavLink onClick={() => setIsMenuOpen(false)} className={navLinkClasses} to="/about">About</NavLink>
                    <NavLink onClick={() => setIsMenuOpen(false)} className={navLinkClasses} to="/create-recipe">Create Recipe</NavLink>
                    <button className="w-full bg-[#ffbb00] hover:bg-[#b38400] text-black font-semibold rounded px-4 py-2 transition-colors">
                        Profile
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;