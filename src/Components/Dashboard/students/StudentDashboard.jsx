import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Plus, Search, X, Users, Calendar } from "lucide-react";
import { useParams } from "react-router-dom";

const Dashboard = () => {
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
          <Plus className="h-5 w-5" />
          Apply For Internship
        </button>
        <button
          onClick={() => setShowApplyForNewCourseForm(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 transition"
        >
          <Plus className="h-5 w-5" />
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
                  <td className="py-3 text-gray-800 font-medium">
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
                      className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500"
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
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md mx-4 relative h-[70vh] overflow-y-auto">
            <button
              onClick={() => setSelectedStudent(null)}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
            >
              <X className="h-6 w-6" />
            </button>
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-6">Student Details</h3>
            <p>
              <strong>Name:</strong> {selectedStudent.name}
            </p>
            <p>
              <strong>Email:</strong> {selectedStudent.email}
            </p>
            <p>
              <strong>Phone:</strong> {selectedStudent.phone}
            </p>
            <p>
              <strong>Address:</strong> {selectedStudent.address}
            </p>
            <p>
              <strong>Paid Amount:</strong> {selectedStudent.paidAmount}
            </p>
            <p>
              <strong>Remaining Amount:</strong> {selectedStudent.remainingAmount}
            </p>
            <div>
              <h4 className="text-lg font-semibold mt-4">Current Courses</h4>
              <ul className="list-disc list-inside">
                {selectedStudent.currentCourses.map((course, index) => (
                  <li key={index}>{course}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mt-4">Previous Courses</h4>
              <ul className="list-disc list-inside">
                {selectedStudent.previousCourses.map((course, index) => (
                  <li key={index}>
                    {course.course} - {course.date}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}


      {/* Add Student Form Popup */}
      {showAddStudentForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-lg mx-4 relative h-[70vh] overflow-y-auto">
            <button
              onClick={() => setShowAddStudentForm(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
            >
              <X className="h-6 w-6" />
            </button>
            <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
              Add New Student
            </h3>
            <form onSubmit={handleAddStudent} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={newStudent.name}
                  onChange={(e) =>
                    setNewStudent({ ...newStudent, name: e.target.value })
                  }
                  placeholder="Enter student name"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={newStudent.email}
                  onChange={(e) =>
                    setNewStudent({ ...newStudent, email: e.target.value })
                  }
                  placeholder="Enter student email"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  type="number"
                  value={newStudent.phone}
                  onChange={(e) =>
                    setNewStudent({ ...newStudent, phone: e.target.value })
                  }
                  placeholder="Enter student phone"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Address
                </label>
                <input
                  id="address"
                  type="text"
                  value={newStudent.address}
                  onChange={(e) =>
                    setNewStudent({ ...newStudent, address: e.target.value })
                  }
                  placeholder="Enter student address"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="paid-amount"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Paid Amount
                </label>
                <input
                  id="paid-amount"
                  type="number"
                  value={newStudent.paidAmount}
                  onChange={(e) =>
                    setNewStudent({ ...newStudent, paidAmount: e.target.value })
                  }
                  placeholder="Enter paid amount"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="remaining-amount"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Remaining Amount
                </label>
                <input
                  id="remaining-amount"
                  type="number"
                  value={newStudent.remainingAmount}
                  onChange={(e) =>
                    setNewStudent({
                      ...newStudent,
                      remainingAmount: e.target.value,
                    })
                  }
                  placeholder="Enter remaining amount"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
              >
                Add Student
              </button>
            </form>
          </div>
        </div>
      )}


      {/* Internship Form */}
      {showApplyForInternshipForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-2xl mx-4 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowApplyForInternshipForm(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
            >
              <X className="h-6 w-6" />
            </button>
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-4">
              Job/Internship Application
            </h3>
            {/* Form Section */}
            <form>
              {/* Personal Details */}
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your full name"
                    required
                    className="mt-2 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email address"
                    required
                    className="mt-2 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone number"
                    required
                    className="mt-2 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Job Preferences */}
              <div className="mt-6 space-y-4">
                <div>
                  <label
                    htmlFor="position"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Position Applied For
                  </label>
                  <select
                    id="position"
                    name="position"
                    className="mt-2 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  >
                    <option disabled defaultValue={""}>
                      Select a position
                    </option>
                    <option value="internship">Internship</option>
                    <option value="full-time">Full-time Job</option>
                    <option value="part-time">Part-time Job</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="portfolio"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Portfolio/LinkedIn (Optional)
                  </label>
                  <input
                    type="url"
                    id="portfolio"
                    name="portfolio"
                    placeholder="Provide a URL"
                    className="mt-2 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Upload Resume */}
              <div className="mt-6">
                <label
                  htmlFor="resume"
                  className="block text-sm font-medium text-gray-700"
                >
                  Upload Resume
                </label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  required
                  className="mt-2 w-full border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              {/* Cover Letter */}
              <div className="mt-6">
                <label
                  htmlFor="cover-letter"
                  className="block text-sm font-medium text-gray-700"
                >
                  Cover Letter
                </label>
                <textarea
                  id="cover-letter"
                  name="cover-letter"
                  rows="4"
                  placeholder="Write your cover letter here..."
                  required
                  className="mt-2 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center mt-8">
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 transition"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* NewCourse Form */}
      {showApplyForNewCourseForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-2xl mx-4 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowApplyForNewCourseForm(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
            >
              <X className="h-6 w-6" />
            </button>
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-4">
              Apply For New Course
            </h3>
            {/* Form Section */}
            <form>
              {/* Personal Details */}
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your full name"
                    required
                    className="mt-2 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email address"
                    required
                    className="mt-2 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone number"
                    required
                    className="mt-2 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Course Selection */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Select Courses
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {["Java", "Python", "C", "HTML", "CSS", "Django", "React", "Flutter"].map((course, index) => (
                    <div key={index} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`course-${course.toLowerCase()}`}
                        name="course"
                        value={course.toLowerCase()}
                        onChange={handleCheckboxChange}
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
              <div className="flex justify-center mt-8">
                <button
                  type="submit"
                  className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-500 transition"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      
      </div>
  );
};

      export default Dashboard;
