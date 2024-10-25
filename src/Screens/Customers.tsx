import React, { useState } from "react";
import Sidebar from "@/Elements/Sidebar";

const Customers = () => {
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "123-456-7890",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "234-567-8901",
    },
    {
      id: 3,
      name: "Mark Brown",
      email: "mark@example.com",
      phone: "345-678-9012",
    },
    {
      id: 4,
      name: "Lucy Grey",
      email: "lucy@example.com",
      phone: "456-789-0123",
    },
    {
      id: 5,
      name: "Michael Johnson",
      email: "michael@example.com",
      phone: "567-890-1234",
    },
    {
      id: 6,
      name: "Emily Davis",
      email: "emily@example.com",
      phone: "678-901-2345",
    },
    {
      id: 7,
      name: "David Wilson",
      email: "david@example.com",
      phone: "789-012-3456",
    },
    {
      id: 8,
      name: "Sophia Martinez",
      email: "sophia@example.com",
      phone: "890-123-4567",
    },
    {
      id: 9,
      name: "Chris Brown",
      email: "chris@example.com",
      phone: "901-234-5678",
    },
    {
      id: 10,
      name: "Olivia Thompson",
      email: "olivia@example.com",
      phone: "012-345-6789",
    },
    {
      id: 11,
      name: "Liam Jones",
      email: "liam@example.com",
      phone: "123-456-7890",
    },
    {
      id: 12,
      name: "Ava Garcia",
      email: "ava@example.com",
      phone: "234-567-8901",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEdit = (customer) => {
    setSelectedCustomer(customer);
    setIsModalOpen(true);
  };

  const handleView = (customer) => {
    setSelectedCustomer(customer);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCustomer(null);
  };

  // Pagination Logic
  const indexOfLastCustomer = currentPage * itemsPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - itemsPerPage;
  const currentCustomers = customers.slice(
    indexOfFirstCustomer,
    indexOfLastCustomer
  );
  const totalPages = Math.ceil(customers.length / itemsPerPage);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-full p-8 bg-slate-900">
        <h1 className="text-3xl font-bold text-white mb-6">Customers</h1>

        <table className="table-auto w-full text-white bg-slate-800 rounded-lg">
          <thead>
            <tr className="text-left bg-slate-700">
              <th className="p-3">ID</th>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentCustomers.map((customer) => (
              <tr
                key={customer.id}
                className="border-b border-slate-600 hover:bg-slate-700"
              >
                <td className="p-3">{customer.id}</td>
                <td className="p-3">{customer.name}</td>
                <td className="p-3">{customer.email}</td>
                <td className="p-3">{customer.phone}</td>
                <td className="p-3">
                  <button
                    onClick={() => handleView(customer)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
                  >
                    View
                  </button>
                  <button
                    onClick={() => handleEdit(customer)}
                    className="bg-green-500 text-white px-4 py-2 rounded-md"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="bg-gray-500 text-white px-4 py-2 rounded-md"
          >
            Previous
          </button>
          <span className="text-white">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="bg-gray-500 text-white px-4 py-2 rounded-md"
          >
            Next
          </button>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold">
                  {selectedCustomer ? "Customer Details" : "Edit Customer"}
                </h2>
                <button onClick={closeModal} className="text-red-500">
                  &times;
                </button>
              </div>
              {selectedCustomer && (
                <div>
                  <p>
                    <strong>ID:</strong> {selectedCustomer.id}
                  </p>
                  <p>
                    <strong>Name:</strong> {selectedCustomer.name}
                  </p>
                  <p>
                    <strong>Email:</strong> {selectedCustomer.email}
                  </p>
                  <p>
                    <strong>Phone:</strong> {selectedCustomer.phone}
                  </p>
                </div>
              )}
              <div className="mt-4">
                <button
                  onClick={closeModal}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Customers;
