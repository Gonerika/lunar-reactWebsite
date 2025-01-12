import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Search, Briefcase, X, Plus } from "lucide-react";

const JobDashboard = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showAddJobForm, setShowAddJobForm] = useState(false);
  const [jobs, setJobs] = useState([
    {
      id: "1",
      title: "Frontend Developer",
      description: "Develop and maintain UI components using React.",
      location: "New York, USA",
      salary: "Rs.80,000",
      deadline: "2024-05-15",
      type: "Full-Time",
      status: "Open",
    },
    {
      id: "2",
      title: "Backend Developer",
      description: "Work on REST APIs and server-side logic.",
      location: "San Francisco, USA",
      salary: "Rs.90,000",
      deadline: "2024-06-10",
      type: "Full-Time",
      status: "Closed",
    },
    {
      id: "3",
      title: "UI/UX Designer",
      description: "Design intuitive interfaces for web applications.",
      location: "Remote",
      salary: "Rs.70,000",
      deadline: "2024-05-30",
      type: "Contract",
      status: "Open",
    },
  ]);

  const [newJob, setNewJob] = useState({
    title: "",
    description: "",
    location: "",
    salary: "",
    deadline: "",
    type: "",
    status: "Open",
  });

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.location.toLowerCase().includes(search.toLowerCase()) ||
      job.type.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastJob = currentPage * itemsPerPage;
  const indexOfFirstJob = indexOfLastJob - itemsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  const totalPages = Math.ceil(filteredJobs.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleAddJob = (e) => {
    e.preventDefault();
    setJobs((prevJobs) => [
      ...prevJobs,
      { ...newJob, id: (prevJobs.length + 1).toString() },
    ]);
    setNewJob({
      title: "",
      description: "",
      location: "",
      salary: "",
      deadline: "",
      type: "",
      status: "Open",
    });
    setShowAddJobForm(false);
  };

  // Prevent scrolling in the background when modal is open
  useEffect(() => {
    if (showAddJobForm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showAddJobForm]);

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 min-h-screen relative">
      {/* Header Section */}
      <div className="flex justify-end mb-6">
        <button
          onClick={() => setShowAddJobForm(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 transition"
        >
          <Plus className="h-5 w-5" />
          Add Job
        </button>
      </div>

      {/* Job Table */}
      <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
            <Briefcase className="h-6 w-6 text-blue-600" />
            Job Openings
          </h3>
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-3 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="py-3 text-left text-gray-600 font-medium">Title</th>
                <th className="py-3 text-left text-gray-600 font-medium">Description</th>
                <th className="py-3 text-left text-gray-600 font-medium">Location</th>
                <th className="py-3 text-left text-gray-600 font-medium">Salary</th>
                <th className="py-3 text-left text-gray-600 font-medium">Deadline</th>
                <th className="py-3 text-left text-gray-600 font-medium">Type</th>
                <th className="py-3 text-left text-gray-600 font-medium">Status</th>
                <th className="py-3 text-left text-gray-600 font-medium">Details</th>
              </tr>
            </thead>
            <tbody>
              {currentJobs.map((job) => (
                <tr key={job.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 text-gray-800 font-medium">
                    {job.title.length > 10 ? `${job.title.slice(0, 10)}...` : job.title}
                  </td>
                  <td className="py-3 text-gray-600">
                    {job.description.length > 10
                      ? `${job.description.slice(0, 10)}...`
                      : job.description}
                  </td>
                  <td className="py-3 text-gray-600">
                    {job.location.length > 10
                      ? `${job.location.slice(0, 10)}...`
                      : job.location}
                  </td>
                  <td className="py-3 text-gray-800 font-medium">{job.salary}</td>
                  <td className="py-3 text-gray-600">{job.deadline}</td>
                  <td className="py-3 text-gray-600">{job.type}</td>
                  <td
                    className={`py-3 font-medium ${
                      job.status === "Open" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {job.status}
                  </td>
                  <td>
                    <button
                      onClick={() => setSelectedJob(job)}
                      className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredJobs.length === 0 && (
            <div className="text-center py-4 text-gray-500">No jobs found</div>
          )}
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-6 flex justify-between items-center">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
            currentPage === 1
              ? "bg-gray-300 text-gray-500"
              : "bg-blue-600 text-white hover:bg-blue-500"
          }`}
        >
          <ChevronLeft className="h-5 w-5" />
          Previous
        </button>
        <span className="text-sm font-medium text-gray-600">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
            currentPage === totalPages
              ? "bg-gray-300 text-gray-500"
              : "bg-blue-600 text-white hover:bg-blue-500"
          }`}
        >
          Next
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Add Job Form */}
      {showAddJobForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md transform transition-transform translate-y-[-20px] animate-slide-in">
            <button
              onClick={() => setShowAddJobForm(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
            >
              <X className="h-6 w-6" />
            </button>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Add Job</h3>
            <form onSubmit={handleAddJob} className="space-y-4">
              <input
                type="text"
                placeholder="Title"
                value={newJob.title}
                onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
              <textarea
                placeholder="Description"
                value={newJob.description}
                onChange={(e) =>
                  setNewJob({ ...newJob, description: e.target.value })
                }
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
              <input
                type="text"
                placeholder="Location"
                value={newJob.location}
                onChange={(e) => setNewJob({ ...newJob, location: e.target.value })}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="text"
                placeholder="Salary"
                value={newJob.salary}
                onChange={(e) => setNewJob({ ...newJob, salary: e.target.value })}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="date"
                placeholder="Deadline"
                value={newJob.deadline}
                onChange={(e) => setNewJob({ ...newJob, deadline: e.target.value })}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
              <select
                value={newJob.type}
                onChange={(e) => setNewJob({ ...newJob, type: e.target.value })}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
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
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
              >
                Add Job
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Details Card */}
      {selectedJob && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
            <div className="flex items-end justify-end">
              <button
                onClick={() => setSelectedJob(false)}
                className=" text-gray-600 hover:text-gray-800"
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
      )}
    </div>
  );
};

export default JobDashboard;
