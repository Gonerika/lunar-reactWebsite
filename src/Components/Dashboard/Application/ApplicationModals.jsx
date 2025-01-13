import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

export function AddApplicationFormModal({
    setShowAddApplicationForm,
    setNewApplication,
    newApplication,
    handleAddApplication,
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
        handleAddApplication();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative">
                <button
                    onClick={() => setShowAddApplicationForm(false)}
                    className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
                >
                    <X className="h-6 w-6" />
                </button>

                <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                    Add Application
                </h3>

                <form
                    onSubmit={handleFormSubmit}
                    className="space-y-4 overflow-y-auto max-h-[400px] px-2"
                >
                    {/* Full Name */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Enter full name"
                            value={newApplication.name}
                            onChange={(e) =>
                                setNewApplication({ ...newApplication, name: e.target.value })
                            }
                            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Enter email address"
                            value={newApplication.email}
                            onChange={handleEmailChange}
                            className={`w-full p-2 border rounded-lg focus:ring-2 focus:outline-none ${
                                emailError
                                    ? "border-red-500 focus:ring-red-500"
                                    : "border-gray-300 focus:ring-blue-500"
                            }`}
                            required
                        />
                        {emailError && (
                            <p className="text-red-500 text-sm mt-1">Please enter a valid email address.</p>
                        )}
                    </div>

                    {/* Contact Number */}
                    <div>
                        <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-1">
                            Contact Number
                        </label>
                        <div className="flex items-center space-x-2">
                            <select
                                id="country-code"
                                value={newApplication.countryCode}
                                onChange={(e) =>
                                    setNewApplication({ ...newApplication, countryCode: e.target.value })
                                }
                                className="p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                required
                            >
                                <option value="+1">+1 (USA)</option>
                                <option value="+44">+44 (UK)</option>
                                <option value="+91">+91 (India)</option>
                                <option value="+977">+977 (Nepal)</option>
                                <option value="+61">+61 (Australia)</option>
                                <option value="+81">+81 (Japan)</option>
                                {/* Add more country codes as needed */}
                            </select>
                            <input
                                id="contact"
                                type="tel"
                                placeholder="Enter phone number"
                                value={newApplication.contact}
                                onChange={(e) =>
                                    setNewApplication({ ...newApplication, contact: e.target.value })
                                }
                                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                required
                            />
                        </div>
                    </div>

                    {/* Resume URL */}
                    <div>
                        <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">
                            Resume URL
                        </label>
                        <input
                            id="resume"
                            type="url"
                            placeholder="Enter resume URL"
                            value={newApplication.resume}
                            onChange={(e) =>
                                setNewApplication({ ...newApplication, resume: e.target.value })
                            }
                            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="w-full sm:w-auto py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition"
                        >
                            Add Application
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export function ViewDetailsModal({
    setSelectedApplication,
    selectedApplication,
    handleStatusChange,
    handleDelete,
}) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md max-h-[80vh] overflow-y-auto">
                <div className="flex items-end justify-end">
                    <button
                        onClick={() => setSelectedApplication(null)}
                        className="text-gray-600 hover:text-gray-800"
                    >
                        <X className="h-6 w-6" />
                    </button>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Application Details
                </h3>
                <div className="space-y-3">
                    <p className="text-sm text-gray-600">
                        <strong>Name:</strong> {selectedApplication.name}
                    </p>
                    <p className="text-sm text-gray-600">
                        <strong>Email:</strong> {selectedApplication.email}
                    </p>
                    <p className="text-sm text-gray-600">
                        <strong>Contact:</strong> {selectedApplication.contact}
                    </p>
                    <p className="text-sm text-gray-600">
                        <strong>Status:</strong>{" "}
                        <span
                            className={`${selectedApplication.status === "pending"
                                ? "text-yellow-600"
                                : selectedApplication.status === "accepted"
                                    ? "text-green-600"
                                    : "text-red-600"
                                } font-semibold`}
                        >
                            {selectedApplication.status}
                        </span>
                    </p>
                    <p className="text-sm text-gray-600">
                        <strong>Resume:</strong>{" "}
                        <a
                            href={selectedApplication.resume}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800"
                        >
                            View Resume
                        </a>
                    </p>
                </div>

                {selectedApplication.status === "pending" && (
                    <div className="mt-6 flex gap-2 justify-center">
                        <button
                            onClick={() => {
                                handleStatusChange(selectedApplication.id, "accepted");
                                setSelectedApplication(null);
                            }}
                            className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-500"
                        >
                            Accept
                        </button>
                        <button
                            onClick={() => {
                                handleStatusChange(selectedApplication.id, "rejected");
                                setSelectedApplication(null);
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