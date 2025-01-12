import React from 'react'

function JobForm() {
  return (
    <div id= "JobForm" className=" bg-blue-50 py-10 flex items-center justify-center ">
      <div className="w-full max-w-2xl p-8 bg-white shadow-md rounded-lg">
        <h1 className="text-xl md:text-3xl font-bold text-center text-gray-800 mb-10">Job/Internship Application</h1>
        <form action="#" method="POST">
          {/* Personal Details */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
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
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
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
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              required
              className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Job Preferences */}
          <div className="mb-4">
            <label htmlFor="position" className="block text-sm font-medium text-gray-700">Position Applied For</label>
            <select
              id="position"
              name="position"
              className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option disabled defaultValue={""}>Select a position</option>
              <option value="internship">Internship</option>
              <option value="full-time">Full-time Job</option>
              <option value="part-time">Part-time Job</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="portfolio" className="block text-sm font-medium text-gray-700">Portfolio/LinkedIn (Optional)</label>
            <input
              type="url"
              id="portfolio"
              name="portfolio"
              placeholder="Provide a URL"
              className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Upload Resume */}
          <div className="mb-4">
            <label htmlFor="resume" className="block text-sm font-medium text-gray-700">Upload Resume</label>
            <input
              type="file"
              id="resume"
              name="resume"
              required
              className="w-full mt-2 border rounded-lg focus:outline-none"
            />
          </div>

          {/* Cover Letter */}
          <div className="mb-4">
            <label htmlFor="cover-letter" className="block text-sm font-medium text-gray-700">Cover Letter</label>
            <textarea
              id="cover-letter"
              name="cover-letter"
              rows="4"
              placeholder="Write your cover letter here..."
              required
              className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Submit */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-800 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default JobForm
