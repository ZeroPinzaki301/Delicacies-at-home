import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect, useRef, useCallback } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import HoDelLogo from '../assets/img/HoDelLogo.png';
import HoDelTitle from '../assets/img/HoDelTitle.png';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();

  // Handle logo and home clicks
  const handleLogoClick = useCallback((e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname]);

  const handleHomeClick = useCallback((e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-orange-300 shadow-md px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between border-b-2 border-lime-200/25">
      {/* Logo */}
      <Link 
        to="/" 
        className="flex items-center"
        onClick={handleLogoClick}
      >
        {/* HoDelLogo only visible on mobile */}
        <img
          src={HoDelLogo}
          alt="HoDel"
          className="sm:hidden w-9 h-9"
        />
        {/* HoDelTitle only visible on desktop */}
        <img
          src={HoDelTitle}
          alt="HoDel"
          className="hidden sm:block h-6 sm:h-8"
        />
      </Link>

      {/* Burger Menu Button - Mobile Only */}
      <button
        className="sm:hidden text-amber-950 text-2xl"
        onClick={(e) => {
          e.stopPropagation();
          setMobileMenuOpen(!mobileMenuOpen);
        }}
      >
        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Middle Links - Desktop */}
      <div className="hidden sm:flex text-amber-950 space-x-4 md:space-x-8 lg:space-x-12 tracking-[.45em]">
        <Link 
          to="/" 
          className="font-bold text-sm md:text-base lg:text-lg hover:text-amber-700"
          onClick={handleHomeClick}
        >
          Home
        </Link>
        <Link to="/favorites" className="font-bold text-sm md:text-base lg:text-lg hover:text-amber-700">
          Favorites
        </Link>
        <Link to="/dishes" className="font-bold text-sm md:text-base lg:text-lg hover:text-amber-700">
          Dishes
        </Link>
        <Link to="/lore" className="font-bold text-sm md:text-base lg:text-lg hover:text-amber-700">
          Lore
        </Link>
        <Link to="/contact" className="font-bold text-sm md:text-base lg:text-lg hover:text-amber-700">
          Contact Us
        </Link>
      </div>

      {/* Right Side - Empty on desktop since no user profile */}
      <div className="hidden sm:flex relative items-center">
        {/* Empty space to balance the layout */}
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden absolute top-full left-0 right-0 bg-orange-300 shadow-lg z-50 p-4">
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              className="font-bold text-amber-950 hover:text-amber-700 py-2 border-b border-lime-700"
              onClick={handleHomeClick}
            >
              Home
            </Link>
            <Link
              to="/favorites"
              className="font-bold text-amber-950 hover:text-amber-700 py-2 border-b border-lime-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Favorites
            </Link>
            <Link
              to="/dishes"
              className="font-bold text-amber-950 hover:text-amber-700 py-2 border-b border-lime-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Dishes
            </Link>
            <Link
              to="/lore"
              className="font-bold text-amber-950 hover:text-amber-700 py-2 border-b border-lime-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Lore
            </Link>
            <Link
              to="/contact"
              className="font-bold text-amber-950 hover:text-amber-700 py-2 border-b border-lime-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;