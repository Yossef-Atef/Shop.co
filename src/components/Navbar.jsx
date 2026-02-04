import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/SHOP.CO.svg";
import search from "../assets/Search.svg";
import User from "../assets/users.svg";
import carShop from "../assets/carShop.svg";
import { useCart } from "../context/CartContext";

/**
 * Navbar Component
 * 
 * Main navigation header with logo, links, search bar, and user actions.
 */
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount } = useCart();

  const navLinks = [
    { name: "Shop", href: "/category/casual" },
    { name: "On Sale", href: "/category/casual" },
    { name: "New Arrivals", href: "/category/casual" },
    { name: "Brands", href: "/category/casual" }
  ];

  return (
    <nav className="sticky top-0 z-[100] bg-white border-b border-black/10">
      <div className="max-w-[1240px] mx-auto px-4 md:px-0 h-16 md:h-24 flex items-center justify-between gap-4 md:gap-10">

        {/* Left Side: Mobile Menu Button & Logo */}
        <div className="flex items-center gap-4">
          <button
            className="md:hidden p-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>

          <Link to="/" className="flex-shrink-0">
            <img src={Logo} alt="SHOP.CO" className="h-[18px] md:h-6" />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6 whitespace-nowrap">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-base text-black hover:text-black/60 font-normal transition-colors"
            >
              {link.name}
              {link.name === "Shop" && <span className="ml-1">▼</span>}
            </Link>
          ))}
        </div>

        {/* Center: Search Bar (Hidden/Icon only on small mobile) */}
        <div className="hidden sm:flex flex-grow max-w-[577px] items-center bg-[#F0F0F0] rounded-full px-4 py-3 gap-3">
          <img src={search} alt="Search" className="w-5 h-5 opacity-40" />
          <input
            className="w-full bg-transparent text-black text-sm md:text-base placeholder:text-black/40 outline-none"
            type="text"
            placeholder="Search for products..."
          />
        </div>

        {/* Right Side: Icons */}
        <div className="flex items-center gap-3 md:gap-4 flex-shrink-0">
          <button className="sm:hidden p-0">
            <img src={search} alt="Search" className="w-6 h-6" />
          </button>
          <Link to="/cart" className="p-0 hover:scale-110 transition-transform relative">
            <img src={carShop} alt="Cart" className="w-6 h-6 md:w-7 md:h-7" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </Link>
          <button className="p-0 hover:scale-110 transition-transform">
            <img src={User} alt="User" className="w-6 h-6 md:w-7 md:h-7" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-black/10 p-4 shadow-lg animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium py-2 border-b border-black/5 last:border-0"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
