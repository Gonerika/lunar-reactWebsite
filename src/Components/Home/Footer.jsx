import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Footer() {
  return (
    <footer className="bg-blue-100 text-gray-800 ">
      {/* Logo and Company Name */}
      <div className="text-center mb-6 py-4">
        <img
          src="/Lunar.png"
          alt="Lunar IT Solutions Logo"
          className="h-16 mx-auto mb-2 mt-3"
        />
        <h2 className="text-xl font-semibold">Lunar IT Solutions Pvt. Ltd.</h2>
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center space-x-4 mb-6">
        <button
          aria-label="Sign up with Google"
          className="p-3 bg-gray-100 rounded-full shadow-md hover:bg-gray-200"
        >
          <img
            src="https://ucarecdn.com/8f25a2ba-bdcf-4ff1-b596-088f330416ef/"
            alt="Google"
            className="w-5 h-5"
          />
        </button>
        <button
          aria-label="Sign up with LinkedIn"
          className="p-3 bg-gray-100 rounded-full shadow-md hover:bg-gray-200"
        >
          <img
            src="https://ucarecdn.com/95eebb9c-85cf-4d12-942f-3c40d7044dc6/"
            alt="LinkedIn"
            className="w-5 h-5"
          />
        </button>
        <button
          aria-label="Sign up with GitHub"
          className="p-3 bg-gray-100 rounded-full shadow-md hover:bg-gray-200"
        >
          <img
            src="https://ucarecdn.com/be5b0ffd-85e8-4639-83a6-5162dfa15a16/"
            alt="GitHub"
            className="w-5 h-5"
          />
        </button>
        <button
          aria-label="Sign up with Facebook"
          className="p-3 bg-gray-100 rounded-full shadow-md hover:bg-gray-200"
        >
          <img
            src="https://ucarecdn.com/6f56c0f1-c9c0-4d72-b44d-51a79ff38ea9/"
            alt="Facebook"
            className="w-5 h-5"
          />
        </button>
        <button
          aria-label="Sign up with Twitter"
          className="p-3 bg-gray-100 rounded-full shadow-md hover:bg-gray-200"
        >
          <img
            src="https://ucarecdn.com/82d7ca0a-c380-44c4-ba24-658723e2ab07/"
            alt="Twitter"
            className="w-5 h-5"
          />
        </button>
        <button
          aria-label="Sign up with Apple"
          className="p-3 bg-gray-100 rounded-full shadow-md hover:bg-gray-200"
        >
          <img
            src="https://ucarecdn.com/3277d952-8e21-4aad-a2b7-d484dad531fb/"
            alt="Apple"
            className="w-5 h-5"
          />
        </button>

      </div>

      {/* Navigation Links */}
      <nav className="flex justify-center space-x-6 mb-6">
        <a
          href="#home"
          className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors"
        >
          Home
        </a>
        <a
          href="#about"
          className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors"
        >
          About
        </a>
        <a
          href="#contact"
          className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors"
        >
          Contact
        </a>
        <a
          href="#faqs"
          className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors"
        >
          FAQs
        </a>
      </nav>

      {/* Contact Information */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center mb-8">
        <div>
          <i className="fas fa-envelope text-2xl text-blue-800 mb-2"></i>
          <p className="text-sm text-gray-600">lunaritsolution@outlook.com</p>
        </div>
        <div>
          <i className="fas fa-phone text-2xl text-blue-800 mb-2"></i>
          <p className="text-sm text-gray-600">9816317976</p>
        </div>
        <div>
          <i className="fas fa-map-marker-alt text-2xl text-blue-800 mb-2"></i>
          <p className="text-sm text-gray-600">Itahari-4, Sunsari</p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-blue-800 text-white py-2 text-center">
        <p className="text-sm">
          Copyright &copy; 2024. Developed by Lunar IT Solutions. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
