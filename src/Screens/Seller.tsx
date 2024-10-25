import React, { useState } from "react";
import Sidebar from "@/Elements/Sidebar";

// Example seller data (add more to test pagination)
const sellers = [
  { id: 1, name: "John Doe", email: "john@example.com", phone: "123-456-7890" },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "987-654-3210",
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike@example.com",
    phone: "111-222-3333",
  },
  {
    id: 4,
    name: "Sara Wilson",
    email: "sara@example.com",
    phone: "444-555-6666",
  },
  {
    id: 5,
    name: "Emma Davis",
    email: "emma@example.com",
    phone: "777-888-9999",
  },
  {
    id: 6,
    name: "Chris Brown",
    email: "chris@example.com",
    phone: "999-888-7777",
  },
  {
    id: 7,
    name: "Olivia Taylor",
    email: "olivia@example.com",
    phone: "888-777-6666",
  },
  {
    id: 8,
    name: "Daniel Anderson",
    email: "daniel@example.com",
    phone: "555-666-7777",
  },
  {
    id: 9,
    name: "Sophia Moore",
    email: "sophia@example.com",
    phone: "333-444-5555",
  },
  {
    id: 10,
    name: "Liam White",
    email: "liam@example.com",
    phone: "222-333-4444",
  },
  {
    id: 11,
    name: "Noah Harris",
    email: "noah@example.com",
    phone: "111-222-3333",
  },
  {
    id: 12,
    name: "Mason Clark",
    email: "mason@example.com",
    phone: "123-456-7890",
  },
  {
    id: 13,
    name: "Ava Walker",
    email: "ava@example.com",
    phone: "987-654-3210",
  },
  // Add more sellers as needed
];

const Seller = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedSeller, setSelectedSeller] = useState(null);

  const sellersPerPage = 10;
  const indexOfLastSeller = currentPage * sellersPerPage;
  const indexOfFirstSeller = indexOfLastSeller - sellersPerPage;
  const currentSellers = sellers.slice(indexOfFirstSeller, indexOfLastSeller);

  const handleView = (seller) => {
    setSelectedSeller(seller);
    setIsViewModalOpen(true);
  };

  const handleEdit = (seller) => {
    setSelectedSeller(seller);
    setIsEditModalOpen(true);
  };

  const closeModal = () => {
    setIsViewModalOpen(false);
    setIsEditModalOpen(false);
    setSelectedSeller(null);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-full bg-slate-900 text-white min-h-screen">
        {/* Header */}
        <div className="flex ml-auto h-12 w-[80vw] border border-slate-800 p-3 bg-slate-800">
          <h1 className="text-3xl font-bold text-white ml-auto">Sellers</h1>
        </div>

        {/* Table */}
        <div className="p-5">
          <table className="min-w-full table-auto border-collapse border border-slate-700">
            <thead className="bg-slate-800 text-white">
              <tr>
                <th className="border border-slate-700 p-3 text-left">Name</th>
                <th className="border border-slate-700 p-3 text-left">Email</th>
                <th className="border border-slate-700 p-3 text-left">Phone</th>
                <th className="border border-slate-700 p-3 text-left">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {currentSellers.map((seller, index) => (
                <tr
                  key={seller.id}
                  className={`${
                    index % 2 === 0 ? "bg-slate-700" : "bg-slate-600"
                  } hover:bg-slate-500`}
                >
                  <td className="border border-slate-700 p-3">{seller.name}</td>
                  <td className="border border-slate-700 p-3">
                    {seller.email}
                  </td>
                  <td className="border border-slate-700 p-3">
                    {seller.phone}
                  </td>
                  <td className="border border-slate-700 p-3">
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600"
                      onClick={() => handleView(seller)}
                    >
                      View
                    </button>
                    <button
                      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                      onClick={() => handleEdit(seller)}
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
            {[...Array(Math.ceil(sellers.length / sellersPerPage)).keys()].map(
              (number) => (
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
              )
            )}
          </div>
        </div>

        {/* View Modal */}
        {isViewModalOpen && selectedSeller && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
            <div className="bg-slate-800 text-white p-5 rounded-lg">
              <h2 className="text-xl font-bold">View Seller</h2>
              <p>
                <strong>Name:</strong> {selectedSeller.name}
              </p>
              <p>
                <strong>Email:</strong> {selectedSeller.email}
              </p>
              <p>
                <strong>Phone:</strong> {selectedSeller.phone}
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
        {isEditModalOpen && selectedSeller && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
            <div className="bg-slate-800 text-white p-5 rounded-lg">
              <h2 className="text-xl font-bold">Edit Seller</h2>
              <div className="mt-4">
                <label className="block mb-2">Name</label>
                <input
                  type="text"
                  defaultValue={selectedSeller.name}
                  className="border border-slate-700 p-2 w-full mb-4 bg-slate-900 text-white"
                />
                <label className="block mb-2">Email</label>
                <input
                  type="email"
                  defaultValue={selectedSeller.email}
                  className="border border-slate-700 p-2 w-full mb-4 bg-slate-900 text-white"
                />
                <label className="block mb-2">Phone</label>
                <input
                  type="text"
                  defaultValue={selectedSeller.phone}
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

export default Seller;
