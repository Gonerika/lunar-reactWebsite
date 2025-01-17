import React from "react";
import { X } from "lucide-react";

export function AddClientModal({
  handleAddClient,
  newClient,
  setNewClient,
  setShowAddClientForm,
}) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-lg mx-4 relative h-[90vh] overflow-y-auto">
        <button
          onClick={() => setShowAddClientForm(false)}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
        >
          <X className="h-6 w-6" />
        </button>
        <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
          Add New Client
        </h3>
        <form onSubmit={handleAddClient} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              value={newClient.fullName}
              onChange={(e) =>
                setNewClient({ ...newClient, fullName: e.target.value })
              }
              placeholder="Enter client name"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Product
            </label>
            <input
              type="text"
              value={newClient.product}
              onChange={(e) =>
                setNewClient({ ...newClient, product: e.target.value })
              }
              placeholder="Enter product"
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
              value={newClient.startDate}
              onChange={(e) =>
                setNewClient({ ...newClient, startDate: e.target.value })
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
              value={newClient.endDate}
              onChange={(e) =>
                setNewClient({ ...newClient, endDate: e.target.value })
              }
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contact No.
            </label>
            <input
            id="contact"
              type="tel"
              placeholder="Enter contact number"
              pattern="[+]{0,1}[0-9]{10,15}" 
              value={newClient.contactNo}
              onChange={(e) =>
                setNewClient({ ...newClient, contactNo: e.target.value })
              }
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Package
            </label>
            <select
              value={newClient.package}
              onChange={(e) =>
                setNewClient({ ...newClient, package: e.target.value })
              }
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            >
              <option value="">Select package</option>
              <option value="1 Month">1 Month</option>
              <option value="6 Month">6 Month</option>
              <option value="1 Year">1 Year</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <select
              value={newClient.status}
              onChange={(e) =>
                setNewClient({ ...newClient, status: e.target.value })
              }
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            >
              <option value="">Select status</option>
              <option value="New">New</option>
              <option value="Expired">Expired</option>
              <option value="Re-Newed">Re-Newed</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
          >
            Add Client
          </button>
        </form>
      </div>
    </div>
  );
}

export function ViewClientDetailsModal({
  setSelectedClient,
  selectedClient,
}) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md mx-4 relative h-[70vh] overflow-y-auto">
        <button
          onClick={() => setSelectedClient(null)}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
        >
          <X className="h-6 w-6" />
        </button>
        <h3 className="text-xl font-semibold text-gray-800 text-center mb-6">
          Client Details
        </h3>
        <div className="space-y-4">
          <p>
            <span className="font-semibold">Full Name:</span> {selectedClient.fullName}
          </p>
          <p>
            <span className="font-semibold">Product:</span> {selectedClient.product}
          </p>
          <p>
            <span className="font-semibold">Start Date:</span> {selectedClient.startDate}
          </p>
          <p>
            <span className="font-semibold">End Date:</span> {selectedClient.endDate}
          </p>
          <p>
            <span className="font-semibold">Contact No:</span> {selectedClient.contactNo}
          </p>
          <p>
            <span className="font-semibold">Package:</span> {selectedClient.package}
          </p>
          <p>
            <span className="font-semibold">Status:</span>{" "}
            <span className={`px-2 py-1 rounded-full text-sm ${
              selectedClient.status === 'New' ? 'bg-green-100 text-green-800' :
              selectedClient.status === 'Expired' ? 'bg-red-100 text-red-800' :
              'bg-blue-100 text-blue-800'
            }`}>
              {selectedClient.status}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export function EditClientModal({
  setShowEditClientForm,
  clientToEdit,
  handleUpdateClient,
}) {
  const [editedClient, setEditedClient] = React.useState(clientToEdit);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateClient(editedClient);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-lg mx-4 relative h-[90vh] overflow-y-auto">
        <button
          onClick={() => setShowEditClientForm(false)}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
        >
          <X className="h-6 w-6" />
        </button>
        <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
          Edit Client
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              value={editedClient.fullName}
              onChange={(e) =>
                setEditedClient({ ...editedClient, fullName: e.target.value })
              }
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Product
            </label>
            <input
              type="text"
              value={editedClient.product}
              onChange={(e) =>
                setEditedClient({ ...editedClient, product: e.target.value })
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
              value={editedClient.startDate}
              onChange={(e) =>
                setEditedClient({ ...editedClient, startDate: e.target.value })
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
              value={editedClient.endDate}
              onChange={(e) =>
                setEditedClient({ ...editedClient, endDate: e.target.value })
              }
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contact Number
            </label>
            <input
            id="contact"
              type="tel"
              placeholder="Enter phone number"
              value={editedClient.contactNo}
              onChange={(e) =>
                setEditedClient({ ...editedClient, contactNo: e.target.value })
              }
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Package
            </label>
            <select
              value={editedClient.package}
              onChange={(e) =>
                setEditedClient({ ...editedClient, package: e.target.value })
              }
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            >
              <option value="1 Month">1 Month</option>
              <option value="6 Month">6 Month</option>
              <option value="1 Year">1 Year</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <select
              value={editedClient.status}
              onChange={(e) =>
                setEditedClient({ ...editedClient, status: e.target.value })
              }
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            >
              <option value="New">New</option>
              <option value="Expired">Expired</option>
              <option value="Re-Newed">Re-Newed</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
          >
            Update Client
          </button>
        </form>
      </div>
    </div>
  );
}

export function DeleteClientModal({
  setShowDeleteDialog,
  clientToDelete,
  confirmDelete,
}) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md mx-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Confirm Delete
        </h3>
        <p className="text-gray-600 mb-6">
          Are you sure you want to delete client "{clientToDelete.fullName}"? This
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