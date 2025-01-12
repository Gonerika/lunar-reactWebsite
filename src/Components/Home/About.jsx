import React from "react";

function About() {
  return (
    <div id="about" className="bg-blue-100 py-12 px-4 lg:px-16" style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Section */}
        <div>
          <h2 className="text-xl md:text-3xl font-bold text-gray-800 text-center mb-10">About Us</h2>
          <p className="text-gray-700 text-base lg:text-lg mb-4">
            <strong>Established:</strong> 2073 B.S. (2016 A.D.)<br />
            <strong>Mission:</strong> To create software that fulfills needs and delivers seamless, enjoyable
            experiences.<br />
            <strong>Core Values:</strong>
          </p>
          <ul className="list-disc list-inside text-gray-700 text-base lg:text-lg space-y-2 pl-4">
            <li>
              <strong>Quality Craftsmanship:</strong> Delivering reliable, efficient, and user-friendly high-quality
              software.
            </li>
            <li>
              <strong>Client-Centric Approach:</strong> Building strong, collaborative client relationships.
            </li>
            <li>
              <strong>Meaningful Impact:</strong> Creating value and making a difference with every project.
            </li>
          </ul>
          <p className="text-gray-700 text-base lg:text-lg mt-4">
            <strong>Our Focus:</strong> We prioritize customer satisfaction through innovative, tailored solutions.<br />
            <strong>Our Goal:</strong> Turning your ideas into exceptional digital experiences, ensuring shared success.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center">
          {/* Image */}
          <div className="w-full max-w-md mb-6 rounded-lg overflow-hidden shadow-xl transform transition duration-300 hover:scale-105">
            <img src="/Images/About/aboutUs.jpg" alt="About Us" className="w-full object-cover" />
          </div>
          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 w-full max-w-md">
            <div className="bg-white border border-gray-200 text-center p-4 rounded-md shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-bold text-indigo-900">3.5</h3>
              <p className="text-gray-600 mt-1 text-sm">Years Experience</p>
            </div>
            <div className="bg-white border border-gray-200 text-center p-4 rounded-md shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-bold text-indigo-900">23</h3>
              <p className="text-gray-600 mt-1 text-sm">Project Challenges</p>
            </div>
            <div className="bg-white border border-gray-200 text-center p-4 rounded-md shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-bold text-indigo-900">830+</h3>
              <p className="text-gray-600 mt-1 text-sm">Positive Reviews</p>
            </div>
            <div className="bg-white border border-gray-200 text-center p-4 rounded-md shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-bold text-indigo-900">100K</h3>
              <p className="text-gray-600 mt-1 text-sm">Trusted Students</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
