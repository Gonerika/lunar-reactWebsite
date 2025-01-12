import React, { useState } from "react";

function SetNewPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordMatch(e.target.value === password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password && passwordMatch) {
      alert("Password successfully reset!");
    } else {
      alert("Passwords do not match. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 relative">
      

      <div className="w-full max-w-md mx-auto border-2 border-indigo-300 rounded-xl shadow-lg">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 py-6"
        >
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
            Set New Password
          </h2>

          <div className="mb-4">
            <label
              htmlFor="newPassword"
              className="block text-sm font-medium text-gray-700"
            >
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-100 focus:border-indigo-300"
              placeholder="Enter your new password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Retype Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className={`w-full mt-2 px-4 py-2 border ${
                passwordMatch ? "border-gray-300" : "border-red-500"
              } rounded-lg focus:ring-indigo-100 focus:border-indigo-300`}
              placeholder="Retype your password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
            />
            {!passwordMatch && (
              <p className="text-red-500 text-sm mt-2">
                Passwords do not match.
              </p>
            )}
          </div>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="w-full py-3 px-4 bg-blue-800 text-white rounded-md hover:bg-blue-600 transition duration-300"
              >
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SetNewPassword;
