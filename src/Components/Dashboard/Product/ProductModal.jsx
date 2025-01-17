import React from "react";
import { X } from "lucide-react";

export function AddProductModal({
  handleAddProduct,
  newProduct,
  setNewProduct,
  setShowAddProductForm,
}) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-lg mx-4 relative h-[90vh] overflow-y-auto">
        <button
          onClick={() => setShowAddProductForm(false)}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
        >
          <X className="h-6 w-6" />
        </button>
        <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
          Add New Product
        </h3>
        <form onSubmit={handleAddProduct} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Product Name
            </label>
            <input
              type="text"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
              placeholder="Enter product name"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              value={newProduct.description}
              onChange={(e) =>
                setNewProduct({ ...newProduct, description: e.target.value })
              }
              placeholder="Enter product description"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              rows={4}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select
              value={newProduct.category}
              onChange={(e) =>
                setNewProduct({ ...newProduct, category: e.target.value })
              }
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            >
              <option value="">Select category</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
              <option value="books">Books</option>
              <option value="home">Home & Living</option>
              <option value="sports">Sports</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Product Image
            </label>
            <input
              type="file"
              onChange={(e) =>
                setNewProduct({ ...newProduct, file: e.target.files[0] })
              }
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              accept="image/*"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Price
            </label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-500">$</span>
              <input
                type="number"
                value={newProduct.price}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, price: e.target.value })
                }
                placeholder="0.00"
                className="w-full p-3 pl-8 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                step="0.01"
                min="0"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}

export function ViewProductDetailsModal({
  setSelectedProduct,
  selectedProduct,
}) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md mx-4 relative h-[70vh] overflow-y-auto">
        <button
          onClick={() => setSelectedProduct(null)}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
        >
          <X className="h-6 w-6" />
        </button>
        <h3 className="text-xl font-semibold text-gray-800 text-center mb-6">
          Product Details
        </h3>
        <div className="space-y-4">
          {selectedProduct.imageUrl && (
            <div className="mb-4">
              <img
                src={selectedProduct.imageUrl}
                alt={selectedProduct.name}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          )}
          <p>
            <span className="font-semibold">Name:</span> {selectedProduct.name}
          </p>
          <p>
            <span className="font-semibold">Description:</span>{" "}
            {selectedProduct.description}
          </p>
          <p>
            <span className="font-semibold">Category:</span>{" "}
            {selectedProduct.category}
          </p>
          <p>
            <span className="font-semibold">Price:</span> Rs.
            {parseFloat(selectedProduct.price).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}

export function EditProductModal({
  setShowEditProductForm,
  productToEdit,
  handleUpdateProduct,
}) {
  const [editedProduct, setEditedProduct] = React.useState(productToEdit);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateProduct(editedProduct);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-lg mx-4 relative h-[90vh] overflow-y-auto">
        <button
          onClick={() => setShowEditProductForm(false)}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
        >
          <X className="h-6 w-6" />
        </button>
        <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
          Edit Product
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Product Name
            </label>
            <input
              type="text"
              value={editedProduct.name}
              onChange={(e) =>
                setEditedProduct({ ...editedProduct, name: e.target.value })
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
              value={editedProduct.description}
              onChange={(e) =>
                setEditedProduct({
                  ...editedProduct,
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
              Category
            </label>
            <select
              value={editedProduct.category}
              onChange={(e) =>
                setEditedProduct({ ...editedProduct, category: e.target.value })
              }
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            >
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
              <option value="books">Books</option>
              <option value="home">Home & Living</option>
              <option value="sports">Sports</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Product Image
            </label>
            <input
              type="file"
              onChange={(e) =>
                setEditedProduct({ ...editedProduct, file: e.target.files[0] })
              }
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              accept="image/*"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Price
            </label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-500">$</span>
              <input
                type="number"
                value={editedProduct.price}
                onChange={(e) =>
                  setEditedProduct({ ...editedProduct, price: e.target.value })
                }
                className="w-full p-3 pl-8 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                step="0.01"
                min="0"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
          >
            Update Product
          </button>
        </form>
      </div>
    </div>
  );
}

export function DeleteProductModal({
  setShowDeleteDialog,
  productToDelete,
  confirmDelete,
}) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md mx-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Confirm Delete
        </h3>
        <p className="text-gray-600 mb-6">
          Are you sure you want to delete product "{productToDelete.name}"? This
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