import React, { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-10 bg-blue-100 shadow-md py-4 px-6 flex justify-between items-center">
      <div className="navbar-logo">
        <img src="/Lunar.png" alt="Logo" className="w-24" />
      </div>

      {/* Hamburger Menu */}
      <div className="md:hidden flex flex-col gap-2 cursor-pointer" onClick={toggleMenu}>
        <div className="w-6 h-1 bg-gray-700 rounded-md"></div>
        <div className="w-6 h-1 bg-gray-700 rounded-md"></div>
        <div className="w-6 h-1 bg-gray-700 rounded-md"></div>
      </div>

      {/* Navbar Links */}
      <ul
        className={`md:flex md:space-x-6 md:items-center md:gap-8 ${
          isMenuOpen
            ? "absolute top-full right-0 bg-blue-100 w-full p-6 shadow-md flex flex-col space-y-4 z-50"
            : "hidden"
        } md:flex-row`}
      >
        <li>
          <a href="#banner" className="text-gray-700 hover:text-gray-900 transition duration-300">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="text-gray-700 hover:text-gray-900 transition duration-300">
            About
          </a>
        </li>
        <li>
          <a href="#features" className="text-gray-700 hover:text-gray-900 transition duration-300">
            Features
          </a>
        </li>
        <li>
          <a href="#ourproducts" className="text-gray-700 hover:text-gray-900 transition duration-300">
            Products
          </a>
        </li>
        <li>
          <a href="#courses" className="text-gray-700 hover:text-gray-900 transition duration-300">
            Courses
          </a>
        </li>

        {/* Dropdown Menu */}
        <li className="relative">
          <button
            onClick={toggleDropdown}
            className="text-gray-700 hover:text-gray-900 transition duration-300 flex items-center"
          >
            <p className="hover:text-blue-800">More</p>
            <svg
              className={`w-4 h-4 ml-1 transform transition-transform duration-300 ${
                isDropdownOpen ? "rotate-180" : "rotate-0"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <ul
            className={`absolute top-full left-0 w-40 rounded-md bg-[#eff6ff] ${
              isDropdownOpen ? "block" : "hidden"
            }`}
          >
            <li>
              <a href="#contact" className="block px-4 py-2 text-gray-700 hover:bg-blue-100">
                Contact
              </a>
            </li>
            <li>
              <a href="#JobForm" className="block px-4 py-2 text-gray-700 hover:bg-blue-100">
                Form
              </a>
            </li>
            <li>
              <a href="#faq" className="block px-4 py-2 text-gray-700 hover:bg-blue-100">
                FAQs
              </a>
            </li>
          </ul>
        </li>

        {/* Join/Dashboard Button in Mobile View */}
        <li className="md:hidden">
          {!isLogin ? (
            <Link
              to="/auth/login"
              className="bg-blue-800 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition duration-300 block text-center"
            >
              Join
            </Link>
          ) : (
            <Link
              to="/dashboard"
              className="bg-blue-800 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition duration-300 block text-center"
            >
              Dashboard
            </Link>
          )}
        </li>
      </ul>

      {/* Join/Dashboard Button in Desktop View */}
      <div className="hidden md:flex gap-4">
        {!isLogin ? (
          <Link
            to="/auth/login"
            className="bg-blue-800 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
          >
            Join
          </Link>
        ) : (
          <Link
            to="/dashboard"
            className="bg-blue-800 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
          >
            Dashboard
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Nav;
