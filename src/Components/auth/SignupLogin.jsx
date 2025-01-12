import React, { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

const SignupLogin = () => {
  const [tab, setTab] = useState("signup");

  return (
    <div className="bg-gray-100 min-h-screen pt-2 pb-2 flex items-center justify-center">
      {/* Main Content */}
      <div className="max-w-md w-full bg-white rounded-lg shadow-2xl border-2 border-indigo-300 transform  transition-transform duration-300">
        {/* Header Section */}
        <div className="py-6 flex flex-col items-center justify-center">
          {/* Back Arrow */}
          <Link
            to="/"
            className="absolute top-4 left-4 text-indigo-500 hover:text-indigo-800"
          >
            <AiOutlineArrowLeft size={24} />
          </Link>

          <img src="/Lunar.png" alt="Lunar Logo" className="object-contain" />
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setTab("signup")}
            className={`px-4 py-2 rounded-l-md focus:outline-none transition-colors duration-300 ${
              tab === "signup"
                ? "bg-blue-800 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Sign Up
          </button>
          <button
            onClick={() => setTab("login")}
            className={`px-4 py-2 rounded-r-md focus:outline-none transition-colors duration-300 ${
              tab === "login"
                ? "bg-blue-800 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Login
          </button>
        </div>

        {/* Forms */}
        <div className="p-8">
          {tab === "signup" ? (
            <form className="space-y-4">
              {/* Full Name */}
              <div className="relative">
                <input
                  id="name"
                  type="text"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
                  placeholder="Full Name"
                />
                <i className="fas fa-user absolute left-3 top-3 text-gray-400"></i>
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
                  placeholder="Email"
                />
                <i className="fas fa-envelope absolute left-3 top-3 text-gray-400"></i>
              </div>

              {/* Password */}
              <div className="relative">
                <input
                  id="password"
                  type="password"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
                  placeholder="Password"
                />
                <i className="fas fa-lock absolute left-3 top-3 text-gray-400"></i>
              </div>

              {/* Role Dropdown */}
              <div className="relative">
                <select id="role" name="role"
                  className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option disabled defaultValue={""}>Select Role</option>
                  <option value="trainer">Trainer</option>
                  <option value="admin">Admin</option>
                  <option value="student">Student</option>
                </select>
                <i className="fas fa-user-tag absolute left-3 top-3 text-gray-400"></i>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-800 text-white py-2 rounded-md hover:opacity-90 transition-opacity duration-300 transform hover:scale-105"
              >
                Sign Up
              </button>
            </form>
          ) : (
            <form className="space-y-4">
              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
                  placeholder="Email"
                />
                <i className="fas fa-envelope absolute left-3 top-3 text-gray-400"></i>
              </div>

              {/* Password */}
              <div className="relative">
                <input
                  type="password"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
                  placeholder="Password"
                />
                <i className="fas fa-lock absolute left-3 top-3 text-gray-400"></i>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-800 text-white py-2 rounded-md hover:opacity-90 transition-opacity duration-300 transform hover:scale-105"
              >
                Login
              </button>
            </form>
          )}

          <div className="text-center mt-4">
            <a
              href="/auth/forgetPassword"
              className="text-blue-500 hover:underline text-sm"
            >
              Forgot Password?
            </a>
          </div>
          <div className="mt-6">
            <p className="text-center text-gray-500 mt-6 text-sm">
              By signing in, you agree to our{" "}
              <a
                href="#"
                className="text-blue-500 hover:underline transition duration-300"
              >
                Terms
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="text-blue-500 hover:underline transition duration-300"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupLogin;
