const OrderList = () => {
  return (
    <>
      <section className="p-6">
        <h1 className="text-white text-2xl text-center font-semibold mb-4">
          Order List
        </h1>
        <div className="overflow-x-auto">
          <table className="w-full text-white">
            {/* Header Table */}
            <thead className="bg-zinc-900">
              <tr>
                {[
                  "No.",
                  "Nama",
                  "Product",
                  "Quantity",
                  "Size",
                  "Harga",
                  "Total",
                  "Timestamp",
                ].map((item, index) => (
                  <th
                    key={index}
                    className="px-4 py-2 text-left"
                  >
                    {item}
                  </th>
                ))}
              </tr>
            </thead>

            {/* Body Table */}
            <tbody>
              {/* Contoh data */}
              {[1, 2, 3].map((num) => (
                <tr key={num} className="hover:bg-zinc-700">
                  <td className="px-4 py-2">{num}</td>
                  <td className="px-4 py-2">
                    John Doe
                  </td>
                  <td className="px-4 py-2">T-Shirt</td>
                  <td className="px-4 py-2">2</td>
                  <td className="px-4 py-2">L</td>
                  <td className="px-4 py-2">
                    Rp 150.000
                  </td>
                  <td className="px-4 py-2">
                    Rp 300.000
                  </td>
                  <td className="px-4 py-2">
                    2024-02-10 14:30
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default OrderList;
