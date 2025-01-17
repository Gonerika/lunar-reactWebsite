import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Plus, Search, Users, Computer, BookOpenText } from "lucide-react";
import { AddStudentModal, ApplyForInternshipForm, ApplyForNewCourseForm, ViewStudentDetailsModal } from "./StudentModals";

const StudentDashboard = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showAddStudentForm, setShowAddStudentForm] = useState(false);
  const [showApplyForInternshipForm, setShowApplyForInternshipForm] = useState(false);
  const [showApplyForNewCourseForm, setShowApplyForNewCourseForm] = useState(false);

  const [students, setStudents] = useState([
    {
      id: "1",
      name: "Prasun Gautam",
      email: "prasungautam@example.com",
      phone: "9801234567",
      address: "New York, USA",
      paidAmount: "Rs.50,000",
      remainingAmount: "Rs.112,700",
      currentCourses: ["Full Stack Development", "React"],
      previousCourses: [{ course: "HTML & CSS", date: "2023-12-28" }],
    },
    {
      id: "2",
      name: "Aakriti Karki",
      email: "aakritikarki@example.com",
      phone: "9802345678",
      address: "San Francisco, USA",
      paidAmount: "Rs.75,000",
      remainingAmount: "Rs.37,000",
      currentCourses: ["Backend Development"],
      previousCourses: [{ course: "Java Basics", date: "2023-11-15" }],
    },
  ]);

  const [newStudent, setNewStudent] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    paidAmount: "",
    remainingAmount: "",
    currentCourses: [],
    previousCourses: [],
  });

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.email.toLowerCase().includes(search.toLowerCase()) ||
      student.phone.includes(search)
  );

  const indexOfLastStudent = currentPage * itemsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - itemsPerPage;
  const currentStudents = filteredStudents.slice(
    indexOfFirstStudent,
    indexOfLastStudent
  );

  const totalPages = Math.ceil(filteredStudents.length / itemsPerPage);

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

  const handleAddStudent = (e) => {
    e.preventDefault();
    setStudents((prevStudents) => [
      ...prevStudents,
      { ...newStudent, id: (prevStudents.length + 1).toString() },
    ]);
    setNewStudent({
      name: "",
      email: "",
      phone: "",
      address: "",
      paidAmount: "",
      remainingAmount: "",
      currentCourses: [],
      previousCourses: [],
    });
    setShowAddStudentForm(false);
  };

  useEffect(() => {
    if (showAddStudentForm || showApplyForInternshipForm || showApplyForNewCourseForm || selectedStudent) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showAddStudentForm, showApplyForInternshipForm, showApplyForNewCourseForm, selectedStudent]);

  return (
    <div className="px-2 sm:px-4 lg:px-8 py-4 sm:py-8 min-h-screen relative">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-end items-stretch sm:items-center gap-2 mb-6">
        <button
          onClick={() => setShowApplyForInternshipForm(true)}
          className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 transition text-sm sm:text-base"
        >
          <Computer className="h-4 w-4 sm:h-5 sm:w-5" />
          <span className="whitespace-nowrap">Apply For Internship</span>
        </button>
        <button
          onClick={() => setShowApplyForNewCourseForm(true)}
          className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 transition text-sm sm:text-base"
        >
          <BookOpenText className="h-4 w-4 sm:h-5 sm:w-5"/> 
          <span className="whitespace-nowrap">Apply For New Course</span>
        </button>
        <button
          onClick={() => setShowAddStudentForm(true)}
          className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 transition text-sm sm:text-base"
        >
          <Plus className="h-4 w-4 sm:h-5 sm:w-5" />
          <span className="whitespace-nowrap">Add New</span>
        </button>
      </div>

      {/* Student Table */}
      <div className="bg-white rounded-xl p-3 sm:p-6 shadow-lg border border-blue-100 overflow-x-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 flex items-center gap-2 whitespace-nowrap">
            <Users className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
            Course Wise Students
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
                <th className="py-3 px-2 sm:px-3 text-left text-gray-600 font-medium">Name</th>
                <th className="py-3 px-2 sm:px-3 text-left text-gray-600 font-medium">Email</th>
                <th className="py-3 px-2 sm:px-3 text-left text-gray-600 font-medium">Phone</th>
                <th className="py-3 px-2 sm:px-3 text-left text-gray-600 font-medium">Address</th>
                <th className="py-3 px-2 sm:px-3 text-left text-gray-600 font-medium">Details</th>
              </tr>
            </thead>
            <tbody>
              {currentStudents.map((student, index) => (
                <tr
                  key={student.id}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >
                  <td className="py-2 sm:py-3 px-2 sm:px-3 text-gray-800">{indexOfFirstStudent + index + 1}</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-3 text-gray-800" title={student.name}>
                    {student.name.length > 15 ? `${student.name.slice(0, 15)}...` : student.name}
                  </td>
                  <td className="py-2 sm:py-3 px-2 sm:px-3 text-gray-600" title={student.email}>
                    {student.email.length > 15 ? `${student.email.slice(0, 15)}...` : student.email}
                  </td>
                  <td className="py-2 sm:py-3 px-2 sm:px-3 text-gray-600" title={student.phone}>
                    {student.phone.length > 10 ? `${student.phone.slice(0, 10)}...` : student.phone}
                  </td>
                  <td className="py-2 sm:py-3 px-2 sm:px-3 text-gray-600" title={student.address}>
                    {student.address.length > 15 ? `${student.address.slice(0, 15)}...` : student.address}
                  </td>
                  <td className="py-2 sm:py-3 px-2 sm:px-3">
                    <button
                      onClick={() => setSelectedStudent(student)}
                      className="bg-blue-600 text-white py-1 px-2 rounded-lg hover:bg-blue-500 text-xs sm:text-sm whitespace-nowrap"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredStudents.length === 0 && (
            <div className="text-center py-4 text-gray-500 text-sm">No results found</div>
          )}
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-sm ${
            currentPage === 1
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
          className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-sm ${
            currentPage === totalPages
              ? "bg-gray-300 text-gray-500"
              : "bg-blue-600 text-white hover:bg-blue-500"
          }`}
        >
          Next
          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
      </div>

      {/* Modals */}
      {selectedStudent && (
        <ViewStudentDetailsModal
          setSelectedStudent={setSelectedStudent}
          selectedStudent={selectedStudent}
        />
      )}
      {showAddStudentForm && (
        <AddStudentModal
          setShowAddStudentForm={setShowAddStudentForm}
          handleAddStudent={handleAddStudent}
          newStudent={newStudent}
          setNewStudent={setNewStudent}
        />
      )}
      {showApplyForInternshipForm && (
        <ApplyForInternshipForm setShowApplyForInternshipForm={setShowApplyForInternshipForm} />
      )}
      {showApplyForNewCourseForm && (
        <ApplyForNewCourseForm setShowApplyForNewCourseForm={setShowApplyForNewCourseForm} />
      )}
    </div>
  );
};

export default StudentDashboard;