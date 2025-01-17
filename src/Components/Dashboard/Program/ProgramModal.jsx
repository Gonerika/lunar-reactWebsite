import React from "react";
import { X } from "lucide-react";

export function AddProgramModal({
  handleAddProgram,
  newProgram,
  setNewProgram,
  setShowAddProgramForm,
}) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-lg mx-4 relative h-[90vh] overflow-y-auto">
        <button
          onClick={() => setShowAddProgramForm(false)}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
        >
          <X className="h-6 w-6" />
        </button>
        <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
          Add New Program
        </h3>
        <form onSubmit={handleAddProgram} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              type="text"
              value={newProgram.title}
              onChange={(e) =>
                setNewProgram({ ...newProgram, title: e.target.value })
              }
              placeholder="Enter program title"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Start Date
            </label>
            <input
              type="date"
              value={newProgram.startDate}
              onChange={(e) =>
                setNewProgram({ ...newProgram, startDate: e.target.value })
              }
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              End Date
            </label>
            <input
              type="date"
              value={newProgram.endDate}
              onChange={(e) =>
                setNewProgram({ ...newProgram, endDate: e.target.value })
              }
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              value={newProgram.description}
              onChange={(e) =>
                setNewProgram({ ...newProgram, description: e.target.value })
              }
              placeholder="Enter program description"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              rows={4}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Type
            </label>
            <select
              value={newProgram.type}
              onChange={(e) =>
                setNewProgram({ ...newProgram, type: e.target.value })
              }
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            >
              <option value="">Select type</option>
              <option value="training">Training</option>
              <option value="workshop">Workshop</option>
              <option value="seminar">Seminar</option>
              <option value="conference">Conference</option>
            </select>
          </div>

          

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
          >
            Add Program
          </button>
        </form>
      </div>
    </div>
  );
}

export function ViewProgramDetailsModal({
  setSelectedProgram,
  selectedProgram,
}) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md mx-4 relative h-[70vh] overflow-y-auto">
        <button
          onClick={() => setSelectedProgram(null)}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
        >
          <X className="h-6 w-6" />
        </button>
        <h3 className="text-xl font-semibold text-gray-800 text-center mb-6">
          Program Details
        </h3>
        <div className="space-y-4">
          <p>
            <span className="font-semibold">Title:</span> {selectedProgram.title}
          </p>
          <p>
            <span className="font-semibold">Start Date:</span>{" "}
            {selectedProgram.startDate}
          </p>
          <p>
            <span className="font-semibold">End Date:</span>{" "}
            {selectedProgram.endDate}
          </p>
          <p>
            <span className="font-semibold">Description:</span>{" "}
            {selectedProgram.description}
          </p>
          <p>
            <span className="font-semibold">Type:</span> {selectedProgram.type}
          </p>
          
        </div>
      </div>
    </div>
  );
}

export function EditProgramModal({
  setShowEditProgramForm,
  programToEdit,
  handleUpdateProgram,
}) {
  const [editedProgram, setEditedProgram] = React.useState(programToEdit);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateProgram(editedProgram);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-lg mx-4 relative h-[90vh] overflow-y-auto">
        <button
          onClick={() => setShowEditProgramForm(false)}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
        >
          <X className="h-6 w-6" />
        </button>
        <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
          Edit Program
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              type="text"
              value={editedProgram.title}
              onChange={(e) =>
                setEditedProgram({ ...editedProgram, title: e.target.value })
              }
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Start Date
            </label>
            <input
              type="date"
              value={editedProgram.startDate}
              onChange={(e) =>
                setEditedProgram({
                  ...editedProgram,
                  startDate: e.target.value,
                })
              }
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              End Date
            </label>
            <input
              type="date"
              value={editedProgram.endDate}
              onChange={(e) =>
                setEditedProgram({
                  ...editedProgram,
                  endDate: e.target.value,
                })
              }
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              value={editedProgram.description}
              onChange={(e) =>
                setEditedProgram({
                  ...editedProgram,
                  description: e.target.value,
                })
              }
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              rows={4}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Type
            </label>
            <select
              value={editedProgram.type}
              onChange={(e) =>
                setEditedProgram({ ...editedProgram, type: e.target.value })
              }
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            >
              <option value="training">Training</option>
              <option value="workshop">Workshop</option>
              <option value="seminar">Seminar</option>
              <option value="conference">Conference</option>
            </select>
          </div>

          

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
          >
            Update Program
          </button>
        </form>
      </div>
    </div>
  );
}

export function DeleteProgramModal({
  setShowDeleteDialog,
  programToDelete,
  confirmDelete,
}) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md mx-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Confirm Delete
        </h3>
        <p className="text-gray-600 mb-6">
          Are you sure you want to delete program "{programToDelete.title}"? This
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