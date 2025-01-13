import React, { useEffect } from "react";
import { X } from "lucide-react";

export function AddJobFormModal({ setShowAddJobForm, setNewJob, newJob, handleAddJob }) {
    // Prevent background scrolling when the modal is open
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative">
                {/* Close Button */}
                <button
                    onClick={() => setShowAddJobForm(false)}
                    className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
                >
                    <X className="h-6 w-6" />
                </button>

                {/* Modal Content */}
                <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Add Job</h3>

                {/* Form with Scrollable Area */}
                <form
                    onSubmit={handleAddJob}
                    className="space-y-4 overflow-y-auto max-h-[400px] px-2"
                >
                    {/* Title Field */}
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                            Job Title
                        </label>
                        <input
                            id="title"
                            type="text"
                            placeholder="Enter job title"
                            value={newJob.title}
                            onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
                            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Description Field */}
                    <div>
                        <label
                            htmlFor="description"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Description
                        </label>
                        <textarea
                            id="description"
                            placeholder="Enter job description"
                            value={newJob.description}
                            onChange={(e) => setNewJob({ ...newJob, description: e.target.value })}
                            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            rows="3"
                            required
                        ></textarea>
                    </div>

                    {/* Location Field */}
                    <div>
                        <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                            Location
                        </label>
                        <input
                            id="location"
                            type="text"
                            placeholder="Enter job location"
                            value={newJob.location}
                            onChange={(e) => setNewJob({ ...newJob, location: e.target.value })}
                            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Salary Field */}
                    <div>
                        <label htmlFor="salary" className="block text-sm font-medium text-gray-700 mb-1">
                            Salary
                        </label>
                        <input
                            id="salary"
                            type="number"
                            placeholder="Enter salary"
                            value={newJob.salary}
                            onChange={(e) => setNewJob({ ...newJob, salary: e.target.value })}
                            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Deadline Field */}
                    <div>
                        <label htmlFor="deadline" className="block text-sm font-medium text-gray-700 mb-1">
                            Deadline
                        </label>
                        <input
                            id="deadline"
                            type="date"
                            placeholder="Select deadline"
                            value={newJob.deadline}
                            onChange={(e) => setNewJob({ ...newJob, deadline: e.target.value })}
                            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Type Field */}
                    <div>
                        <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
                            Job Type
                        </label>
                        <select
                            id="type"
                            value={newJob.type}
                            onChange={(e) => setNewJob({ ...newJob, type: e.target.value })}
                            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            required
                        >
                            <option value="" disabled>
                                Select Job Type
                            </option>
                            <option value="Full-Time">Full-Time</option>
                            <option value="Part-Time">Part-Time</option>
                            <option value="Contract">Contract</option>
                            <option value="Internship">Internship</option>
                        </select>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="w-full sm:w-auto py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition"
                        >
                            Add Job
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export function ViewDetailsModal({ setSelectedJob, selectedJob }) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md max-h-[80vh] overflow-y-auto">
          <div className="flex items-end justify-end">
            <button
              onClick={() => setSelectedJob(null)}
              className="text-gray-600 hover:text-gray-800"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            {selectedJob.title}
          </h3>
          <p className="text-sm text-gray-600 mb-2">
            <strong>Description:</strong> {selectedJob.description}
          </p>
          <p className="text-sm text-gray-600 mb-2">
            <strong>Location:</strong> {selectedJob.location}
          </p>
          <p className="text-sm text-gray-600 mb-2">
            <strong>Salary:</strong> {selectedJob.salary}
          </p>
          <p className="text-sm text-gray-600 mb-2">
            <strong>Deadline:</strong> {selectedJob.deadline}
          </p>
          <p className="text-sm text-gray-600 mb-2">
            <strong>Type:</strong> {selectedJob.type}
          </p>
          <p className="text-sm text-gray-600">
            <strong>Status:</strong>{" "}
            <span
              className={`font-semibold ${
                selectedJob.status === "Open" ? "text-green-600" : "text-red-600"
              }`}
            >
              {selectedJob.status}
            </span>
          </p>
        </div>
      </div>
    );
  }
  