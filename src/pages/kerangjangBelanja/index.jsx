import { FaTrashCan, FaMinus, FaPlus } from "react-icons/fa6";
import NavigateBar from "../../components/navbar";
import { allProduct } from "../../variables/allProduct";
import { useState } from "react";
const KeranjangBelanja = () => {
  const [quantity, setQuantity] = useState(0);

  // Fungsi untuk menambah jumlah
  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  // Fungsi untuk mengurangi jumlah
  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <>
      <NavigateBar />
      <div className="max-w-7xl mx-auto">
        <div id="title" className="text-white ">
          <h1>Keranjang Belanja</h1>
        </div>
        <div
          id="containerKeranjang"
          className="flex flex-col gap-4 items-center"
        >
          {allProduct.map((product) => (
            <div
              key={product.id}
              id="cardListProduct"
              className="flex flex-col items-end border border-white rounded-lg w-full px-6 py-2 relative"
            >
              {/* Items */}
              <div className="flex flex-row gap-4 items-start w-full">
                <img src={product.imgUrl} className="w-20 h-full mx-auto" alt="" />
                {/* Title and Price */}
                <div className="flex flex-row items-center justify-between w-full gap-4">
                  <h1 className="text-xl text-white">{product.name}</h1>
                  <p className="text-sm text-gray-300">{product.price}</p>
                </div>
                {/* End Title and Price */}
              </div>
              {/* End Items */}
              {/* Add Quantity */}
              <div className="text-white flex flex-row gap-4 items-center justify-center">
                <FaTrashCan className="cursor-pointer hover:text-red-500" />
                <div className="bg-white/10 backdrop-blur-md rounded-full w-full flex items-center justify-between p-2">
                  <button
                    onClick={handleDecrement}
                    className="p-1 rounded-full hover:bg-white/20 transition-colors"
                  >
                    <FaMinus />
                  </button>
                  <input
                    type="text"
                    inputMode="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="bg-transparent text-white text-center w-16 focus:outline-none"
                    min="0"
                  />
                  <button
                    onClick={handleIncrement}
                    className="p-1 rounded-full hover:bg-white/20 transition-colors"
                  >
                    <FaPlus />
                  </button>
                </div>
                {/* End Add Quantity */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default KeranjangBelanja;
