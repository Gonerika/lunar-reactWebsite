import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Plus, Search, Users } from "lucide-react";
import {
  AddClientModal,
  ViewClientDetailsModal,
  EditClientModal,
  DeleteClientModal,
} from "./ClientModal";

const ClientDashboard = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [selectedClient, setSelectedClient] = useState(null);
  const [showAddClientForm, setShowAddClientForm] = useState(false);
  const [showEditClientForm, setShowEditClientForm] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [clientToEdit, setClientToEdit] = useState(null);
  const [clientToDelete, setClientToDelete] = useState(null);

  const [clients, setClients] = useState([
    {
      id: "1",
      fullName: "John Smith",
      product: "Website Development",
      startDate: "2024-01-15",
      endDate: "2024-02-15",
      contactNo: "9876543210",
      package: "1 Month",
      status: "New"
    },
    {
      id: "2",
      fullName: "Sarah Johnson",
      product: "Mobile App",
      startDate: "2023-08-20",
      endDate: "2024-08-20",
      contactNo: "9876543211",
      package: "1 Year",
      status: "Re-Newed"
    }
  ]);

  const [newClient, setNewClient] = useState({
    fullName: "",
    product: "",
    startDate: "",
    endDate: "",
    contactNo: "",
    package: "",
    status: ""
  });

  const filteredClients = clients.filter(
    (client) =>
      client.fullName.toLowerCase().includes(search.toLowerCase()) ||
      client.product.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastClient = currentPage * itemsPerPage;
  const indexOfFirstClient = indexOfLastClient - itemsPerPage;
  const currentClients = filteredClients.slice(
    indexOfFirstClient,
    indexOfLastClient
  );

  const totalPages = Math.ceil(filteredClients.length / itemsPerPage);

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

  const handleAddClient = (e) => {
    e.preventDefault();
    setClients((prevClients) => [
      ...prevClients,
      { ...newClient, id: (prevClients.length + 1).toString() }
    ]);
    setNewClient({
      fullName: "",
      product: "",
      startDate: "",
      endDate: "",
      contactNo: "",
      package: "",
      status: ""
    });
    setShowAddClientForm(false);
  };

  const handleEditClient = (client) => {
    setClientToEdit(client);
    setShowEditClientForm(true);
  };

  const handleDeleteClient = (client) => {
    setClientToDelete(client);
    setShowDeleteDialog(true);
  };

  const confirmDelete = () => {
    setClients(clients.filter(client => client.id !== clientToDelete.id));
    setShowDeleteDialog(false);
    setClientToDelete(null);
  };

  const handleUpdateClient = (updatedClient) => {
    setClients(clients.map(client =>
      client.id === updatedClient.id ? updatedClient : client
    ));
    setShowEditClientForm(false);
    setClientToEdit(null);
  };

  useEffect(() => {
    if (showAddClientForm || showEditClientForm || selectedClient || showDeleteDialog) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showAddClientForm, showEditClientForm, selectedClient, showDeleteDialog]);

  return (
    <div className="px-2 sm:px-4 lg:px-8 py-4 sm:py-8 min-h-screen relative">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-end items-stretch sm:items-center gap-2 mb-6">
        <button
          onClick={() => setShowAddClientForm(true)}
          className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 transition text-sm sm:text-base"
        >
          <Plus className="h-4 w-4 sm:h-5 sm:w-5" />
          Add Client
        </button>
      </div>

      {/* Client Table */}
      <div className="bg-white rounded-xl p-3 sm:p-6 shadow-lg border border-blue-100">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 flex items-center gap-2">
            <Users className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
            Clients List
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
                <th className="py-3 px-2 sm:px-3 text-left text-gray-600 font-medium">Full Name</th>
                <th className="py-3 px-2 sm:px-3 text-left text-gray-600 font-medium">Product</th>
                <th className="py-3 px-2 sm:px-3 text-left text-gray-600 font-medium">Start Date</th>
                <th className="py-3 px-2 sm:px-3 text-left text-gray-600 font-medium">End Date</th>
                <th className="py-3 px-2 sm:px-3 text-left text-gray-600 font-medium">Contact No.</th>
                <th className="py-3 px-2 sm:px-3 text-left text-gray-600 font-medium">Package</th>
                <th className="py-3 px-2 sm:px-3 text-left text-gray-600 font-medium">Status</th>
                <th className="py-3 px-2 sm:px-3 text-left text-gray-600 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentClients.map((client, index) => (
                <tr key={client.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-2 sm:py-3 px-2 sm:px-3 text-gray-800">{indexOfFirstClient + index + 1}</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-3 text-gray-800">
                    {client.fullName.length > 10
                      ? `${client.fullName.slice(0, 10)}...`
                      : client.fullName}
                  </td>
                  <td className="py-2 sm:py-3 px-2 sm:px-3 text-gray-600">
                    {client.product.length > 10
                      ? `${client.product.slice(0, 10)}...`
                      : client.product}
                  </td>
                  <td className="py-2 sm:py-3 px-2 sm:px-3 text-gray-600">{client.startDate}</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-3 text-gray-600">{client.endDate}</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-3 text-gray-600">{client.contactNo}</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-3 text-gray-600">{client.package}</td>
                  <td className="py-3">
                    <span className={`px-2 py-1 rounded-full text-xs sm:text-sm font-medium ${client.status === 'New' ? 'bg-green-100 text-green-800' :
                      client.status === 'Expired' ? 'bg-red-100 text-red-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                      {client.status}
                    </span>
                  </td>
                  <td className="py-2 sm:py-3 px-2 sm:px-3">
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => setSelectedClient(client)}
                        className="bg-blue-600 text-white py-1 px-2 rounded-lg hover:bg-blue-500 text-xs sm:text-sm whitespace-nowrap"
                      >
                        View
                      </button>
                      <button
                        onClick={() => handleEditClient(client)}
                        className="bg-green-600 text-white py-1 px-2 rounded-lg hover:bg-green-500 text-xs sm:text-sm whitespace-nowrap"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteClient(client)}
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
          {filteredClients.length === 0 && (
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
      {selectedClient && (
        <ViewClientDetailsModal
          setSelectedClient={setSelectedClient}
          selectedClient={selectedClient}
        />
      )}

      {showAddClientForm && (
        <AddClientModal
          setShowAddClientForm={setShowAddClientForm}
          handleAddClient={handleAddClient}
          newClient={newClient}
          setNewClient={setNewClient}
        />
      )}

      {showEditClientForm && (
        <EditClientModal
          setShowEditClientForm={setShowEditClientForm}
          clientToEdit={clientToEdit}
          handleUpdateClient={handleUpdateClient}
        />
      )}

      {showDeleteDialog && (
        <DeleteClientModal
          setShowDeleteDialog={setShowDeleteDialog}
          clientToDelete={clientToDelete}
          confirmDelete={confirmDelete}
        />
      )}
    </div>
  );
};

export default ClientDashboard;