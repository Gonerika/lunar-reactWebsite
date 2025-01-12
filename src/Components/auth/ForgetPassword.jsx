import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

function ForgetPassword() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Main content */}
      <main className="flex-grow flex items-center justify-center px-4">
        <div className="w-full max-w-md mx-auto p-6">
          <div className="bg-white rounded-xl shadow-lg border-2 border-indigo-300 p-6">
            <div className="relative flex items-center justify-center">
              {/* Back Arrow */}
              <Link
                to="/auth/login"
                className="absolute left-0 text-indigo-500 hover:text-indigo-700"
              >
                <AiOutlineArrowLeft size={20} />
              </Link>
              {/* Header */}
              <h1 className="text-2xl font-bold text-gray-800">Forgot password?</h1>
            </div>
            <p className="mt-2 text-sm text-gray-600 text-center">
              Remember your password?
              <Link to="/login" className="text-blue-600 hover:underline ml-1">Login here</Link>
            </p>

            <div className="mt-5">
              <form>
                <div className="grid gap-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold ml-1 mb-2">Email address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                      required
                    />
                  </div>
                  <Link to="/auth/resetPassword">
                    <button
                      type="submit"
                      className="w-full py-3 px-4 bg-blue-800 text-white rounded-md hover:bg-blue-600 transition duration-300"
                    >
                      Reset password
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ForgetPassword;
