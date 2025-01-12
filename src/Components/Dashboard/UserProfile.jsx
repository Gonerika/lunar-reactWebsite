import React, { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "./UserContext"; // Adjusted path

function UserProfile() {
  const { userProfile, updateUserProfile } = useUserContext();
  const [profileData, setProfileData] = useState(userProfile);
  const [isEditing, setIsEditing] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    updateUserProfile(profileData);
    setIsEditing(false);
    alert("Profile updated successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6 relative">
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={() => navigate(-1)}
            className="text-gray-800 hover:text-blue-600 flex items-center"
          >
            <AiOutlineArrowLeft size={24} className="mr-2" />
          </button>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="text-blue-600 hover:text-blue-800 flex items-center"
          >
            <FaEdit size={20} className="mr-2" />
            <span className="hidden md:block text-lg font-medium">Edit</span>
          </button>
        </div>
        {isEditing ? (
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={profileData.fullName}
                onChange={handleInputChange}
                className="mt-2 block w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={profileData.email}
                onChange={handleInputChange}
                className="mt-2 block w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
              >
                Save Changes
              </button>
            </div>
          </form>
        ) : (
          <div>
            <h1 className="text-xl font-bold">{userProfile.fullName}</h1>
            <p>{userProfile.email}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserProfile;
