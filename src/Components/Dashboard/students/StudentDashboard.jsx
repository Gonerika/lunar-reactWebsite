import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Plus, Search, X, Users, Calendar, Book, FolderDot } from "lucide-react";
import { useParams } from "react-router-dom";
import { AddStudentModal, ApplyForInternshipForm, ApplyForNewCourseForm, ViewStudentDetailsModal } from "./StudentModals";

const StudentDashboard = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showAddStudentForm, setShowAddStudentForm] = useState(false);
  const [showApplyForInternshipForm, setShowApplyForInternshipForm] = useState(false);
  const [showApplyForNewCourseForm, setShowApplyForNewCourseForm] = useState(false);
  const {    } = useParams();

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

  const handleCheckboxChange = (event) => {
    const course = event.target.value;
    // showApplyForNewCourseForm((prev) =>
    //   prev.includes(course)
    //     ? prev.filter((item) => item !== course)
    //     : [...prev, course]
    // );
  };

  useEffect(() => {
    if (showAddStudentForm || showApplyForInternshipForm || showApplyForNewCourseForm || selectedStudent) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }

    // Cleanup function to reset overflow on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showAddStudentForm, showApplyForInternshipForm, showApplyForNewCourseForm, selectedStudent]);



    
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 min-h-screen relative">
      {/* Header Section */}
      <div className="flex  justify-end items-center mb-6 gap-2">
        <button
          onClick={() => setShowApplyForInternshipForm(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 transition"
        >
          <FolderDot className="h-5 w-5" />
          Apply For Internship
        </button>
        <button
          onClick={() => setShowApplyForNewCourseForm(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 transition"
        >
          <Book className="h-5 w-5" />
          Apply For New Course
        </button>
        <button
          onClick={() => setShowAddStudentForm(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 transition"
        >
          <Plus className="h-5 w-5" />
          Add New
        </button>

      </div>

      {/* Student Table */}
      <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
            <Users className="h-6 w-6 text-blue-600" />
            Course Wise Students
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
                <th className="py-3 text-left text-gray-600 font-medium">S.N.</th>
                <th className="py-3 text-left text-gray-600 font-medium">Name</th>
                <th className="py-3 text-left text-gray-600 font-medium">Email</th>
                <th className="py-3 text-left text-gray-600 font-medium">Phone</th>
                <th className="py-3 text-left text-gray-600 font-medium">Address</th>
                <th className="py-3 text-left text-gray-600 font-medium">Details</th>
              </tr>
            </thead>
            <tbody>
              {currentStudents.map((student, index) => (
                <tr
                  key={student.id}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >
                  <td className="py-3 text-gray-800">{indexOfFirstStudent + index + 1}</td>
                  <td className="py-3 text-gray-800 ">
                    {student.name.length > 10
                      ? `${student.name.slice(0, 10)}...`
                      : student.name}
                  </td>
                  <td className="py-3 text-gray-600">
                    {student.email.length > 10
                      ? `${student.email.slice(0, 10)}...`
                      : student.email}
                  </td>
                  <td className="py-3 text-gray-600">{student.phone}</td>
                  <td className="py-3 text-gray-600">
                    {student.address.length > 10
                      ? `${student.address.slice(0, 10)}...`
                      : student.address}
                  </td>
                  <td>
                    <button
                      onClick={() => setSelectedStudent(student)}
                      className="bg-blue-600 text-white py-1 px-2 rounded-lg hover:bg-blue-500 text-sm"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredStudents.length === 0 && (
            <div className="text-center py-4 text-gray-500">No results found</div>
          )}
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-6 flex justify-between items-center">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg ${currentPage === 1
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
          className={`flex items-center gap-2 px-4 py-2 rounded-lg ${currentPage === totalPages
            ? "bg-gray-300 text-gray-500"
            : "bg-blue-600 text-white hover:bg-blue-500"
            }`}
        >
          Next
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Student Details Popup */}
      {selectedStudent && (
        <ViewStudentDetailsModal
          setSelectedStudent={setSelectedStudent}
          selectedStudent={selectedStudent}
        />
      )}


      {/* Add Student Form Popup */}
      {showAddStudentForm && (
        <AddStudentModal 
          setShowAddStudentForm={setShowAddStudentForm} 
          handleAddStudent={handleAddStudent}
          newStudent={newStudent}
          setNewStudent={setNewStudent}
          />
      )}


      {/* Internship Form */}
      {showApplyForInternshipForm && (
        <ApplyForInternshipForm 
          setShowApplyForInternshipForm={setShowApplyForInternshipForm}

        />
      )}

      {/* NewCourse Form */}
      {showApplyForNewCourseForm && (
        <ApplyForNewCourseForm
          setShowApplyForNewCourseForm={setShowApplyForNewCourseForm}
          handleCheckboxChange={handleCheckboxChange}
          
        />
      )}
      
      </div>
  );
};

      export default StudentDashboard;
