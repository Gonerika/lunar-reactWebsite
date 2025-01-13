import React from "react";
import { X } from "lucide-react";

export function AddEmployeeModal({
  handleAddEmployee,
  newEmployee,
  setNewEmployee,
  setShowAddEmployeeForm,
}) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-lg mx-4 relative h-[90vh] overflow-y-auto">
        <button
          onClick={() => setShowAddEmployeeForm(false)}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
        >
          <X className="h-6 w-6" />
        </button>
        <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
          Add New Employee
        </h3>
        <form onSubmit={handleAddEmployee} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              value={newEmployee.name}
              onChange={(e) =>
                setNewEmployee({ ...newEmployee, name: e.target.value })
              }
              placeholder="Enter employee name"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Position
            </label>
            <input
              type="text"
              value={newEmployee.position}
              onChange={(e) =>
                setNewEmployee({ ...newEmployee, position: e.target.value })
              }
              placeholder="Enter position"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date of Hire
            </label>
            <input
              type="date"
              value={newEmployee.dateOfHire}
              onChange={(e) =>
                setNewEmployee({ ...newEmployee, dateOfHire: e.target.value })
              }
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Arrival Time
            </label>
            <input
              type="time"
              value={newEmployee.arrivalTime}
              onChange={(e) =>
                setNewEmployee({ ...newEmployee, arrivalTime: e.target.value })
              }
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Departure Time
            </label>
            <input
              type="time"
              value={newEmployee.departureTime}
              onChange={(e) =>
                setNewEmployee({ ...newEmployee, departureTime: e.target.value })
              }
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Salary
            </label>
            <input
              type="number"
              value={newEmployee.salary}
              onChange={(e) =>
                setNewEmployee({ ...newEmployee, salary: e.target.value })
              }
              placeholder="Enter salary"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Employment Type
            </label>
            <select
              value={newEmployee.type}
              onChange={(e) =>
                setNewEmployee({ ...newEmployee, type: e.target.value })
              }
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            >
              <option value="">Select type</option>
              <option value="full-time">Full-time</option>
              <option value="part-time">Part-time</option>
              <option value="contract">Contract</option>
              <option value="internship">Internship</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
          >
            Add Employee
          </button>
        </form>
      </div>
    </div>
  );
}

export function ViewEmployeeDetailsModal({
  setSelectedEmployee,
  selectedEmployee,
}) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md mx-4 relative  h-[70vh] overflow-y-auto">
        <button
          onClick={() => setSelectedEmployee(null)}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
        >
          <X className="h-6 w-6" />
        </button>
        <h3 className="text-xl font-semibold text-gray-800 text-center mb-6">
          Employee Details
        </h3>
        <div className="space-y-4">
          <p>
            <span className="font-semibold">Name:</span> {selectedEmployee.name}
          </p>
          <p>
            <span className="font-semibold">Position:</span>{" "}
            {selectedEmployee.position}
          </p>
          <p>
            <span className="font-semibold">Date of Hire:</span>{" "}
            {selectedEmployee.dateOfHire}
          </p>
          <p>
            <span className="font-semibold">Arrival Time:</span>{" "}
            {selectedEmployee.arrivalTime}
          </p>
          <p>
            <span className="font-semibold">Departure Time:</span>{" "}
            {selectedEmployee.departureTime}
          </p>
          <p>
            <span className="font-semibold">Salary:</span> $
            {selectedEmployee.salary}
          </p>
          <p>
            <span className="font-semibold">Employment Type:</span>{" "}
            {selectedEmployee.type}
          </p>
        </div>
      </div>
    </div>
  );
}

export function EditEmployeeModal({
  setShowEditEmployeeForm,
  employeeToEdit,
  handleUpdateEmployee,
}) {
  const [editedEmployee, setEditedEmployee] = React.useState(employeeToEdit);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateEmployee(editedEmployee);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-lg mx-4 relative h-[90vh] overflow-y-auto">
        <button
          onClick={() => setShowEditEmployeeForm(false)}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
        >
          <X className="h-6 w-6" />
        </button>
        <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
          Edit Employee
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              value={editedEmployee.name}
              onChange={(e) =>
                setEditedEmployee({ ...editedEmployee, name: e.target.value })
              }
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Position
            </label>
            <input
              type="text"
              value={editedEmployee.position}
              onChange={(e) =>
                setEditedEmployee({ ...editedEmployee, position: e.target.value })
              }
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date of Hire
            </label>
            <input
              type="date"
              value={editedEmployee.dateOfHire}
              onChange={(e) =>
                setEditedEmployee({
                  ...editedEmployee,
                  dateOfHire: e.target.value,
                })
              }
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Arrival Time
            </label>
            <input
              type="time"
              value={editedEmployee.arrivalTime}
              onChange={(e) =>
                setEditedEmployee({
                  ...editedEmployee,
                  arrivalTime: e.target.value,
                })
              }
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Departure Time
            </label>
            <input
              type="time"
              value={editedEmployee.departureTime}
              onChange={(e) =>
                setEditedEmployee({
                  ...editedEmployee,
                  departureTime: e.target.value,
                })
              }
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Salary
            </label>
            <input
              type="number"
              value={editedEmployee.salary}
              onChange={(e) =>
                setEditedEmployee({ ...editedEmployee, salary: e.target.value })
              }
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Employment Type
            </label>
            <select
              value={editedEmployee.type}
              onChange={(e) =>
                setEditedEmployee({ ...editedEmployee, type: e.target.value })
              }
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            >
              <option value="full-time">Full-time</option>
              <option value="part-time">Part-time</option>
              <option value="contract">Contract</option>
              <option value="internship">Internship</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
          >
            Update Employee
          </button>
        </form>
      </div>
    </div>
  );
}

export function DeleteEmployeeModal({
  setShowDeleteDialog,
  employeeToDelete,
  confirmDelete,
}) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md mx-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Confirm Delete
        </h3>
        <p className="text-gray-600 mb-6">
          Are you sure you want to delete employee "{employeeToDelete.name}"? This
          action cannot be undone.
        </p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={() => setShowDeleteDialog(false)}
            className="px-4 py-2 text-gray-600 hover:text-gray-800"
          >
            Cancel
          </button>
          <button
            onClick={confirmDelete}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}