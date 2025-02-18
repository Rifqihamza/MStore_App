import NavigateBar from "../../components/navbar";
import { category } from "../../variables/kategori";
import { allProduct } from "../../variables/allProduct";
import { FaSearch, FaChevronDown } from "react-icons/fa";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

const AllProductPage = () => {
  return (
    <>
      <NavigateBar />
      <div className="container translate-y-[2rem] mx-auto px-6">
        <div
          id="searchbar"
          className="pb-6 px-2 relative flex flex-row items-center"
        >
          <div className="relative w-full flex items-center justify-between gap-6">
            <div id="searchBar">
              <FaSearch className="text-white absolute left-3 top-1/2 transform -translate-y-1/2 z-10" />
              <input
                type="text"
                placeholder="Cari Produk..."
                className="py-2 pl-10 pr-4 w-full rounded-xl bg-zinc-900 shadow-inner shadow-white/10 text-white outline-none"
              />
            </div>
            <div id="filter">
              <Menu as="div" className="relative">
                <MenuButton className="flex items-center gap-2 text-white font-bold uppercase bg-zinc-800 shadow-inner shadow-white/10 px-4 py-3 rounded-xl">
                  Kategori <FaChevronDown />
                </MenuButton>
                <MenuItems
                  as="div"
                  className="absolute right-0 mt-2 w-52 border border-white/5 bg-black p-1 text-white rounded-xl shadow-lg z-50"
                >
                  {category.map((itemsCategory) => (
                    <MenuItem key={itemsCategory.name}>
                      {({ active }) => (
                        <button
                          className={`w-full text-left px-4 py-2 rounded-md transition ${
                            active ? "bg-gray-700" : "bg-black"
                          }`}
                        >
                          {itemsCategory.name}
                        </button>
                      )}
                    </MenuItem>
                  ))}
                </MenuItems>
              </Menu>
            </div>
          </div>
        </div>

        <div
          id="containerItems"
          className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {allProduct.map((product) => (
            <div
              key={product.id}
              className="p-4 flex flex-col justify-between shadow-inner shadow-white/10 bg-zinc-900 rounded-xl"
            >
              <img
                src={product.imgUrl}
                alt={product.name}
                className="w-full h-1/2 object-contain rounded-md m-auto"
              />
              <div id="action" className="space-y-4 py-2 px-2">
                <div id="title">
                  <h1 className="text-lg text-white font-bold">
                    {product.name}
                  </h1>
                  <p className="text-md text-gray-200">
                    Price: Rp {product.price}
                  </p>
                </div>

                <div id="btn" className="flex flex-row gap-2 text-sm">
                  <button className="w-full px-1 py-2 rounded-xl text-white shadow-inner shadow-white/20 bg-zinc-900 hover:bg-zinc-800 hover:shadow-inner hover:shadow-zinc-900 duration-300">
                    Buy
                  </button>
                  <button className="w-full px-1 py-2 rounded-xl text-white shadow-inner shadow-white/20 bg-zinc-900 hover:bg-zinc-800 hover:shadow-inner hover:shadow-zinc-900 duration-300">
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllProductPage;
