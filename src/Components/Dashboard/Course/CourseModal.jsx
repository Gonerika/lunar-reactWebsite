import React, { useEffect, useState } from "react";
import { X } from "lucide-react";

export function AddCourseFormModal({
    setShowAddCourseForm,
    setNewCourse,
    newCourse,
    handleAddCourse,
}) {
    // State for email validation error
    const [emailError, setEmailError] = useState(false);

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    const handleEmailChange = (e) => {
        const email = e.target.value;
        setNewApplication({ ...newApplication, email });
        // Check for email validation using regex
        setEmailError(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email !== "");
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (emailError) {
            alert("Please correct the email field before submitting.");
            return;
        }
        handleAddCourse();
    };
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative">
                <button
                    onClick={() => setShowAddCourseForm(false)}
                    className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
                >
                    <X className="h-6 w-6" />
                </button>

                <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                    Add Course Application
                </h3>

                <form
                    onSubmit={handleAddCourse}
                    className="space-y-4 overflow-y-auto max-h-[400px] px-2"
                >
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Enter full name"
                            value={newCourse.name}
                            onChange={(e) =>
                                setNewCourse({ ...newCourse, name: e.target.value })
                            }
                            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Enter email address"
                            value={newCourse.email}
                            onChange={handleEmailChange}
                            className={`w-full p-2 border rounded-lg focus:ring-2 focus:outline-none ${emailError
                                    ? "border-red-500 focus:ring-red-500"
                                    : "border-gray-300 focus:ring-blue-500"
                                }`}
                            required
                        />
                        {emailError && (
                            <p className="text-red-500 text-sm mt-1">Please enter a valid email address.</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
                            Type
                        </label>
                        <select
                            id="type"
                            value={newCourse.type}
                            onChange={(e) =>
                                setNewCourse({ ...newCourse, type: e.target.value })
                            }
                            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            required
                        >
                            <option value="">Select Type</option>
                            <option value="type1">Type 1</option>
                            <option value="type2">Type 2</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-1">
                            Program
                        </label>
                        <select
                            id="program"
                            value={newCourse.program}
                            onChange={(e) =>
                                setNewCourse({ ...newCourse, program: e.target.value })
                            }
                            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            required
                        >
                            <option value="">Select Program</option>
                            <option value="course">Course</option>
                            <option value="training">Training</option>
                        </select>
                    </div>

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="w-full sm:w-auto py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition"
                        >
                            Add Course
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export function ViewDetailsModal({
    setSelectedCourse,
    selectedCourse,
    handleStatusChange,
}) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md max-h-[80vh] overflow-y-auto">
                <div className="flex items-end justify-end">
                    <button
                        onClick={() => setSelectedCourse(null)}
                        className="text-gray-600 hover:text-gray-800"
                    >
                        <X className="h-6 w-6" />
                    </button>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Course Application Details
                </h3>
                <div className="space-y-3">
                    <p className="text-sm text-gray-600">
                        <strong>Name:</strong> {selectedCourse.name}
                    </p>
                    <p className="text-sm text-gray-600">
                        <strong>Email:</strong> {selectedCourse.email}
                    </p>
                    <p className="text-sm text-gray-600">
                        <strong>Type:</strong>{" "}
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                            {selectedCourse.type}
                        </span>
                    </p>
                    <p className="text-sm text-gray-600">
                        <strong>Program:</strong>{" "}
                        <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">
                            {selectedCourse.program}
                        </span>
                    </p>
                    <p className="text-sm text-gray-600">
                        <strong>Status:</strong>{" "}
                        <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${selectedCourse.status === "pending"
                                    ? "bg-yellow-100 text-yellow-800"
                                    : selectedCourse.status === "accepted"
                                        ? "bg-green-100 text-green-800"
                                        : "bg-red-100 text-red-800"
                                }`}
                        >
                            {selectedCourse.status}
                        </span>
                    </p>
                </div>

                {selectedCourse.status === "pending" && (
                    <div className="mt-6 flex gap-2 justify-center">
                        <button
                            onClick={() => {
                                handleStatusChange(selectedCourse.id, "accepted");
                                setSelectedCourse(null);
                            }}
                            className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-500"
                        >
                            Accept
                        </button>
                        <button
                            onClick={() => {
                                handleStatusChange(selectedCourse.id, "rejected");
                                setSelectedCourse(null);
                            }}
                            className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-500"
                        >
                            Reject
                        </button>
                    </div>
                )}

                
            </div>
        </div>
    );
}