import React, { useState } from "react";
import Sidebar from "@/Elements/Sidebar";

// Example product data (add more to test pagination)
const products = [
  { id: 1, name: "Product A", price: "$50", category: "Electronics" },
  { id: 2, name: "Product B", price: "$30", category: "Clothing" },
  { id: 3, name: "Product C", price: "$100", category: "Home Appliances" },
  { id: 4, name: "Product D", price: "$75", category: "Furniture" },
  { id: 5, name: "Product E", price: "$60", category: "Toys" },
  { id: 6, name: "Product F", price: "$90", category: "Sports" },
  { id: 7, name: "Product G", price: "$120", category: "Books" },
  { id: 8, name: "Product H", price: "$15", category: "Accessories" },
  { id: 9, name: "Product I", price: "$45", category: "Stationery" },
  { id: 10, name: "Product J", price: "$25", category: "Beauty" },
  { id: 11, name: "Product K", price: "$55", category: "Electronics" },
  { id: 12, name: "Product L", price: "$35", category: "Clothing" },
  { id: 13, name: "Product M", price: "$110", category: "Furniture" },
  // Add more products as needed
];

const Product = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const productsPerPage = 10;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handleView = (product) => {
    setSelectedProduct(product);
    setIsViewModalOpen(true);
  };

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setIsEditModalOpen(true);
  };

  const closeModal = () => {
    setIsViewModalOpen(false);
    setIsEditModalOpen(false);
    setSelectedProduct(null);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-full bg-slate-900 text-white min-h-screen">
        {/* Header */}
        <div className="flex ml-auto h-12 w-[80vw] border border-slate-800 p-3 bg-slate-800">
          <h1 className="text-3xl font-bold text-white ml-auto">Products</h1>
        </div>

        {/* Table */}
        <div className="p-5">
          <table className="min-w-full table-auto border-collapse border border-slate-700">
            <thead className="bg-slate-800 text-white">
              <tr>
                <th className="border border-slate-700 p-3 text-left">Name</th>
                <th className="border border-slate-700 p-3 text-left">Price</th>
                <th className="border border-slate-700 p-3 text-left">
                  Category
                </th>
                <th className="border border-slate-700 p-3 text-left">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {currentProducts.map((product, index) => (
                <tr
                  key={product.id}
                  className={`${
                    index % 2 === 0 ? "bg-slate-700" : "bg-slate-600"
                  } hover:bg-slate-500`}
                >
                  <td className="border border-slate-700 p-3">
                    {product.name}
                  </td>
                  <td className="border border-slate-700 p-3">
                    {product.price}
                  </td>
                  <td className="border border-slate-700 p-3">
                    {product.category}
                  </td>
                  <td className="border border-slate-700 p-3">
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600"
                      onClick={() => handleView(product)}
                    >
                      View
                    </button>
                    <button
                      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                      onClick={() => handleEdit(product)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex justify-center mt-5">
            {[
              ...Array(Math.ceil(products.length / productsPerPage)).keys(),
            ].map((number) => (
              <button
                key={number}
                className={`mx-1 px-3 py-1 rounded-lg ${
                  currentPage === number + 1
                    ? "bg-blue-500 text-white"
                    : "bg-slate-700 text-white"
                } hover:bg-slate-600`}
                onClick={() => paginate(number + 1)}
              >
                {number + 1}
              </button>
            ))}
          </div>
        </div>

        {/* View Modal */}
        {isViewModalOpen && selectedProduct && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
            <div className="bg-slate-800 text-white p-5 rounded-lg">
              <h2 className="text-xl font-bold">View Product</h2>
              <p>
                <strong>Name:</strong> {selectedProduct.name}
              </p>
              <p>
                <strong>Price:</strong> {selectedProduct.price}
              </p>
              <p>
                <strong>Category:</strong> {selectedProduct.category}
              </p>
              <button
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Edit Modal */}
        {isEditModalOpen && selectedProduct && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
            <div className="bg-slate-800 text-white p-5 rounded-lg">
              <h2 className="text-xl font-bold">Edit Product</h2>
              <div className="mt-4">
                <label className="block mb-2">Name</label>
                <input
                  type="text"
                  defaultValue={selectedProduct.name}
                  className="border border-slate-700 p-2 w-full mb-4 bg-slate-900 text-white"
                />
                <label className="block mb-2">Price</label>
                <input
                  type="text"
                  defaultValue={selectedProduct.price}
                  className="border border-slate-700 p-2 w-full mb-4 bg-slate-900 text-white"
                />
                <label className="block mb-2">Category</label>
                <input
                  type="text"
                  defaultValue={selectedProduct.category}
                  className="border border-slate-700 p-2 w-full mb-4 bg-slate-900 text-white"
                />
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded mr-2 hover:bg-green-600"
                  onClick={closeModal}
                >
                  Save
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  onClick={closeModal}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
