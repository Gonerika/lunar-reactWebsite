import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Plus, Search, BookOpen } from "lucide-react";
import {
  AddProgramModal,
  ViewProgramDetailsModal,
  EditProgramModal,
  DeleteProgramModal,
} from "./ProgramModal";

const ProgramDashboard = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [showAddProgramForm, setShowAddProgramForm] = useState(false);
  const [showEditProgramForm, setShowEditProgramForm] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [programToEdit, setProgramToEdit] = useState(null);
  const [programToDelete, setProgramToDelete] = useState(null);

  const [programs, setPrograms] = useState([
    {
      id: "1",
      title: "Web Development Bootcamp",
      startDate: "2024-03-01",
      endDate: "2024-06-30",
      description: "Comprehensive web development training program covering frontend and backend technologies.",
      type: "training",
    },
    {
      id: "2",
      title: "Data Science Workshop",
      startDate: "2024-04-15",
      endDate: "2024-04-20",
      description: "Intensive workshop on data analysis and machine learning fundamentals.",
      type: "workshop",
    }
  ]);

  const [newProgram, setNewProgram] = useState({
    title: "",
    startDate: "",
    endDate: "",
    description: "",
    type: "",
    status: ""
  });

  const filteredPrograms = programs.filter(
    (program) =>
      program.title.toLowerCase().includes(search.toLowerCase()) ||
      program.type.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastProgram = currentPage * itemsPerPage;
  const indexOfFirstProgram = indexOfLastProgram - itemsPerPage;
  const currentPrograms = filteredPrograms.slice(
    indexOfFirstProgram,
    indexOfLastProgram
  );

  const totalPages = Math.ceil(filteredPrograms.length / itemsPerPage);

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

  const handleAddProgram = (e) => {
    e.preventDefault();
    setPrograms((prevPrograms) => [
      ...prevPrograms,
      { ...newProgram, id: (prevPrograms.length + 1).toString() }
    ]);
    setNewProgram({
      title: "",
      startDate: "",
      endDate: "",
      description: "",
      type: "",
      status: ""
    });
    setShowAddProgramForm(false);
  };

  const handleEditProgram = (program) => {
    setProgramToEdit(program);
    setShowEditProgramForm(true);
  };

  const handleDeleteProgram = (program) => {
    setProgramToDelete(program);
    setShowDeleteDialog(true);
  };

  const confirmDelete = () => {
    setPrograms(programs.filter(prog => prog.id !== programToDelete.id));
    setShowDeleteDialog(false);
    setProgramToDelete(null);
  };

  const handleUpdateProgram = (updatedProgram) => {
    setPrograms(programs.map(prog =>
      prog.id === updatedProgram.id ? updatedProgram : prog
    ));
    setShowEditProgramForm(false);
    setProgramToEdit(null);
  };

  useEffect(() => {
    if (showAddProgramForm || showEditProgramForm || selectedProgram || showDeleteDialog) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showAddProgramForm, showEditProgramForm, selectedProgram, showDeleteDialog]);

  return (
    <div className="px-2 sm:px-4 lg:px-8 py-4 sm:py-8 min-h-screen relative">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-end items-stretch sm:items-center gap-2 mb-6">
        <button
          onClick={() => setShowAddProgramForm(true)}
          className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 transition text-sm sm:text-base"
        >
          <Plus className="h-4 w-4 sm:h-5 sm:w-5" />
          Add Program
        </button>
      </div>

      {/* Program Table */}
      <div className="bg-white rounded-xl p-3 sm:p-6 shadow-lg border border-blue-100">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 flex items-center gap-2">
            <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
            Programs List
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
                <th className="py-3 px-2 sm:px-3 text-left text-gray-600 font-medium">Title</th>
                <th className="py-3 px-2 sm:px-3 text-left text-gray-600 font-medium">Start Date</th>
                <th className="py-3 px-2 sm:px-3 text-left text-gray-600 font-medium">End Date</th>
                <th className="py-3 px-2 sm:px-3 text-left text-gray-600 font-medium">Type</th>
                <th className="py-3 px-2 sm:px-3 text-left text-gray-600 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentPrograms.map((program, index) => (
                <tr key={program.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-2 sm:py-3 px-2 sm:px-3 text-gray-800">{indexOfFirstProgram + index + 1}</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-3 text-gray-800">
                    {program.title.length > 10
                      ? `${program.title.slice(0, 10)}...`
                      : program.title}
                  </td>
                  <td className="py-2 sm:py-3 px-2 sm:px-3 text-gray-600">{program.startDate}</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-3 text-gray-600">{program.endDate}</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-3 text-gray-600">{program.type}</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-3">
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => setSelectedProgram(program)}
                        className="bg-blue-600 text-white py-1 px-2 rounded-lg hover:bg-blue-500 text-xs sm:text-sm whitespace-nowrap"
                      >
                        View
                      </button>
                      <button
                        onClick={() => handleEditProgram(program)}
                        className="bg-green-600 text-white py-1 px-2 rounded-lg hover:bg-green-500 text-xs sm:text-sm whitespace-nowrap"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteProgram(program)}
                        className="bg-red-600 text-white py-1 px-2 rounded-lg hover:bg-red-500 text-xs sm:text-sm whitespace-nowrap"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredPrograms.length === 0 && (
            <div className="text-center py-4 text-gray-500 text-sm">No results found</div>
          )}
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-sm w-full sm:w-auto justify-center ${currentPage === 1
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
          className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-sm w-full sm:w-auto justify-center ${currentPage === totalPages
            ? "bg-gray-300 text-gray-500"
            : "bg-blue-600 text-white hover:bg-blue-500"
            }`}
        >
          Next
          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
      </div>

      {/* Modals */}
      {selectedProgram && (
        <ViewProgramDetailsModal
          setSelectedProgram={setSelectedProgram}
          selectedProgram={selectedProgram}
        />
      )}

      {showAddProgramForm && (
        <AddProgramModal
          setShowAddProgramForm={setShowAddProgramForm}
          handleAddProgram={handleAddProgram}
          newProgram={newProgram}
          setNewProgram={setNewProgram}
        />
      )}

      {showEditProgramForm && (
        <EditProgramModal
          setShowEditProgramForm={setShowEditProgramForm}
          programToEdit={programToEdit}
          handleUpdateProgram={handleUpdateProgram}
        />
      )}

      {showDeleteDialog && (
        <DeleteProgramModal
          setShowDeleteDialog={setShowDeleteDialog}
          programToDelete={programToDelete}
          confirmDelete={confirmDelete}
        />
      )}
    </div>
  );
};

export default ProgramDashboard;