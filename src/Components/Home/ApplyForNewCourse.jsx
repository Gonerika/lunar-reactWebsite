import React, { useEffect, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";

function ApplyForNewCourse() {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedCourse = location.state?.course || ""; // Get the course name from state
  const [selectedCourses, setSelectedCourses] = useState([]);

  // Pre-select the course passed via state
  useEffect(() => {
    if (selectedCourse) {
      setSelectedCourses([selectedCourse.toLowerCase()]);
    }
  }, [selectedCourse]);

  const handleCourseSelection = (course) => {
    setSelectedCourses((prev) =>
      prev.includes(course)
        ? prev.filter((c) => c !== course) // Deselect if already selected
        : [...prev, course] // Add if not already selected
    );
  };

  return (
    <div
      id="NewCourse"
      className="min-h-screen flex items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8 py-8 mt-6 sm:mt-8 md:mt-12"
    >
      <div className="w-full max-w-3xl mx-auto px-4 p-4 sm:px-6 lg:px-8 mt-12 md:mt-12 bg-white shadow-md rounded-lg">
        {/* Heading and Back Arrow */}
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={() => navigate("/")}
            className="text-indigo-500 hover:text-indigo-700"
          >
            <AiOutlineArrowLeft size={24} />
          </button>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center flex-grow">
            Course Application Form
          </h1>
        </div>

        {/* Form */}
        <form action="#" method="POST">
          {/* Personal Details */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              required
              className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              required
              className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              required
              className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Courses Selection */}
          <div className="mb-6">
            <label htmlFor="courses" className="block text-sm font-medium text-gray-700 mb-3">
              Select Courses
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "Java",
                "Python",
                "C",
                "HTML",
                "CSS",
                "Django",
                "React",
                "Flutter",
              ].map((course, index) => (
                <div key={index} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`course-${course.toLowerCase()}`}
                    name="courses"
                    value={course.toLowerCase()}
                    checked={selectedCourses.includes(course.toLowerCase())}
                    onChange={() => handleCourseSelection(course.toLowerCase())}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor={`course-${course.toLowerCase()}`}
                    className="ml-2 text-sm text-gray-700"
                  >
                    {course}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 w-full sm:w-auto"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ApplyForNewCourse;
