import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Plus, Search, Package } from "lucide-react";
import {
  AddProductModal,
  ViewProductDetailsModal,
  EditProductModal,
  DeleteProductModal,
} from "./ProductModal";

const ProductDashboard = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showAddProductForm, setShowAddProductForm] = useState(false);
  const [showEditProductForm, setShowEditProductForm] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [productToEdit, setProductToEdit] = useState(null);
  const [productToDelete, setProductToDelete] = useState(null);

  const [products, setProducts] = useState([
    {
      id: "1",
      name: "Lunar School Management Software",
      description: "A comprehensive solution designed to streamline school operations, including attendance tracking, grade management, and communication tools.",
      category: "Software",
      imageUrl: "/Images/Products/sms2.png",
      price: "3000"
    },
    {
      id: "2",
      name: "Lunaccount",
      description: "Simplify cooperative management with features like member tracking, loan management, and financial reporting.",
      category: "Software",
      imageUrl: "/Images/Products/luna.png",
      price: "2000"
    }
  ]);

  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    category: "",
    file: null,
    price: ""
  });

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

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

  const handleAddProduct = (e) => {
    e.preventDefault();
    // In a real application, you would handle file upload here
    setProducts((prevProducts) => [
      ...prevProducts,
      {
        ...newProduct,
        id: (prevProducts.length + 1).toString(),
        imageUrl: URL.createObjectURL(newProduct.file)
      }
    ]);
    setNewProduct({
      name: "",
      description: "",
      category: "",
      file: null,
      price: ""
    });
    setShowAddProductForm(false);
  };

  const handleEditProduct = (product) => {
    setProductToEdit(product);
    setShowEditProductForm(true);
  };

  const handleDeleteProduct = (product) => {
    setProductToDelete(product);
    setShowDeleteDialog(true);
  };

  const confirmDelete = () => {
    setProducts(products.filter(prod => prod.id !== productToDelete.id));
    setShowDeleteDialog(false);
    setProductToDelete(null);
  };

  const handleUpdateProduct = (updatedProduct) => {
    setProducts(products.map(prod =>
      prod.id === updatedProduct.id ? {
        ...updatedProduct,
        imageUrl: updatedProduct.file
          ? URL.createObjectURL(updatedProduct.file)
          : updatedProduct.imageUrl
      } : prod
    ));
    setShowEditProductForm(false);
    setProductToEdit(null);
  };

  useEffect(() => {
    if (showAddProductForm || showEditProductForm || selectedProduct || showDeleteDialog) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showAddProductForm, showEditProductForm, selectedProduct, showDeleteDialog]);

  return (
    <div className="px-2 sm:px-4 lg:px-8 py-4 sm:py-8 min-h-screen relative">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-end items-stretch sm:items-center gap-2 mb-6">
        <button
          onClick={() => setShowAddProductForm(true)}
          className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 transition text-sm sm:text-base"
        >
          <Plus className="h-4 w-4 sm:h-5 sm:w-5" />
          Add Product
        </button>
      </div>

      {/* Product Table */}
      <div className="bg-white rounded-xl p-3 sm:p-6 shadow-lg border border-blue-100">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 flex items-center gap-2">
            <Package className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
            Products List
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
                <th className="py-3 px-2 sm:px-3 text-left text-gray-600 font-medium">Image</th>
                <th className="py-3 px-2 sm:px-3 text-left text-gray-600 font-medium">Name</th>
                <th className="py-3 px-2 sm:px-3 text-left text-gray-600 font-medium">Description</th>
                <th className="py-3 px-2 sm:px-3 text-left text-gray-600 font-medium">Category</th>
                <th className="py-3 px-2 sm:px-3 text-left text-gray-600 font-medium">Price</th>
                <th className="py-3 px-2 sm:px-3 text-left text-gray-600 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentProducts.map((product, index) => (
                <tr key={product.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-2 sm:py-3 px-2 sm:px-3 text-gray-800">{indexOfFirstProduct + index + 1}</td>
                  <td className="py-3">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded overflow-hidden">
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </td>

                  <td className="py-2 sm:py-3 px-2 sm:px-3 text-gray-800">
                    {product.name.length > 10
                      ? `${product.name.slice(0, 10)}...`
                      : product.name}
                  </td>
                  <td className="py-2 sm:py-3 px-2 sm:px-3 text-gray-600">
                    {product.description.length > 10
                      ? `${product.description.slice(0, 10)}...`
                      : product.description}
                  </td>
                  <td className="py-2 sm:py-3 px-2 sm:px-3 text-gray-600">{product.category}</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-3 text-gray-600">
                    Rs.{parseFloat(product.price).toFixed(2)}
                  </td>
                  <td className="py-2 sm:py-3 px-2 sm:px-3">
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="bg-blue-600 text-white py-1 px-2 rounded-lg hover:bg-blue-500 text-xs sm:text-sm whitespace-nowrap"
                      >
                        View
                      </button>
                      <button
                        onClick={() => handleEditProduct(product)}
                        className="bg-green-600 text-white py-1 px-2 rounded-lg hover:bg-green-500 text-xs sm:text-sm whitespace-nowrap"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteProduct(product)}
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
          {filteredProducts.length === 0 && (
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
      {selectedProduct && (
        <ViewProductDetailsModal
          setSelectedProduct={setSelectedProduct}
          selectedProduct={selectedProduct}
        />
      )}

      {showAddProductForm && (
        <AddProductModal
          setShowAddProductForm={setShowAddProductForm}
          handleAddProduct={handleAddProduct}
          newProduct={newProduct}
          setNewProduct={setNewProduct}
        />
      )}

      {showEditProductForm && (
        <EditProductModal
          setShowEditProductForm={setShowEditProductForm}
          productToEdit={productToEdit}
          handleUpdateProduct={handleUpdateProduct}
        />
      )}

      {showDeleteDialog && (
        <DeleteProductModal
          setShowDeleteDialog={setShowDeleteDialog}
          productToDelete={productToDelete}
          confirmDelete={confirmDelete}
        />
      )}
    </div>
  );
};

export default ProductDashboard;