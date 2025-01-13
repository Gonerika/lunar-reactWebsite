import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Plus, Search, Users } from "lucide-react";
import { AddEmployeeModal, ViewEmployeeDetailsModal, EditEmployeeModal, DeleteEmployeeModal } from "./EmployeeModal";

const EmployeeDashboard = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [showAddEmployeeForm, setShowAddEmployeeForm] = useState(false);
  const [showEditEmployeeForm, setShowEditEmployeeForm] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [employeeToEdit, setEmployeeToEdit] = useState(null);
  const [employeeToDelete, setEmployeeToDelete] = useState(null);

  const [employees, setEmployees] = useState([
    {
      id: "1",
      name: "John Smith",
      position: "Senior Developer",
      dateOfHire: "2023-01-15",
      arrivalTime: "09:00",
      departureTime: "17:00",
      salary: "85000",
      type: "full-time"
    },
    {
      id: "2",
      name: "Sarah Johnson",
      position: "UI/UX Designer",
      dateOfHire: "2023-03-20",
      arrivalTime: "09:30",
      departureTime: "17:30",
      salary: "75000",
      type: "contract"
    }
  ]);

  const [newEmployee, setNewEmployee] = useState({
    name: "",
    position: "",
    dateOfHire: "",
    arrivalTime: "",
    departureTime: "",
    salary: "",
    type: ""
  });

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.name.toLowerCase().includes(search.toLowerCase()) ||
      employee.position.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastEmployee = currentPage * itemsPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - itemsPerPage;
  const currentEmployees = filteredEmployees.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );

  const totalPages = Math.ceil(filteredEmployees.length / itemsPerPage);

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

  const handleAddEmployee = (e) => {
    e.preventDefault();
    setEmployees((prevEmployees) => [
      ...prevEmployees,
      { ...newEmployee, id: (prevEmployees.length + 1).toString() }
    ]);
    setNewEmployee({
      name: "",
      position: "",
      dateOfHire: "",
      arrivalTime: "",
      departureTime: "",
      salary: "",
      type: ""
    });
    setShowAddEmployeeForm(false);
  };

  const handleEditEmployee = (employee) => {
    setEmployeeToEdit(employee);
    setShowEditEmployeeForm(true);
  };

  const handleDeleteEmployee = (employee) => {
    setEmployeeToDelete(employee);
    setShowDeleteDialog(true);
  };

  const confirmDelete = () => {
    setEmployees(employees.filter(emp => emp.id !== employeeToDelete.id));
    setShowDeleteDialog(false);
    setEmployeeToDelete(null);
  };

  const handleUpdateEmployee = (updatedEmployee) => {
    setEmployees(employees.map(emp => 
      emp.id === updatedEmployee.id ? updatedEmployee : emp
    ));
    setShowEditEmployeeForm(false);
    setEmployeeToEdit(null);
  };

  useEffect(() => {
    if (showAddEmployeeForm || showEditEmployeeForm || selectedEmployee || showDeleteDialog) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showAddEmployeeForm, showEditEmployeeForm, selectedEmployee, showDeleteDialog]);

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 min-h-screen relative">
      {/* Header Section */}
      <div className="flex justify-end items-center mb-6">
        <button
          onClick={() => setShowAddEmployeeForm(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 transition"
        >
          <Plus className="h-5 w-5" />
          Add Employee
        </button>
      </div>

      {/* Employee Table */}
      <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
            <Users className="h-6 w-6 text-blue-600" />
            Employees List
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
                <th className="py-3 text-left text-gray-600 font-medium">Position</th>
                <th className="py-3 text-left text-gray-600 font-medium">Date of Hire</th>
                <th className="py-3 text-left text-gray-600 font-medium">Salary</th>
                <th className="py-3 text-left text-gray-600 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentEmployees.map((employee, index) => (
                <tr key={employee.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 text-gray-800">{indexOfFirstEmployee + index + 1}</td>
                  <td className="py-3 text-gray-800">
                    {employee.name.length > 10
                      ? `${employee.name.slice(0, 10)}...`
                      : employee.name}
                  </td>
                  <td className="py-3 text-gray-600">
                    {employee.position.length > 10
                      ? `${employee.position.slice(0, 10)}...`
                      : employee.position}
                  </td>
                  <td className="py-3 text-gray-600">{employee.dateOfHire}</td>
                  <td className="py-3 text-gray-600">Rs.{employee.salary}</td>
                  <td className="py-3 space-x-2">
                    <button
                      onClick={() => setSelectedEmployee(employee)}
                      className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 text-sm"
                    >
                      View
                    </button>
                    <button
                      onClick={() => handleEditEmployee(employee)}
                      className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-500 text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteEmployee(employee)}
                      className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-500 text-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredEmployees.length === 0 && (
            <div className="text-center py-4 text-gray-500">No results found</div>
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

      {/* Modals */}
      {selectedEmployee && (
        <ViewEmployeeDetailsModal
          setSelectedEmployee={setSelectedEmployee}
          selectedEmployee={selectedEmployee}
        />
      )}

      {showAddEmployeeForm && (
        <AddEmployeeModal
          setShowAddEmployeeForm={setShowAddEmployeeForm}
          handleAddEmployee={handleAddEmployee}
          newEmployee={newEmployee}
          setNewEmployee={setNewEmployee}
        />
      )}

      {showEditEmployeeForm && (
        <EditEmployeeModal
          setShowEditEmployeeForm={setShowEditEmployeeForm}
          employeeToEdit={employeeToEdit}
          handleUpdateEmployee={handleUpdateEmployee}
        />
      )}

      {showDeleteDialog && (
        <DeleteEmployeeModal
          setShowDeleteDialog={setShowDeleteDialog}
          employeeToDelete={employeeToDelete}
          confirmDelete={confirmDelete}
        />
      )}
    </div>
  );
};

export default EmployeeDashboard;