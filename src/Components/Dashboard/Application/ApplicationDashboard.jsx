import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Search, Plus, FileText, X } from "lucide-react";
import { AddApplicationFormModal, ViewDetailsModal } from "./ApplicationModals";

const ApplicationDashboard = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [showAddApplicationForm, setShowAddApplicationForm] = useState(false);
  const [applications, setApplications] = useState([
    {
      id: "1",
      sn: 1,
      name: "John Smith",
      email: "john.smith@example.com",
      contact: "+1234567890",
      status: "pending",
      resume: "https://example.com/resume1.pdf",
    },
    {
      id: "2",
      sn: 2,
      name: "Sarah Johnson",
      email: "sarah.johnson@example.com",
      contact: "+9876543210",
      status: "accepted",
      resume: "https://example.com/resume2.pdf",
    },
    {
      id: "3",
      sn: 3,
      name: "Michael Brown",
      email: "michael.brown@example.com",
      contact: "+1122334455",
      status: "rejected",
      resume: "https://example.com/resume3.pdf",
    },
  ]);

  const [newApplication, setNewApplication] = useState({
    name: "",
    email: "",
    contact: "",
    resume: "",
    status: "pending",
  });

  
  const filteredApplications = applications.filter(
    (application) =>
      application.name.toLowerCase().includes(search.toLowerCase()) ||
      application.email.toLowerCase().includes(search.toLowerCase()) ||
      application.status.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastApplication = currentPage * itemsPerPage;
  const indexOfFirstApplication = indexOfLastApplication - itemsPerPage;
  const currentApplications = filteredApplications.slice(
    indexOfFirstApplication,
    indexOfLastApplication
  );

  const totalPages = Math.ceil(filteredApplications.length / itemsPerPage);

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

  const handleAddApplication = (e) => {
    e.preventDefault();
    setApplications((prevApplications) => [
      ...prevApplications,
      {
        ...newApplication,
        id: (prevApplications.length + 1).toString(),
        sn: prevApplications.length + 1,
      },
    ]);
    setNewApplication({
      name: "",
      email: "",
      contact: "",
      resume: "",
      status: "pending",
    });
    setShowAddApplicationForm(false);
  };

  const handleStatusChange = (id, newStatus) => {
    setApplications((prevApplications) =>
      prevApplications.map((app) =>
        app.id === id ? { ...app, status: newStatus } : app
      )
    );
  };

  

  useEffect(() => {
    if (showAddApplicationForm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showAddApplicationForm]);

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 min-h-screen relative">
      {/* Header Section */}
      <div className="flex justify-end mb-6">
        <button
          onClick={() => setShowAddApplicationForm(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 transition"
        >
          <Plus className="h-5 w-5" />
          Add Application
        </button>
      </div>

      {/* Application Table */}
      <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
            <FileText className="h-6 w-6 text-blue-600" />
            Applications
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
                <th className="py-3 text-left text-gray-600 font-medium">S.N</th>
                <th className="py-3 text-left text-gray-600 font-medium">Name</th>
                <th className="py-3 text-left text-gray-600 font-medium">Email</th>
                <th className="py-3 text-left text-gray-600 font-medium">Contact</th>
                <th className="py-3 text-left text-gray-600 font-medium">Status</th>
                <th className="py-3 text-left text-gray-600 font-medium">Resume</th>
                <th className="py-3 text-left text-gray-600 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentApplications.map((application) => (
                <tr key={application.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 text-gray-800">{application.sn}</td>
                  <td className="py-3 text-gray-800">
                    {application.name.length > 10
                      ? `${application.name.slice(0, 10)}...`
                      : application.name}
                  </td>
                  <td className="py-3 text-gray-600">
                    {application.email.length > 10
                      ? `${application.email.slice(0, 10)}...`
                      : application.email}
                  </td>
                  <td className="py-3 text-gray-600">
                    {application.contact.length > 10
                      ? `${application.contact.slice(0, 10)}...`
                      : application.contact}
                  </td>
                  <td className="py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        application.status === "pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : application.status === "accepted"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {application.status}
                    </span>
                  </td>
                  <td className="py-3">
                    <a
                      href={application.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      View Resume
                    </a>
                  </td>
                  <td className="py-3">
                    <div className="flex gap-2">
                      <button
                        onClick={() => setSelectedApplication(application)}
                        className="bg-blue-600 text-white py-1 px-2 rounded-lg hover:bg-blue-500 text-sm"
                      >
                        View
                      </button>
                      {application.status === "pending" && (
                        <>
                          <button
                            onClick={() => handleStatusChange(application.id, "accepted")}
                            className="bg-green-600 text-white py-1 px-2 rounded-lg hover:bg-green-500 text-sm"
                          >
                            Accept
                          </button>
                          <button
                            onClick={() => handleStatusChange(application.id, "rejected")}
                            className="bg-red-600 text-white py-1 px-2 rounded-lg hover:bg-red-500 text-sm"
                          >
                            Reject
                          </button>
                        </>
                      )}
                      
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredApplications.length === 0 && (
            <div className="text-center py-4 text-gray-500">No applications found</div>
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

      {/* Add Application Form */}
      {showAddApplicationForm && (
        <AddApplicationFormModal
          setShowAddApplicationForm={setShowAddApplicationForm}
          setNewApplication={setNewApplication}
          newApplication={newApplication}
          handleAddApplication={handleAddApplication}
        />
      )}

      {/* Details Modal */}
      {selectedApplication && (
        <ViewDetailsModal
          setSelectedApplication={setSelectedApplication}
          selectedApplication={selectedApplication}
          handleStatusChange={handleStatusChange}
        />
      )}
    </div>
  );
};

export default ApplicationDashboard;