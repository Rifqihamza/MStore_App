import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaBox,
  FaClipboardList,
  FaChartBar,
  FaCog,
} from "react-icons/fa";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
const AdminPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/");
  };
  return (
    <>
      {/* Toggle Button */}
      <nav className="bg-zinc-950 p-4 flex flex-row justify-between items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-2xl focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        <Menu as="div" className="relative">
          <MenuButton className="text-white py-2 px-3 bg-zinc-800 rounded-lg">
            MStore Dashboard
          </MenuButton>
          <MenuItems className="absolute right-0 mt-4 w-[15rem] p-2 text-white rounded-lg bg-zinc-800 shadow-inner shadow-zinc-900 z-50">
            <MenuItem
              as="div"
              className="hover:bg-red-500 p-2 rounded-lg duration-300"
            >
              <button onClick={handleLogout}>Logout</button>
            </MenuItem>
          </MenuItems>
        </Menu>
      </nav>

      {/* Sidebar + Overlay */}
      <div className="relative">
        {/* Overlay saat sidebar dibuka di mobile */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
          ></div>
        )}

        {/* Sidebar */}
        <aside
          className={`fixed left-0 top-0 h-full bg-zinc-950 text-white w-[15rem] transition-transform duration-300 z-50 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 lg:block`}
        >
          <nav>
            <ul className="flex flex-col space-y-2 p-4">
              {[
                {
                  icon: <FaHome />,
                  label: "Dashboard",
                  path: "/admin/dashboardAdmin",
                },
                { icon: <FaBox />, label: "Products", path: "/admin/products" },
                {
                  icon: <FaClipboardList />,
                  label: "Order List",
                  path: "/admin/orderList",
                },
                {
                  icon: <FaChartBar />,
                  label: "Report Sell",
                  path: "/admin/report",
                },
                {
                  icon: <FaCog />,
                  label: "Settings",
                  path: "/admin/settingAdmin",
                },
              ].map((item, index) => (
                <Link
                  key={index}
                  className="flex flex-row gap-4 items-center py-2 px-4 hover:bg-zinc-700 rounded-lg duration-300"
                  to={item.path}
                >
                  {item.icon} {item.label}
                </Link>
              ))}
            </ul>
          </nav>
        </aside>
      </div>

      {/* Main Content */}
      <main
        className={`flex-1 p-6 transition-all duration-300 ${
          isOpen ? "ml-[15rem]" : "ml-0"
        } lg:ml-[15rem]`}
      >
        <Outlet />
      </main>
    </>
  );
};

export default AdminPage;
