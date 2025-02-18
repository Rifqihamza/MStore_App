import { useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
const OrderList = () => {
  const listItems = [];

  // Generate dummy data
  for (let i = 1; i <= 100; i++) {
    const id = i;
    const nama = `Customer ${i}`;
    const product = `Product ${i}`;
    const quantity = Math.floor(Math.random() * 5) + 1; // Random quantity between 1 and 5
    const size = ["S", "M", "L", "XL"][Math.floor(Math.random() * 4)]; // Random size
    const price = `Rp ${(Math.floor(Math.random() * 100) + 200) * 1000}`; // Random price between Rp 200.000 and Rp 300.000
    const totalPrice = `Rp ${quantity * parseInt(price.replace(/\D/g, ""))}`; // Calculate total price
    const timeStamp = new Date(
      2025,
      1,
      Math.floor(Math.random() * 28) + 1,
      Math.floor(Math.random() * 24),
      Math.floor(Math.random() * 60)
    )
      .toLocaleString("id-ID", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
      .replace(/\./g, "-"); // Random timestamp in 2025
    const status = ["Complete", "Confirmed", "Canceled"][
      Math.floor(Math.random() * 3)
    ];
    listItems.push({
      id,
      nama,
      product,
      quantity,
      size,
      price,
      totalPrice,
      status,
      timeStamp,
    });
  }

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of items to display per page

  // Calculate total number of pages
  const totalPages = Math.ceil(listItems.length / itemsPerPage);

  // Get the current page's data
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = listItems.slice(startIndex, endIndex);

  // Handle "Previous" button click
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Handle "Next" button click
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <section className="p-6">
        <h1 className="text-white text-2xl text-center font-semibold mb-4">
          Order List
        </h1>
        <div className="overflow-x-scroll">
          <table className="w-full text-white text-center">
            {/* Header Table */}
            <tr className="border-b border-zinc-700">
              <th className="px-4 py-2 bg-zinc-700">No.</th>
              <th className="px-4 py-2 bg-zinc-700">Nama</th>
              <th className="px-4 py-2 bg-zinc-700">Product</th>
              <th className="px-4 py-2 bg-zinc-700">Quantity</th>
              <th className="px-4 py-2 bg-zinc-700">Size</th>
              <th className="px-4 py-2 bg-zinc-700">Harga</th>
              <th className="px-4 py-2 bg-zinc-700">Total</th>
              <th className="px-4 py-2 bg-zinc-700">Timestamp</th>
              <th className="px-4 py-2 bg-zinc-700">Status</th>
              <th className="px-4 py-2 bg-zinc-700">Action</th>
            </tr>
            {/* Body Table */}
            {currentItems.map((dataItems) => (
              <tr
                key={dataItems.id}
                className="border-b border-zinc-700 hover:bg-zinc-700"
              >
                <td className="px-4 py-3">{dataItems.id}</td>
                <td className="px-4 py-3">{dataItems.nama}</td>
                <td className="px-4 py-3">{dataItems.product}</td>
                <td className="px-4 py-3">{dataItems.quantity}</td>
                <td className="px-4 py-3">{dataItems.size}</td>
                <td className="px-4 py-3">{dataItems.price}</td>
                <td className="px-4 py-3">{dataItems.totalPrice}</td>
                <td className="px-4 py-3">{dataItems.timeStamp}</td>
                <td className="px-4 py-3">{dataItems.status}</td>
                <td className="flex flex-row justify-center items-center gap-2 p-2 ">
                  <button className="bg-green-400 p-2 rounded-lg">
                    <FaCheck />
                  </button>
                  <button className="bg-red-400 p-2 rounded-lg">
                    <FaTimes />
                  </button>
                </td>
              </tr>
            ))}
          </table>

          {/* Pagination Controls */}
          <div id="containerPagination" className="sm:relative fixed bottom-0 left-0 right-0">
            <div id="paginationTable" className="flex justify-center mt-4">
              <button
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-zinc-900 text-white rounded-l-md disabled:opacity-50"
              >
                Previous
              </button>
              <span className="px-4 py-2 bg-zinc-900 text-white">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-zinc-900 text-white rounded-r-md disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OrderList;
