import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Search, Briefcase, X, Plus } from "lucide-react";
import { AddJobFormModal, ViewDetailsModal } from "./JobModals";

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
    <div className="px-2 sm:px-4 lg:px-8 py-4 sm:py-8 min-h-screen relative">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-end items-stretch sm:items-center gap-2 mb-6">
        <button
          onClick={() => setShowAddJobForm(true)}
          className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 transition text-sm sm:text-base"
        >
          <Plus className="h-4 w-4 sm:h-5 sm:w-5" />
          Add Job
        </button>
      </div>

      {/* Job Table */}
      <div className="bg-white rounded-xl p-3 sm:p-6 shadow-lg border border-blue-100">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 flex items-center gap-2">
            <Briefcase className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
            Job Openings
          </h3>
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4 sm:h-5 sm:w-5" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="overflow-x-auto -mx-3 sm:mx-0">
          <table className="w-full text-xs sm:text-sm">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="py-3 px-2 sm:px-3 text-left text-gray-600 font-medium">S.N.</th>
                <th className="py-3 px-2 sm:px-3 text-left text-gray-600 font-medium">Title</th>
                <th className="py-3 px-2 sm:px-3 text-left text-gray-600 font-medium">Description</th>
                <th className="py-3 px-2 sm:px-3 text-left text-gray-600 font-medium">Location</th>
                <th className="py-3 px-2 sm:px-3 text-left text-gray-600 font-medium">Salary</th>
                <th className="py-3 px-2 sm:px-3 text-left text-gray-600 font-medium">Deadline</th>
                <th className="py-3 px-2 sm:px-3 text-left text-gray-600 font-medium">Type</th>
                <th className="py-3 px-2 sm:px-3 text-left text-gray-600 font-medium">Status</th>
                <th className="py-3 px-2 sm:px-3 text-left text-gray-600 font-medium">Details</th>
              </tr>
            </thead>
            <tbody>
              {currentJobs.map((job, index) => (
                <tr key={job.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-2 sm:py-3 px-2 sm:px-3 text-gray-800">{indexOfFirstJob + index + 1}</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-3 text-gray-800">
                    {job.title.length > 10 ? `${job.title.slice(0, 10)}...` : job.title}
                  </td>
                  <td className="py-2 sm:py-3 px-2 sm:px-3 text-gray-600">
                    {job.description.length > 10
                      ? `${job.description.slice(0, 10)}...`
                      : job.description}
                  </td>
                  <td className="py-2 sm:py-3 px-2 sm:px-3 text-gray-600">
                    {job.location.length > 10
                      ? `${job.location.slice(0, 10)}...`
                      : job.location}
                  </td>
                  <td className="py-2 sm:py-3 px-2 sm:px-3 text-gray-600">{job.salary}</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-3 text-gray-600">{job.deadline}</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-3 text-gray-600">{job.type}</td>
                  <td className="py-3">
                    <span className={`px-2 py-1 rounded-full text-xs sm:text-sm font-medium ${job.status === "Open" ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {job.status}
                    </span>
                  </td>
                  <td>
                    <button
                      onClick={() => setSelectedJob(job)}
                      className="bg-blue-600 text-white py-1 px-2 rounded-lg hover:bg-blue-500 text-xs sm:text-sm whitespace-nowrap"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredJobs.length === 0 && (
            <div className="text-center py-4 text-gray-500 text-sm">No results found</div>
          )}
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-sm w-full sm:w-auto justify-center ${currentPage === 1
            ? "bg-gray-300 text-gray-500"
            : "bg-blue-600 text-white hover:bg-blue-500"
            }`}
        >
          <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          Previous
        </button>
        <span className="text-xs sm:text-sm font-medium text-gray-600">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-sm w-full sm:w-auto justify-center ${currentPage === totalPages
            ? "bg-gray-300 text-gray-500"
            : "bg-blue-600 text-white hover:bg-blue-500"
            }`}
        >
          Next
          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
      </div>

      {/* Add Job Form */}
      {showAddJobForm && (
        <AddJobFormModal
          setShowAddJobForm={setShowAddJobForm}
          setNewJob={setNewJob}
          newJob={newJob}
          handleAddJob={handleAddJob}
        />
      )}

      {/* Details Card */}
      {selectedJob && (
        <ViewDetailsModal
          setSelectedJob={setSelectedJob}
          selectedJob={selectedJob}
        />
      )}
    </div>
  );
};

export default JobDashboard;
