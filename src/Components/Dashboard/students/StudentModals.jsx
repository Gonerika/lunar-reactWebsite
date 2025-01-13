import React from "react";
import { X } from "lucide-react";


export function AddStudentModal({ handleAddStudent, newStudent, setNewStudent, setShowAddStudentForm }) {
    return (
        <>
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
        </>
    )
}

export function ApplyForInternshipForm({ setShowApplyForInternshipForm }) {
    return (
        <>
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
        </>
    )
}
export function ApplyForNewCourseForm({ setShowApplyForNewCourseForm, handleCheckboxChange }) {
    return (
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
    );
}
export function ViewStudentDetailsModal({ setSelectedStudent, selectedStudent}) {
    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md mx-4 relative h-[70vh] overflow-y-auto">
                    <button
                        onClick={() => setSelectedStudent(null)}
                        className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
                    >
                        <X className="h-6 w-6" />
                    </button>
                    <h3 className="text-xl font-semibold text-gray-800 text-center mb-6">Student Details</h3>
                    <div className="space-y-4">
                    <p>
                        <span className="font-semibold">Name:</span> {selectedStudent.name}
                    </p>
                    <p>
                        <span className="font-semibold">Email:</span> {selectedStudent.email}
                    </p>
                    <p>
                        <span className="font-semibold">Phone:</span> {selectedStudent.phone}
                    </p>
                    <p>
                        <span className="font-semibold">Address:</span> {selectedStudent.address}
                    </p>
                    <p>
                        <span className="font-semibold">Paid Amount:</span> {selectedStudent.paidAmount}
                    </p>
                    <p>
                        <span className="font-semibold">Remaining Amount:</span> {selectedStudent.remainingAmount}
                    </p>
                    </div>
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
        </>
    )
}