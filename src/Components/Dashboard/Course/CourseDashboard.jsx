import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Search, GraduationCap, Plus } from "lucide-react";
import { AddCourseFormModal, ViewDetailsModal } from "./CourseModal";

const CourseDashboard = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showAddCourseForm, setShowAddCourseForm] = useState(false);
  const [courses, setCourses] = useState([
    {
      id: "1",
      sn: 1,
      name: "John Smith",
      email: "john.smith@example.com",
      type: "type1",
      program: "course",
      status: "pending",
    },
    {
      id: "2",
      sn: 2,
      name: "Sarah Johnson",
      email: "sarah.j@example.com",
      type: "type2",
      program: "training",
      status: "accepted",
    },
    {
      id: "3",
      sn: 3,
      name: "Michael Brown",
      email: "michael.b@example.com",
      type: "type1",
      program: "course",
      status: "rejected",
    },
  ]);

  const [newCourse, setNewCourse] = useState({
    name: "",
    email: "",
    type: "",
    program: "",
    status: "pending",
  });

  const filteredCourses = courses.filter(
    (course) =>
      course.name.toLowerCase().includes(search.toLowerCase()) ||
      course.email.toLowerCase().includes(search.toLowerCase()) ||
      course.type.toLowerCase().includes(search.toLowerCase()) ||
      course.program.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastCourse = currentPage * itemsPerPage;
  const indexOfFirstCourse = indexOfLastCourse - itemsPerPage;
  const currentCourses = filteredCourses.slice(
    indexOfFirstCourse,
    indexOfLastCourse
  );

  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);

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

  const handleAddCourse = (e) => {
    e.preventDefault();
    setCourses((prevCourses) => [
      ...prevCourses,
      {
        ...newCourse,
        id: (prevCourses.length + 1).toString(),
        sn: prevCourses.length + 1,
      },
    ]);
    setNewCourse({
      name: "",
      email: "",
      type: "",
      program: "",
      status: "pending",
    });
    setShowAddCourseForm(false);
  };

  const handleStatusChange = (id, newStatus) => {
    setCourses((prevCourses) =>
      prevCourses.map((course) =>
        course.id === id ? { ...course, status: newStatus } : course
      )
    );
  };


  useEffect(() => {
    if (showAddCourseForm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showAddCourseForm]);

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 min-h-screen relative">
      {/* Header Section */}
      <div className="flex justify-end mb-6">
        <button
          onClick={() => setShowAddCourseForm(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 transition"
        >
          <Plus className="h-5 w-5" />
          Add Course
        </button>
      </div>

      {/* Course Table */}
      <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-blue-600" />
            Course Applications
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
                <th className="py-3 text-left text-gray-600 font-medium">Type</th>
                <th className="py-3 text-left text-gray-600 font-medium">Program</th>
                <th className="py-3 text-left text-gray-600 font-medium">Status</th>
                <th className="py-3 text-left text-gray-600 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentCourses.map((course) => (
                <tr key={course.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 text-gray-800">{course.sn}</td>
                  <td className="py-3 text-gray-800">
                    {course.name.length > 10
                      ? `${course.name.slice(0, 10)}...`
                      : course.name}
                  </td>
                  <td className="py-3 text-gray-600">
                    {course.email.length > 10
                      ? `${course.email.slice(0, 10)}...`
                      : course.email}
                  </td>
                  <td className="py-3 text-gray-600">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                      {course.type}
                    </span>
                  </td>
                  <td className="py-3 text-gray-600">
                    <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">
                      {course.program}
                    </span>
                  </td>
                  <td className="py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        course.status === "pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : course.status === "accepted"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {course.status}
                    </span>
                  </td>
                  <td className="py-3">
                    <div className="flex gap-2">
                      <button
                        onClick={() => setSelectedCourse(course)}
                        className="bg-blue-600 text-white py-1 px-2 rounded-lg hover:bg-blue-500 text-sm"
                      >
                        View
                      </button>
                      {course.status === "pending" && (
                        <>
                          <button
                            onClick={() => handleStatusChange(course.id, "accepted")}
                            className="bg-green-600 text-white py-1 px-2 rounded-lg hover:bg-green-500 text-sm"
                          >
                            Accept
                          </button>
                          <button
                            onClick={() => handleStatusChange(course.id, "rejected")}
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
          {filteredCourses.length === 0 && (
            <div className="text-center py-4 text-gray-500">No courses found</div>
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

      {/* Add Course Form */}
      {showAddCourseForm && (
        <AddCourseFormModal
          setShowAddCourseForm={setShowAddCourseForm}
          setNewCourse={setNewCourse}
          newCourse={newCourse}
          handleAddCourse={handleAddCourse}
        />
      )}

      {/* Details Modal */}
      {selectedCourse && (
        <ViewDetailsModal
          setSelectedCourse={setSelectedCourse}
          selectedCourse={selectedCourse}
          handleStatusChange={handleStatusChange}
        />
      )}
    </div>
  );
};

export default CourseDashboard;